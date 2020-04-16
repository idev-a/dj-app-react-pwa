import React, { useEffect, useState } from "react";

const toDataUrl = (url) => {
  return fetch(url).then((res) => res.blob());
};

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function() {
      let base64data = reader.result;
      resolve(base64data);
    };
  });
};

const resetOrientation = async (blobImage, srcOrientation) => {
  console.log(srcOrientation);
  const srcBase64 = await blobToBase64(blobImage);
  return new Promise((resolve, reject) => {
    try {
      let img = new Image();
      img.onload = () => {
        let canvas = document.createElement("canvas"),
          ctx = canvas.getContext("2d"),
          width = img.width,
          height = img.height;
        ctx.resetTransform();
        ctx.drawImage(img, 0, 0);
        if (4 < srcOrientation && srcOrientation < 9) {
          canvas.width = height;
          canvas.height = width;
        } else {
          canvas.width = width;
          canvas.height = height;
        }

        // transform context before drawing image
        switch (srcOrientation) {
          case 2:
            ctx.transform(-1, 0, 0, 1, width, 0);
            break;
          case 3:
            ctx.transform(-1, 0, 0, -1, width, height);
            break;
          case 4:
            ctx.transform(1, 0, 0, -1, 0, height);
            break;
          case 5:
            ctx.transform(0, 1, 1, 0, 0, 0);
            break;
          case 6:
            ctx.transform(0, 1, -1, 0, height, 0);
            break;
          case 7:
            ctx.transform(0, -1, -1, 0, height, width);
            break;
          case 8:
            ctx.transform(0, -1, 1, 0, 0, width);
            break;
          default:
            break;
        }

        // draw image
        ctx.drawImage(img, 0, 0);
        // export base64
        resolve(canvas.toDataURL());
      };

      img.src = srcBase64;
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

const getOrientation = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = function(e) {
      var view = new DataView(e.target.result);
      if (view.getUint16(0, false) !== 0xffd8) {
        return resolve(-2);
      }
      var length = view.byteLength,
        offset = 2;
      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) return resolve(-1);
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 0xffe1) {
          if (view.getUint32((offset += 2), false) !== 0x45786966) {
            return resolve(-1);
          }

          var little = view.getUint16((offset += 6), false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          var tags = view.getUint16(offset, little);
          offset += 2;
          for (var i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) === 0x0112) {
              return resolve(view.getUint16(offset + i * 12 + 8, little));
            }
          }
        } else if ((marker & 0xff00) !== 0xff00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }
      return resolve(-1);
    };
    reader.readAsArrayBuffer(file);
  });
};

const ProfileImage = ({ imageUrl, className }) => {
  const [imageInBase64, setImageInBase64] = useState(null);

  useEffect(() => {
    if (imageUrl) {
      toDataUrl(imageUrl).then((blobImage) =>
        getOrientation(blobImage).then((orientation) =>
          resetOrientation(blobImage, orientation).then(
            (noTransformImageBase64) => setImageInBase64(noTransformImageBase64)
          )
        )
      );
    }
  }, [imageUrl]);
  return (
    <React.Suspense fallback={<div></div>}>
      <div
        className={className}
        style={{
          background: `url(${imageInBase64}) 0% 0% / cover no-repeat`,
          transform: "rotate(0)",
        }}
      />
    </React.Suspense>
  );
};

export default ProfileImage;

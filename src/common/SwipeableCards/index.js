import React, { useCallback, useState } from "react";
import { Swipeable as SwipeableViews } from "react-swipeable";

const SwipeableCards = ({
  children,
  onSwipeEnd,
  swipeThreshold,
  className,
}) => {
  const [style, setStyle] = useState({});
  const handleSwiping = useCallback(
    (e) => {
      if (e.dir === "Up") {
        setStyle({
          bottom: `${e.absY}px`,
        });
      }
      if (e.dir === "Right") {
        console.log(e);
        setStyle({
          left: `${e.absX}px`,
        });
      }
      if (e.dir === "Left") {
        setStyle({
          left: `-${e.absX}px`,
        });
      }
    },
    [setStyle]
  );

  const handleSwipeEnd = useCallback(
    (e) => {
      if (
        (e.absX > swipeThreshold || e.absY > swipeThreshold) &&
        e.dir !== "Down"
      ) {
        onSwipeEnd(e.dir);
        setStyle({});
      }
    },
    [onSwipeEnd, swipeThreshold]
  );

  return (
    <SwipeableViews
      delta={10}
      onSwiping={handleSwiping}
      preventDefaultTouchmoveEvent
      trackMouse
      trackTouch
      onSwiped={handleSwipeEnd}
    >
      <div className={className} style={style}>
        {children}
      </div>
    </SwipeableViews>
  );
};

export default SwipeableCards;

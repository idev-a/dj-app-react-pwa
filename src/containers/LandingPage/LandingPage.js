import React, { useState, useCallback } from "react";
import Component from "../../components/LandingPage/LandingPageComponent";

const LandingPageContainer = (props) => {
  const [isCookieSet, setIsCookieSet] = useState(
    localStorage.getItem("showCookie")
  );
  const handleLaunchClick = useCallback(() => props.history.push("/signin"), [
    props.history,
  ]);
  const handleSetCookie = useCallback((managePrefClick) => {
    localStorage.setItem("showCookie", "true");
    window.open(
      managePrefClick
        ? "https://hearbk.com/hq/manage-preferences/"
        : "https://hearbk.com/hq/privacy-policy/"
    );
    setIsCookieSet(true)
  }, []);
  return (
    <Component
      handleLaunchClick={handleLaunchClick}
      showCookie={!isCookieSet}
      handleSetCookie={handleSetCookie}
      cookieCloseClick={() => setIsCookieSet(true)}
    />
  );
};

export default LandingPageContainer;

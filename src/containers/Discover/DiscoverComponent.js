import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import Cards, { Card } from "react-swipe-card";
import "./Discover.styles.scss";
import { Typography } from "antd";
import { TextSection } from "../../components/textSection";
import { RoundCard } from "../../components/roundCard";
import profilePicture from "../../assets/img/discover/oh4js6qs.png";
import discoverLogo from "../../assets/img/discover/Group 147.png";
import { BottomMenu } from "../../components/bottomMenu";
import { GroupButton } from "../../components/groupButton";

const { Text } = Typography;

const Component = (props) => {
  return (
    <div className="bg-colored">
      <section className="section-adjust flex-center">
        <div className="container">
          <div className="wrapperContainer">
            <div className={"headerMenu"}>
              <div className={"headerMenuLeft"}>
                <div role="button" onClick={props.handleLogOut}>
                  <img
                    className={"headerMenuLeftIcon"}
                    src={discoverLogo}
                    alt="discoverHeader"
                  />
                </div>
                <div className={"headerActionsContainer"}>
                  <Link to="/listener-feedback">
                    <Text className={"headerMenuLeftText"}>Submit</Text>
                  </Link>
                </div>
              </div>
              <div>
                <GroupButton />
              </div>
            </div>
            {props.showlogOut && (
              <div className={cx("headerMenuLeftText", "logoutText")}>
                <Link to="/">Logout</Link>
              </div>
            )}
            <TextSection
              text="Discover & Rate New Tracks"
              paddingTop="25px"
              paddingBottom="5px"
              size="15px"
            />
            <Cards
              alertRight={<h1 className="alert-right-text">HIT</h1>}
              alertTop={<h1 className="alert-right-text">COOL</h1>}
              alertLeft={<h1 className="alert-right-text">MISS</h1>}
              onEnd={() => console.log("Ënd")}
              className="master-root"
            >
              {props.tracks.map((item, index) => (
                <Card
                  key={item._id}
                  onSwipeTop={() => props.handleSwipe(item._id, 1)}
                  onSwipeLeft={() => props.handleSwipe(item._id, 0)}
                  onSwipeRight={() => props.handleSwipe(item._id, 2)}
                >
                  <RoundCard>
                    <div className="profileSection">
                      <img className={"profileImage"} src={profilePicture} alt="profile" />
                      <Text className="profileSectionUserName">
                        {item.userName}
                      </Text>
                    </div>
                    <TextSection
                      text={item.name}
                      paddingTop="25px"
                      paddingBottom="2px"
                      size="20px"
                      color="#1B3543"
                      weight="bold"
                    />
                    <TextSection
                      text={item.fullName}
                      color="#1B3543"
                      paddingTop="0px"
                      paddingBottom="0px"
                      size="12px"
                    />
                    <div className={"embededContainer"}>
                      <iframe
                        title="Youtube Player"
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameborder="no"
                        src={item.trackId}
                      ></iframe>
                    </div>
                  </RoundCard>
                </Card>
              ))}
            </Cards>
          </div>
          <BottomMenu />
        </div>
      </section>
    </div>
  );
};

export default Component;

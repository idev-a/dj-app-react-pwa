import React, { useState } from "react";
import Cards, { Card } from 'react-swipe-card';
import PropTypes, { number } from "prop-types";
import { connect } from "react-redux";
import "./Discover.styles.scss";
import { Button, Collapse, Drawer, Icon, Input, Typography } from "antd";
import {TextSection} from '../../components/textSection';
import {RoundCard} from '../../components/roundCard'
import { Select, Radio } from "antd";
import headerMenuIcon from "../../assets/img/discover/Group 147.png"
import equlizer from "../../assets/img/discover/Group 134.png"
import profilePicture from "../../assets/img/discover/oh4js6qs.png"
import start1 from "../../assets/img/discover/dolar.png"
import start2 from "../../assets/img/discover/star.png"
import start3 from "../../assets/img/discover/graph.png"
import {BottomMenu} from "../../components/bottomMenu"
import {GroupButton} from "../../components/groupButton"

import api from '../../config';
import { T } from "antd/lib/upload/utils";
import { from } from "rxjs";
const { Option } = Select;
const { Title, Text } = Typography;


var data = [{
    name: "King Push",
    fullName: "Vess Dynamick 1",
    userName: "@vessdynamick",
    trackLink: "",
    show: true,
  }, {
    name: "King Push 1",
    fullName: "Vess Dynamick 4",
    userName: "@vessdynamick",
    trackLink: "",
    show: false,
  },{
    name: "King Push 2",
    fullName: "Vess Dynamick3",
    userName: "@vessdynamick",
    trackLink: "",
    show: false,
  },{
    name: "King Push 3",
    fullName: "Vess Dynamick 4",
    userName: "@vessdynamick",
    trackLink: "",
    show: false,
  }];

const SwipeWrapper = () => {

  function changeShowDiv(number, position){
    if(number< data.length-1){
      data[number].show = false
      data[number+1].show = true
    }
    console.log(position, data);
  }
  return (
    <Cards
    alertRight={<h1 className="alert-right-text">COOL</h1>}
    alertTop={<h1 className="alert-right-text">HITS</h1>}
    alertLeft={<h1 className="alert-right-text">MISS</h1>}
    onEnd={() => console.log("Ënd")
    } className='master-root'>
        {data.map((item, index) => 
          <Card
            
            onSwipeTop={() => changeShowDiv(index, "Top")}
            onSwipeLeft={() => changeShowDiv(index, "Left")} 
            onSwipeRight={() => changeShowDiv(index, "Right")}>
                <RoundCard>
                  <div className="profileSection">
                      <img src={profilePicture}/>
                      <Text className="profileSectionUserName">{item.userName}</Text>
                  </div>
                  <TextSection text={item.name} paddingTop="33px" paddingBottom="2px" size="20px" color="#1B3543" weight="bold"/>
                  <TextSection text={item.fullName} color="#1B3543" paddingTop="0px" paddingBottom="20px" size="12px"/>
                  <div className={'playerSection'}>
                  <audio className="audio-element">
                    <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
                  </audio>
                    <img src={equlizer}/>
                  </div>
                </RoundCard>
          </Card>
        )}
      </Cards>
  )
}

const defaultValues = {
  feedbackPrice: 0,
};

const Discover = props => {
  const [state, setState] = useState({ ...defaultValues });
  const data = ['Alexandre', 'Thomas', 'Lucien']

  return (
    <div className="bg-colored">
      <section className="section-adjust flex-center">
        <div style={{ background: "white" }}>
            <div className="wrapperContainer">
              <div className={'headerMenu'}>
                <div className={'headerMenuLeft'}>
                  <img className={'headerMenuLeftIcon'} src={headerMenuIcon}/>
                  <Text className={'headerMenuLeftText'}>Submit</Text>
                </div>
                <div>
                <GroupButton />
                </div>
              </div>
              <TextSection text="Discover & Rate New Tracks" paddingTop="20px" paddingBottom="5px" size="15px"/>
              <SwipeWrapper/>
              <RoundCard top="20px">
                  <TextSection text="My Activity" paddingTop="0px" paddingBottom="2px" size="18px" color="#1B3543" weight="bold"/>
                  <div className="activityContainer">
                    <div>
                      <div className="activiyButtonContainer">
                          <img className={'activiyButton'} src={start2}/>
                      </div>
                      <div className={'activityInfo'}>
                        <Text className={'activityInfoNumber'}>10,000+</Text>
                        <Text className={'activityInfoStatus'}>POINTS</Text>
                      </div>
                    </div>
                    <div>
                      <div className="activiyButtonContainer">
                          <img className={'activiyButton'} src={start1}/>
                      </div>
                      <div className={'activityInfo'}>
                        <Text className={'activityInfoNumber'}>$1,000</Text>
                        <Text className={'activityInfoStatus'}>EARNINGS</Text>
                      </div>
                    </div>
                    <div>                    
                      <div className="activiyButtonContainer">
                          <img className={'activiyButton'} src={start3}/>
                      </div>
                      <div className={'activityInfo'}>
                        <Text className={'activityInfoNumber'}>103</Text>
                        <Text className={'activityInfoStatus'}>TRACKS</Text>
                      </div>
                    </div>
                  </div>
              </RoundCard>
              <BottomMenu/>
            </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
    token: state.auth.user.token
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);

import React, { useState } from "react";
import Cards, { Card } from 'react-swipe-card';
import ReactWaves from '@dschoon/react-waves';
import africa from '../../assets/sound/track.mp3';
import PropTypes, { number } from "prop-types";
import { connect } from "react-redux";
import "./Discover.styles.scss";
import { Button, Collapse, Drawer, Icon, Input, Typography } from "antd";
import {TextSection} from '../../components/textSection';
import {RoundCard} from '../../components/roundCard'
import { Select, Radio } from "antd";
import headerMenuIcon from "../../assets/img/discover/Group 147.png"
import equlizer from "../../assets/img/discover/Equalizer.png"
import profilePicture from "../../assets/img/discover/oh4js6qs.png"
import start1 from "../../assets/img/discover/dolar.png"
import start2 from "../../assets/img/discover/star.png"
import start3 from "../../assets/img/discover/graph.png"
import start from "../../assets/img/discover/play.png"
import next from "../../assets/img/discover/next.png"
import previous from "../../assets/img/discover/previous.png"
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
  const [state, setState] = useState({ ...data });
  function changeShowDiv(number, position){
    if(number< data.length-1){
      data[number].show = false
      data[number+1].show = true
    }
  }
  function playPause(id){
    data[id].show = data[id].show ? false : true;
    console.log(this.state);
    
  }
  return (
    <Cards
    alertRight={<h1 className="alert-right-text">HIT</h1>}
    alertTop={<h1 className="alert-right-text">COOL</h1>}
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
                  <ReactWaves
                    audioFile={africa}
                    className='react-waves'
                    options={{
                      barGap: 2,
                      barWidth: 2,
                      barHeight: 2,
                      cursorWidth: 1,
                      height: 80,
                      width: 350,
                      hideScrollbar: true,
                      progressColor: '#3788B2',
                      normalize: true,
                      responsive: true,
                      waveColor: '#D8D8D8',
                    }}
                    volume={1}
                    zoom={1}
                    playing={item.show}
                    pos={0}
                    onPosChange={()=>console.log("chan")}
                  />
                  <div className={'playerControlSection'}>
                    <div className={'playerControl'}>
                      <img src={previous}/>
                    </div>
                    <div className={'playing'} onClick={()=>playPause(index)}>
                      <img src={start}/>
                    </div>
                    <div className={'playerControl'}>
                      <img src={next}/>
                    </div>
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
              <TextSection text="Discover & Rate New Tracks" paddingTop="30px" paddingBottom="5px" size="15px"/>
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

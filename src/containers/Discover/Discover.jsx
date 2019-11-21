import React, { useState } from "react";
import Cards, { Card } from 'react-swipe-card';
import { Line } from 'rc-progress';
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
import pause from "../../assets/img/discover/pause.png"
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
    _id: "12345",
    name: "King Push",
    fullName: "Vess Dynamick 1",
    userName: "@vessdynamick",
    trackLink: "https://drive.google.com/file/d/1F5W57IQSE4EP-qpS5wubes1M1tSY2HW5/view?usp=sharing",
    show: true,
  }, {
    _id: "12346",
    name: "King Push 1",
    fullName: "Vess Dynamick 4",
    userName: "@vessdynamick",
    trackLink: "https://drive.google.com/file/d/1jFd2httckYmKQcKMUSp88chCDlN4wDr8/view?usp=sharing",
    show: false,
  },
  {
    _id: "12347",
    name: "King Push 2",
    fullName: "Vess Dynamick3",
    userName: "@vessdynamick",
    trackLink: "https://drive.google.com/file/d/1R5AhC2Lfk_JFpjOccMtMVe-MG26lwu4q/view?usp=sharing",
    show: false,
  }
];

const SwipeWrapper = () => {
  const [state, setState] = useState({ ...data });
  function changeShowDiv(number, position){
    if(number< data.length-1){
      data[number].show = false
      data[number+1].show = true
    }
  }

  function getBlobUrlofTracks(urlDrive){
    var res = urlDrive.match(/[-\w]{25,}/)
    let url = `http://docs.google.com/uc?export=open&id=${res[0]}`;
    return url;
  }
  function playSong(id){
    var music = document.getElementById(id);
    var playPause = document.getElementById(`img${id}`);
    if (music.paused) {
      music.play();
      playPause.src = pause
    } else {
      music.pause();
      playPause.src = start
    }    
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
            key={item._id}
            onSwipeTop={() => changeShowDiv(index, "Top")}
            onSwipeLeft={() => changeShowDiv(index, "Left")} 
            onSwipeRight={() => changeShowDiv(index, "Right")}>
                <RoundCard>
                  <div className="profileSection">
                      <img className={'profileImage'} src={profilePicture}/>
                      <Text className="profileSectionUserName">{item.userName}</Text>
                  </div>
                  <TextSection text={item.name} paddingTop="25px" paddingBottom="2px" size="20px" color="#1B3543" weight="bold"/>
                  <TextSection text={item.fullName} color="#1B3543" paddingTop="0px" paddingBottom="0px" size="12px"/>
                   <audio controls="controls" id={item._id} className={'DisplayNone'}>
                      <source src={getBlobUrlofTracks(item.trackLink)} type="audio/mp3" />
                  </audio> 
                  {/* <ReactWaves
                    audioFile={getBlobUrlofTracks(item.trackLink)}
                    className='react-waves'
                    options={{
                      barGap: 2,
                      barWidth: 2,
                      barHeight: 2,
                      cursorWidth: 1,
                      height: 50,
                      width: 225,
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
                  /> */}
                  <Line className={'progressbar'} percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
                  <div className={'playerControlSection'}>
                    <div className={'playerControl'}>
                      <img src={previous}/>
                    </div>
                    <div className={'playing'}>
                      <img id={`img${item._id}`} src={start} alt="Hi" onClick={()=>playSong(item._id)}/>
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
              <TextSection text="Discover & Rate New Tracks" paddingTop="25px" paddingBottom="5px" size="15px"/>
              <SwipeWrapper/>
              {/* <RoundCard top="20px">
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
              </RoundCard> */}
            </div>
            <BottomMenu/>
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

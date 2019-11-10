import React, { useState } from "react";
import PropTypes from "prop-types";
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

import api from '../../config';
import { T } from "antd/lib/upload/utils";
import { from } from "rxjs";
const { Option } = Select;
const { Title, Text } = Typography;

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
                  <Text>Menu 2</Text>
                </div>
              </div>
              <TextSection text="Discover & Rate New Tracks" paddingTop="20px" paddingBottom="20px" size="15px"/>
              <RoundCard>
                <div className="profileSection">
                    <img src={profilePicture}/>
                    <Text className="profileSectionUserName">@vessdynamick</Text>
                </div>
                <TextSection text="King Push" paddingTop="33px" paddingBottom="2px" size="20px" color="#1B3543" weight="bold"/>
                <TextSection text="Vess Dynamick" color="#1B3543" paddingTop="0px" paddingBottom="20px" size="12px"/>
                <div className={'playerSection'}>
                  <img src={equlizer}/>
                </div>
              </RoundCard>
              <RoundCard top="50px">
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

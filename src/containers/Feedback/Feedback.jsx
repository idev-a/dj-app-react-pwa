import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Feedback.styles.scss";
import { Button, Collapse, Drawer, Icon, Input, Typography } from "antd";
import { LocationSearch } from "../../components/geoSearch";
import { Select, Radio } from "antd";
import { HITCard, MapIcon, PROCard } from "../../components/vectorComponents";
import { TagsInput } from "../../components/tags";
import { BannerWithSub } from "../../components/bannerWithSub";
import { CardSection } from "../../components/cardSection";
import { DatePicker } from "../../components/datepicker";
import soundCloud  from "../../assets/img/feedback/Group 132.png"
import card from "../../assets/img/feedback/Group 108.png"
import api from '../../config';
import { T } from "antd/lib/upload/utils";
const { Option } = Select;
const { Title, Text } = Typography;

const defaultValues = {
  feedbackPrice: 0,
};

/*
 *
 * */
const Feedback = props => {
  const [state, setState] = useState({ ...defaultValues });

  const changePriceSelector1 = () => {
    setState({...state, 'feedbackPrice': 1})      
  }
  const changePriceSelector0 = () => {
    setState({...state, 'feedbackPrice': 0})    
  }
  console.log(state, props)
  return (
    <div className="bg-colored">
      <section className="section-adjust flex-center">
        <div style={{ background: "white" }}>
          <BannerWithSub />
          <div className={"wrapper"}>
            <div className={'textSectionContainer'}>
                <Text className={'textSectionTitle'}>How it works:</Text>
                <Text className={'textSectionSubTitle'}>Paste a link to your track and we'll share your <br/>music with people looking to discover new music. <br /> Each listener will rate your track a HIT, <br/>a MISS or just COOL. Once all the rating are in, <br/>we'll share the results with you! </Text>
            </div>

            <CardSection title="Start Campaign Now">
                <Text className={'addMusicText'}>Add Your Music</Text>
                <div>
                    <Input
                        placeholder='Music Link'
                        className={'startCampaignInput'}
                    />
                    <Icon className={'startCampaignInputIcon'} type="link" style={{ fontSize: 24 }} />
                    
                </div>
                <img src={soundCloud}/>
            </CardSection>
            <CardSection title="Select # of Listeners">
                <div className={`priceingBox ${state.feedbackPrice==0 ? 'priceSelected' : ''}`} onClick={changePriceSelector0}>
                    <Text className={`priceingBoxText ${state.feedbackPrice==0 ? 'priceSelectedTextColor' : ''}`}>$1 for 10 Ratings</Text>
                </div>
                <div className={`priceingBox marginTop15 ${state.feedbackPrice==1 ? 'priceSelected' : ''}`} onClick={changePriceSelector1}>
                    <Text className={`priceingBoxText ${state.feedbackPrice==1 ? 'priceSelectedTextColor' : ''}`}>$5 for 100 Ratings</Text>
                </div>
            </CardSection>
            <CardSection title="Select Payment">
                <Text className={'addMusicText'}>Credit Card</Text>
                <div className={'addCardSection'}>
                    <img src={card}/>
                    <Text className={'addCardSectionText'}>Add a new Card</Text>
                </div>
            </CardSection>

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
)(Feedback);

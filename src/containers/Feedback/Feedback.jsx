import React, { useState } from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Feedback.styles.scss";
import { Button, Collapse, Drawer, Icon, Input, Typography } from "antd";
import { LocationSearch } from "../../components/geoSearch";
import { Select, Radio } from "antd";
import Popup from "reactjs-popup";
import { HITCard, MapIcon, PROCard } from "../../components/vectorComponents";
import { TagsInput } from "../../components/tags";
import { BannerWithSub } from "../../components/bannerWithSub";
import { CardSection } from "../../components/cardSection";
import { PopUp } from "../../components/popUp";
import { DatePicker } from "../../components/datepicker";
import soundCloud  from "../../assets/img/feedback/Group 132.png"
import card from "../../assets/img/feedback/Group 108.png"
import api from '../../config';
import { T } from "antd/lib/upload/utils";
import { red } from "ansi-colors";
const { Option } = Select;
const { Title, Text } = Typography;

const defaultValues = {
  feedbackPrice: 0,
  cardInformation: {},
  openPOP: false
};

/*
 *
 * */
const Feedback = props => {
const [state, setState] = useState({ ...defaultValues });


const CardInfo = (cardInformation) => {
    setState({...state, 'cardInformation': {...cardInformation}}) 
    setState({...state, 'openPOP': false}) 
}

  const changePriceSelector1 = () => {
    setState({...state, 'feedbackPrice': 1})      
  }
  const changePriceSelector0 = () => {
    setState({...state, 'feedbackPrice': 0})    
  }

  const openCardPopoup = () => {
    setState({...state, 'openPOP': true})    
  }
  return (
    <div className="bg-colored">
      <section className="section-adjust flex-center">
        <div style={{ background: "white" }}>
          <BannerWithSub Title="Submit a Hit" SubTitle="Let’s get your music heard!" />
          <div className={"wrapper"}>
            <div className={'textSectionContainer'}>
                <Text className={'textSectionTitle'}>How it works:</Text>
                <Text className={'textSectionSubTitle'}>Paste a link to your track and we’ll share your music with people looking to discover new music. Each listener will rate your track a HIT, a MISS or just COOL. Once all the ratings are in, we’ll share the results with you!</Text>
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
                <div className={'addCardSection'} onClick={openCardPopoup}>
                      <img src={card}/>
                      <Text className={'addCardSectionText'}>Add a new Card</Text>
                </div>
                <PopUp 
                title="Add a new Card"
                open={state.openPOP}
                >
                  <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                    <div>
                      <Elements>
                        <CheckoutForm CardInformation={CardInfo} />
                      </Elements>
                    </div>
                  </StripeProvider>
                </PopUp>
            </CardSection>
            <div className={'billingSection'}>
                <Text className={'billingSectionText'}>Order Total:</Text>
                <Text className={'billingSectionText'}>${state.feedbackPrice==0?'1':'5'}</Text>
            </div>
            


            <PopUp 
                title="Error"
                trigger={
                  <div className={"payNowButton"}>
                  <Text className={'addCardButtonText'}>Pay Now</Text>
                  <Icon type="arrow-right" style={{ fontSize: 24, color: '#ffffff' }} />
              </div>
                }
              >
                <div className="errorPayment">
                    <Icon type="close-circle" style={{fontSize: 24,color: 'red'}}></Icon>
                    <Text className={'marginTop15'}>Please re-check your payment details and try again</Text>
                </div>
            </PopUp>
              

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

import React, { Component } from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import { connect } from "react-redux";
import "./Feedback.styles.scss";
import { Icon, Input, Typography } from "antd";
import { BannerWithSub } from "../../components/bannerWithSub";
import { CardSection } from "../../components/cardSection";
import { PopUp } from "../../components/popUp";
import youtube  from "../../assets/img/youtube.png"
import card from "../../assets/img/feedback/Group 108.png"
import { MessagePopUp } from "../../components/messagePopUp"
import axios from 'axios';

import api from '../../config';

const { Text } = Typography;

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      feedbackPrice: 0,
      openPOP: false,
      trackId: null,
      messagePopUp: false,
      popUpTitle:"",
      popUpType:"",
      popUpText:"",
      selectedMediaType: "youTube",
      savedCard:{},
      cardSelect: 0,
    };
  }
  componentWillMount() {

    axios.get(`${api}/api/feedback/getSavedCard`, {
      headers: {
        'x-access-token': this.props.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.data) {
        this.setState({savedCard: {last4 : res.data.cardInfo.lastDigits, customerId: res.data.cardInfo.customerId}, cardSelect: 1})        
      }
    });


  }
  render() {
    const CardInfo = (cardInformation) => {
      this.setState({'cardInformation': cardInformation, cardSelect: 0}) 
      closeCardPopoup()
    }

      const changePriceSelector1 = () => {
        this.setState({'feedbackPrice': 1})      
      }
      const changePriceSelector0 = () => {
        this.setState({'feedbackPrice': 0})    
      }

      const openCardPopoup = () => {
        this.setState({'openPOP': true})    
      }
      const closeCardPopoup = () => {
        this.setState({'openPOP': false})    
      }
      const handleChange =(event)=> {
        this.setState({ trackId: event.target.value});
      }
      const paymentSubmit = () => {
        if(!this.state.trackId){
          this.setState({messagePopUp: true, popUpTitle : "Track ID Empty", popUpType: 1, popUpText:"Track id is a required filed, its cannot be empty !"})
          setTimeout(()=>{ this.setState({messagePopUp: false,}) }, 3000)
          return;
        }
        var paymentToken;
        var lastDigits;
        var exiting;
        if(this.state.cardSelect===1){
          paymentToken = this.state.savedCard.customerId;
          lastDigits = this.state.savedCard.last4;
          exiting = true
        }else{
          paymentToken = this.state.cardInformation.id;
          lastDigits = this.state.cardInformation.card.last4;
          exiting = false;
        }
        if(!paymentToken){
          this.setState({messagePopUp: true, popUpTitle : "No Card Information Found", popUpType: 1, popUpText:"Card Information is a required filed, its cannot be empty !"})
          setTimeout(()=>{ this.setState({messagePopUp: false,}) }, 3000)
          return;
        }


        fetch(`${api}/api/feedback/add`, {
            method: "POST",
            body: JSON.stringify({email: this.props.email, trackId:this.state.trackId, paymentToken: paymentToken, type: this.state.feedbackPrice, lastDigits: lastDigits, exiting: exiting}),
            headers: {
                'x-access-token': this.props.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) =>{
            if(res.status===201){
              this.setState({messagePopUp: true, popUpTitle : "Payment Success", popUpType: 1, popUpText:"Thank you for your order."})
              setTimeout(()=>{ this.setState({messagePopUp: false,}) }, 1000)
            }else{
              this.setState({messagePopUp: true, popUpTitle : "Error", popUpType: 0, popUpText:"Please re-check your payment details and try again"})
              setTimeout(()=>{ this.setState({messagePopUp: false,}) }, 1000)
            }
        })
        
    }
    return(
      <div className="bg-colored">
        <section className="section-adjust flex-center">
          <div className="container">
            <BannerWithSub Title="Submit a Hit" SubTitle="Let’s get your music heard!" />
            <div className={"wrapper"}>
              <div className={'textSectionContainer'}>
                  <Text className={'textSectionTitle'}>How it works:</Text>
                  <Text className={'textSectionSubTitle'}>Paste a link to your track and we’ll share your music with people looking to discover new music. Each listener will rate your track a HIT, a MISS or just COOL. Once all the ratings are in, we’ll share the results with you!</Text>
              </div>

              <CardSection title="Start Campaign Now">
                  <Text className={'addMusicText'}>Add Your Music</Text>
                  <div className={'addTrackWrapper'}>
                      <Input
                          placeholder='Track ID'
                          className={'startCampaignInput'}
                          onChange={handleChange}
                          value={this.state.trackId}
                      />
                      <Icon className={'startCampaignInputIcon'} type="link" style={{ fontSize: 24 }} />
                      
                  </div>
                  <div className={'youTubeWrapper'}>
                    <img src={youtube} alt="youTube" className={'youTubeLogo'}/>
                    <span className={'youTubeText'}>Youtube</span>
                  </div>
                  
              </CardSection>
              <CardSection title="Select # of Listeners">
                  <div className={`priceingBox ${this.state.feedbackPrice === 0 ? 'priceSelected' : ''}`} onClick={changePriceSelector0}>
                      <Text className={`priceingBoxText ${this.state.feedbackPrice === 0 ? 'priceSelectedTextColor' : ''}`}>$1 for 10 Ratings</Text>
                  </div>
                  <div className={`priceingBox marginTop15 ${this.state.feedbackPrice === 1 ? 'priceSelected' : ''}`} onClick={changePriceSelector1}>
                      <Text className={`priceingBoxText ${this.state.feedbackPrice === 1 ? 'priceSelectedTextColor' : ''}`}>$5 for 100 Ratings</Text>
                  </div>
              </CardSection>
              <CardSection title="Select Payment">
                  <Text className={'addMusicText'}>Credit Card</Text>
                  {
                    this.state.savedCard.last4 ? (
                      <div className={'addCardSection'}>
                        <img src={card} alt={'Add a new Card'}/>
                        <Text className={'addCardSectionText'}>{`**** ${this.state.savedCard.last4}`}</Text>
                      </div>
                    ): null
                  }
                  {
                    this.state.cardInformation && this.state.cardInformation.id ? (
                      <div className={'addCardSection'} onClick={openCardPopoup}>
                        <img src={card} alt={'Add a new Card'}/>
                    <Text className={'addCardSectionText'}>{`**** ${this.state.cardInformation.card.last4}`}</Text>
                      </div>
                    ): ''
                  }

                  <div className={'addCardSection'} onClick={openCardPopoup}>
                        <img src={card} alt={'Add a new Card'}/>
                        <Text className={'addCardSectionText'}>Add a new Card</Text>
                  </div>
                  <PopUp 
                  title="Add a new Card"
                  open={this.state.openPOP}
                  closeClick={() => { this.setState({ openPOP: false })}}
                  >
                    <StripeProvider apiKey="pk_test_HhCQqzIxD2wH7EXferZHg18W">
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
                  <Text className={'billingSectionText'}>${this.state.feedbackPrice===0?'1':'5'}</Text>
              </div>
              
              <div className={"payNowButton"} onClick={()=>paymentSubmit()}>
                    <Text className={'addCardButtonText'}>Pay Now</Text>
                    <Icon type="arrow-right" style={{ fontSize: 24, color: '#ffffff' }} />
              </div>

              <MessagePopUp  title={this.state.popUpTitle} type={this.state.popUpType} text={this.state.popUpText} open={this.state.messagePopUp} />
                

            </div>
          </div>
        </section>
      </div>

    )
  }

}
const mapStateToProps = state => ({
    token: state.auth.user.token,
    email: state.auth.user.email
});

const mapDispatchToProps = dispatch => ({
  //fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);

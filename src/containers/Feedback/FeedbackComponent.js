import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { Icon, Input, Typography, Button } from "antd";
import content from "./Feedback.content";
import CheckoutForm from "./CheckoutForm";
import "./Feedback.styles.scss";
import { BannerWithSub } from "../../components/bannerWithSub";
import { CardSection } from "../../components/cardSection";
import { PopUp } from "../../components/popUp";
import youtube from "../../assets/img/youtube.png";
import selectedIcon from "../../assets/img/greenTick.png";
import card from "../../assets/img/feedback/Group 108.png";
import { MessagePopUp } from "../../components/messagePopUp";
const { Text } = Typography;

const Component = (props) => {
  return (
    <div className="bg-colored">
      <section className="section-adjust flex-center">
        <div className="container">
          <BannerWithSub
            Title={content.BANNER.TITLE}
            SubTitle={content.BANNER.SUB_TITLE}
          />
          <div className={"wrapper"}>
            <div className={"textSectionContainer"}>
              <Text className={"textSectionTitle"}>
                {content.TEXT_SECTION.TITLE}
              </Text>
              <Text className={"textSectionSubTitle"}>
                {content.TEXT_SECTION.SUB_TITLE}
              </Text>
            </div>

            <CardSection title="Start Campaign Now">
            <Text className={'addMusicText'}>Select your media type option</Text>
              <div className={"addTrackWrapper"}>
                {props.selectedMediaType === content.MEDIA_TYPE_YOUTUBE ? (
                  <Input
                    placeholder="Paste your YouTube url"
                    className={"startCampaignInput"}
                    onChange={props.handleTrackUrlChange}
                    value={props.trackUrl}
                  />
                ) : (
                  <Input type="file" onChange={props.handleFileUpload}></Input>
                )}
              </div>
              <div
                className={`youTubeWrapper`}
                role="button"
                onClick={() =>
                  props.setSelectedMediaType(content.MEDIA_TYPE_YOUTUBE)
                }
              >
                <div style={{ display: "flex", alignItems: "center"}}>
                    <img src={youtube} alt="youTube" className={"youTubeLogo"} />
                    <span className={"youTubeText"}>Add YouTube Url</span>
                </div>
                { props.selectedMediaType === content.MEDIA_TYPE_YOUTUBE && 
                  <div>
                    <img src={selectedIcon} alt="selected" className="selectedIcon"/>
                  </div>}
              </div>
              <div
                className={`youTubeWrapper`}
                role="button"
                onClick={() =>
                  props.setSelectedMediaType(content.MEDIA_TYPE_UPLOAD)
                }
              >
                <span className={"youTubeText"}>
                  Upload MP3 file (10MB max)
                </span>
                { props.selectedMediaType === content.MEDIA_TYPE_UPLOAD && 
                  <div>
                    <img src={selectedIcon} alt="selected" className="selectedIcon"/>
                  </div>}
              </div>
            </CardSection>
            <CardSection title="Select # of Listeners">
              <div
                className={`priceingBox ${
                  props.feedbackPrice === 0 ? "priceSelected" : ""
                }`}
                onClick={() => props.setFeedbackPrice(0)}
              >
                <Text
                  className={`priceingBoxText ${
                    props.feedbackPrice === 0 ? "priceSelectedTextColor" : ""
                  }`}
                >
                  $1 for 10 Ratings
                </Text>
              </div>
              <div
                className={`priceingBox marginTop15 ${
                  props.feedbackPrice === 1 ? "priceSelected" : ""
                }`}
                onClick={() => props.setFeedbackPrice(1)}
              >
                <Text
                  className={`priceingBoxText ${
                    props.feedbackPrice === 1 ? "priceSelectedTextColor" : ""
                  }`}
                >
                  $5 for 100 Ratings
                </Text>
              </div>
            </CardSection>
            <CardSection title="Select Payment">
              <Text className={"addMusicText"}>Credit Card</Text>
              {props.savedCard.last4 ? (
                <div className={"addCardSection"}>
                  <img src={card} alt={"Add a new Card"} />
                  <Text
                    className={"addCardSectionText"}
                  >{`**** ${props.savedCard.last4}`}</Text>
                </div>
              ) : null}
              {props.cardInformation && props.cardInformation.id ? (
                <div
                  className={"addCardSection"}
                  onClick={props.showCreditCardPopUp}
                >
                  <img src={card} alt={"Add a new Card"} />
                  <Text
                    className={"addCardSectionText"}
                  >{`**** ${props.cardInformation.card.last4}`}</Text>
                </div>
              ) : (
                ""
              )}

              <div
                className={"addCardSection"}
                onClick={() => props.handleShowCreditCardPopUp(true)}
              >
                <img src={card} alt={"Add a new Card"} />
                <Text className={"addCardSectionText"}>Add a new Card</Text>
              </div>
              <PopUp
                title="Add a new Card"
                open={props.showCreditCardPopUp}
                closeClick={() => props.handleShowCreditCardPopUp(false)}
              >
                <StripeProvider apiKey="pk_test_HhCQqzIxD2wH7EXferZHg18W">
                  <div>
                    <Elements>
                      <CheckoutForm
                        CardInformation={props.saveCardInformation}
                      />
                    </Elements>
                  </div>
                </StripeProvider>
              </PopUp>
            </CardSection>
            <div className={"billingSection"}>
              <Text className={"billingSectionText"}>Order Total:</Text>
              <Text className={"billingSectionText"}>
                ${props.feedbackPrice === 0 ? "1" : "5"}
              </Text>
            </div>

            <Button loading={props.loading} className={"payNowButton"} onClick={props.submitPayment}>
              <Text className={"addCardButtonText"}>Pay Now</Text>
              <Icon
                type="arrow-right"
                style={{ fontSize: 24, color: "#ffffff" }}
              />
            </Button>

            <MessagePopUp
              title={props.messageContent.popUpTitle}
              type={props.messageContent.popUpType}
              text={props.messageContent.popUpText}
              open={props.showMessagePopUp}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

Component.defaultProps = {
  savedCard: {},
  submitPayment: () => {},
  cardInformation: {},
  messageContent: {},
};

export default Component;

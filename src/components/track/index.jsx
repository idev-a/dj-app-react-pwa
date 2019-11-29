import React, { Component } from 'react';
import { Banner } from "../../components/banner";
import {Typography, Button } from "antd";
const { Text } = Typography;

export default class Track extends Component {
  render() {
    return (
      <div className="bg-colored">
       <section className="full-section">
        <div  className="track-container">
          <Banner title="Tracks" />
          <div className={"wrapper"}>
            <div className={'cardSection'}>
              <div className={'cardSectionBoady'}>
                <Text className="track-detail">November 7, 2019</Text>
                <br/>
                <img className="main-img" src="../img/logo.png" alt="logo_track"/>
                <br/>
                <div className="img-upload" >
                  <img className="img-logo-upload"  src="../img/icon_dark.png" alt="default_icon" />
                </div>
                <Text className="relabel track-detail">@vessdynamick</Text>
                <Text className="textSectionSubTitle track-detail">Track Title: &nbsp; {"    "}  
                  <Text className={'relabel'}> King Push</Text>
                </Text>
                <div className="border-rad-none  mt-1 hit-bar" >
                  <p></p>

                  {/* REQUIRE PERCENT CIRCLE OVER THE GREEN BARS, I think it can be done without images, task peding  */}

                  <h3 className={'bar-heading'} >
                    <strong>It's a HIT</strong> 
                  </h3>
                </div>
                <br/>
                <div className="border-rad-none  mt-1 cool-bar" >
                  <p></p>
                  <h3 className={'bar-heading'}>
                    <strong>It's COOL</strong> 
                  </h3>
                </div>
                <br/>
                <div className="border-rad-none  mt-1 miss-bar" >
                  <p></p>
                  <h3 className={'bar-heading'}>
                    <strong>It’s a MISS</strong>
                  </h3>
                </div>
                <br/>
                <Button htmlType="submit" size="large" className="border-rad-none btn-submit-form mt-1 btn-lg" >
                  Download To Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
}

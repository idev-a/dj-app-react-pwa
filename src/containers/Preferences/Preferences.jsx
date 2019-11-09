import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Preferences.styles.scss";
import {Button, Collapse, Drawer, Icon, Input, Modal, Typography} from "antd";
import { LocationSearch } from "../../components/geoSearch";
import { Select, Radio } from "antd";
import { HITCard, MapIcon, PROCard } from "../../components/vectorComponents";
import { TagsInput } from "../../components/tags";
import { Banner } from "../../components/banner";
import { DatePicker } from "../../components/datepicker";
import api from '../../config';
const { Option } = Select;
const { Title, Text } = Typography;

const defaultValues = {
  feedbackType: "HIT",
  location: {
    city: "Mansfield",
    state: "MA"
  },
  gender: "male",
  dob: {
      day: null,
      month: null,
      year: null,
  },
  genres: [""]
};

/*
 *
 * */
const Preferences = props => {
  const [state, setState] = useState({ ...defaultValues, saved: false, modal: false });
  const handleChange = field => val => {
      setState({...state, [field]: val})
  }
  const handleDOBChange = field => val => {
      setState({...state, dob: {...state.dob, [field]: val}})
  }
  const handleSave = () => {
      fetch(`${api}/api/users/user/update`, {
          method: "POST",
          body: JSON.stringify({...state, address: state.location.formatted_address, dob: `${state.dob.year}-${state.dob.month}-${state.dob.day}`}),
          headers: {
              'x-access-token': props.token,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      }).then(res => setState({...state, saved: true}))
  }
    const showModal = () => {
        setState({
            ...state,
            modal: true,
        });
    };

    const handleOk = e => {
        console.log(e);
        setState({
            ...state,
            modal: false,
        });
    };

    const handleCancel = e => {
        console.log(e);
        setState({
            ...state,
            modal: false,
        });
    };


    return (
    <div className="bg-colored">
        <Modal
            // title="Basic Modal"
            style={{
                div: {
                    ".ant-modal-footer": {display: 'none !important'},
                    padding: 0,
                }

            }}
            className={'pro-modal'}
            visible={state.modal}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',

               paddingLeft: 77,
               paddingRight: 77,
           }}

                className={'pro-modal'}

           >
               PRO Requests are coming soon!!!


           </div>

        </Modal>
      <section className="section-adjust flex-center">
        <div style={{ background: "white" }}>
          <Banner />
          <div className={"wrapper"}>
              {/* not sure why I made this an SVG will replace soontm*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="329"
              height="78"
              viewBox="0 0 329 78"
            >
              <text
                id="Social_Me"
                data-name="Social Me"
                fill="#1b3543"
                font-size="24"
                font-family="Montserrat-SemiBold, Montserrat"
                font-weight="600"
              >
                <tspan x="0" y="23">
                  What type of feedback{" "}
                </tspan>
                <tspan x="0" y="59">
                  would you like to give?
                </tspan>
              </text>
            </svg>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div
                onClick={() => {
                  setState({ ...state, feedbackType: "HIT" });
                }}
              >
                <HITCard
                  styles={{ marginLeft: 0 }}
                  selected={state.feedbackType === "HIT"}
                />
              </div>
              <div
                onClick={showModal}
              >
                <PROCard
                  styles={{ marginRight: 0 }}
                  selected={state.feedbackType === "PRO"}
                />
              </div>
            </div>

            <div style={{ marginTop: "37px" }}>
              <Title
                style={{
                  marginBottom: "18.5px",
                  fontFamily: "Lato",
                  fontStyle: "medium",
                  fontSize: 20
                }}
              >
                Enter Location{" "}
              </Title>
              <div className={"preference-input"}>
                <div style={{ position: "relative" }}>
                  <LocationSearch className={"location-search"} handleChange={handleChange('location')} /> <MapIcon />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "37px" }}>
              <Title
                style={{
                  marginBottom: "18.5px",
                  fontFamily: "Lato",
                  fontStyle: "medium",
                  fontSize: 20
                }}
              >
                Select Gender{" "}
              </Title>
              <div>
                <Radio.Group
                  value={state.gender}
                  onChange={e => setState({ ...state, gender: e.target.value })}
                  className={"fields-section"}
                >
                  <Radio.Button value="male">Male</Radio.Button>
                  <Radio.Button value="female">Female</Radio.Button>
                  <Radio.Button value="non-binary">Non-Binary</Radio.Button>
                </Radio.Group>
              </div>
            </div>
            <div style={{ marginTop: "37px" }}>
              <Title
                style={{
                  marginBottom: "18.5px",
                  fontFamily: "Lato",
                  fontStyle: "medium",
                  fontSize: 20
                }}
              >
                Enter Date of Birth
              </Title>
              <DatePicker handleChange={handleDOBChange} dob={state.dob} />
            </div>
            <div style={{ marginTop: "37px" }}>
              <Title
                style={{
                  marginBottom: "18.5px",
                  fontFamily: "Lato",
                  fontStyle: "medium",
                  fontSize: 20
                }}
              >
                Select Favorite Genres{" "}
              </Title>
              <TagsInput value={state.genres} handleChange={handleChange('genres')} />
            </div>
            {/* Save Buttons */}
            <div
              style={{
                marginTop: "37px",
                display: "flex",
                flexDirection: "column",
                fontSize: 16,
                fontStyle: "bold"
              }}
            >
              <button
                style={{
                  marginTop: 17,
                background: state.saved ? '#49BA72':"#F7F7F7",
                color: state.saved ? 'white': "#5F6669",
                  width: "100%",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 60,
                  border: "none"
                }}
                onClick={handleSave}

              >
                Save
              </button>
              <button
                style={{
                  marginTop: 17,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 60,
                  border: "none",
                    ':focus': {background: 'green'}
                }}
              >
                Rate New Tracks
              </button>
              <button
                style={{
                  background: "#1B3543",
                  color: "white",
                  marginTop: 17,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: 60,
                  fontSize: 16,
                  padding: "0 24px",
                  border: "none"
                }}
              >
                <div>Order Feedback</div>
                <div>
                  <Icon type="arrow-right" style={{ fontSize: 24 }} />
                </div>
              </button>
            </div>
            <div
              style={{
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                width: "fit-content"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="134"
                height="34"
                viewBox="0 0 134 34"
              >
                <g
                  id="Bars_Home_Indicator_iPhone_On_Light_-_Portrait"
                  data-name="Bars / Home Indicator / iPhone / On Light - Portrait"
                  opacity="0.1"
                >
                  <rect
                    id="Bars_Home_Indicator_iPhone_Light_-_Portrait_background"
                    data-name="Bars / Home Indicator / iPhone / Light - Portrait background"
                    width="134"
                    height="34"
                    fill="none"
                  />
                  <rect
                    id="Home_Indicator"
                    data-name="Home Indicator"
                    width="134"
                    height="5"
                    rx="2.5"
                    transform="translate(0 21)"
                  />
                </g>
              </svg>
            </div>
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
)(Preferences);

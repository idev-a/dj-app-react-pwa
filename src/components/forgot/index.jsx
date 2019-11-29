import React, { Component } from 'react';
import { Button, Form, Icon } from 'antd';
import {connect} from 'react-redux'
import {Typography} from "antd";
import BackArrowIcon from "../common/BackArrowIcon";

const { Title } = Typography;

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch({ type: 'SET_CURRENT_USER', payload: {token: user.token, } }),
  }
}
class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.typing = this.typing.bind(this);
  }
  
  typing(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  
  forgot() {
    
  }
  render() {
   
    return (
      <div className="bg-colored">
        <section className="full-section">
          <div className="curve-design">
            <div>
              <img className="img-auth" src="../img/hearbk.png" alt="" />
            </div>
          </div>
          <div className="flex-center-auth">
            <div className="container-adjust-wrapper">
            <br></br>
            <br></br>
              <div>
                <BackArrowIcon fill="#DDB9A1"/>                
              </div>
              <br></br>
              <div>
              <Title level={4} className="relabel">FOROGOT PASSWORD</Title>
              <hr className="horiztonal-line-style" align="left"/>
              </div>
              <br></br>
              <Form onSubmit={this.forgot.bind(this)}>
                <div>
                  
                </div>
                <div className="input-container">
                  <label className="relabel" htmlFor="">Email Address</label>
                  <input onChange={this.typing} name="email" className="input-form" placeholder="johndoe@doe.com" type="email" required />
                </div>
                <Button  htmlType="submit" size="large" className="border-rad-none btn-submit-form mt-1">
                  Submit 
                  <Icon type="arrow-right" />
                </Button>
              </Form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(
    null,
    mapDispatchToProps
)(Forgot)
import React, { Component } from 'react';
import { Button, Form, Icon, Checkbox } from 'antd';
import ReactDropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import api from '../../config';
import axios from 'axios';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      show1: false,
      email: '',
      username: '',
      password: '',
      displayName: '',
      picture: '',
      retryPassword: '',
      email1: '',
      password1: '',
      errorRegister: '',
      errorLogin: '',
      files: [],
      item: '',
      upload: false,
      isLoading: false,
      loading: false
    }
    this.typing = this.typing.bind(this);
    this.onDrop = this.onDrop.bind(this)
  }
  onDrop(files) {
    // POST to a test endpoint for demo purposes
    this.setState({
      files: this.state.files.concat(files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))),
      upload: true, error: ""
    });
    files.forEach(file => {
      var formData = new FormData();
      formData.append("item", file);
      axios.post(`${api}/api/users/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        console.log(res)
        if (res.data.picture) {
          this.setState({ upload: false, success: true, picture: res.data.picture })
        }
      })
    })

  }
  typing(e) {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  onSwitch() {
    this.setState({ show: false, show1: true })
  }
  onSwitch1() {
    this.setState({ show: true, show1: false })
  }
  register(e) {
    e.preventDefault();
    this.setState({ isLoading: true })
    axios.post(`${api}/api/users/signup`, this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({ errorRegister: res.data.message, isLoading: false })
        }
      })
      .catch((e) => {
        this.setState({ errorRegister: e.response.data.message })
      })
  }
  login(e) {
    e.preventDefault();
    this.setState({ loading: true })
    axios.post(`${api}/api/users/login`, this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({ errorLogin: res.data.message, loading: false })
        }
      })
      .catch((e) => {
        this.setState({ errorLogin: e.response.data.message })
      })
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
          <div className="btn-align-auth">
            <Button onClick={this.onSwitch1.bind(this)} className={this.state.show ? 'half-width btn-switch btn-switch-bottom text-bold' : 'half-width btn-switch text-bold'}>SIGN UP</Button>
            <Button onClick={this.onSwitch.bind(this)} className={this.state.show1 ? 'half-width btn-switch btn-switch-bottom text-bold' : 'half-width btn-switch text-bold'}>LOGIN</Button>
          </div>
          <div className="flex-center-auth">
            <div style={{ padding: '0 1rem' }} className="container-adjust">
              {
                this.state.show ? (
                  <Form onSubmit={this.register.bind(this)}>
                    <div>
                      <div className="img-dashed-upload">
                        <img className="img-logo-upload" src={this.state.picture ? this.state.picture : "../img/icon_dark.png"} alt="" />
                      </div>
                      <div className="icon-uploader">
                        <ReactDropzone
                          multiple="false"
                          accept="image/*"
                          onDrop={this.onDrop}
                          name="item"
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="icon-container" {...getRootProps()}>
                              <input {...getInputProps()} />
                              <Button className="border_none" loading={this.state.upload} shape="circle">
                                <i className="ion-edit"></i>
                              </Button>
                            </div>
                          )}
                        </ReactDropzone>
                      </div>
                    </div>
                    <p className="error-logger">{this.state.errorRegister&&this.state.errorRegister}</p>
                    <div className="input-container">
                      <label className="relabel" htmlFor="">Display Name</label>
                      <input onChange={this.typing} name="displayName" className="input-form" placeholder="John Doe" type="text" required />
                    </div>
                    <div className="input-container">
                      <label className="relabel" htmlFor="">Email Address</label>
                      <input onChange={this.typing} name="email" className="input-form" placeholder="johndoe@doe.com" type="email" required />
                    </div>
                    <div className="input-container">
                      <label className="relabel" htmlFor="">Username</label>
                      <input onChange={this.typing} name="username" className="input-form" placeholder="@jondoe" type="text" required />
                    </div>
                    <div className="input-container">
                      <label className="relabel" htmlFor="">Password</label>
                      <input onChange={this.typing} name="password" className="input-form" placeholder="Enter Your Password" type="password" required />
                    </div>
                    <div className="input-container">
                      <label className="relabel" htmlFor="">Repeat Password</label>
                      <input onChange={this.typing} name="retryPassword" className="input-form" placeholder="Tap to Repeat Password" type="password" required />
                    </div>
                    <Button loading={this.state.isLoading} htmlType="submit" size="large" className="border-rad-none btn-submit-form mt-1">
                      Create account
                      <Icon type="arrow-right" />
                    </Button>
                  </Form>
                ) : this.state.show1 ? (
                  <Form onSubmit={this.login.bind(this)}>
                    <p className="error-logger">{this.state.errorLogin&&this.state.errorLogin}</p>
                    <div className="input-container mt-4">
                      <label className="relabel" htmlFor="">Email Address</label>
                      <input onChange={this.typing} name="email1" className="input-form" placeholder="johndoe@doe.com" type="text" required />
                    </div>
                    <div className="input-container mt-2">
                      <label className="relabel" htmlFor="">Password</label>
                      <input onChange={this.typing} name="password1" className="input-form" placeholder="Enter Your Password" type="password" required />
                    </div>
                    <div className="just-between mt-2">
                      <Checkbox className="a-links">Remember me</Checkbox>
                      <Link className="a-links">Forgot Password</Link>
                    </div>
                    <Button loading={this.state.loading} htmlType="submit" size="large" className="border-rad-none btn-submit-form mt-4">
                      Login
                      <Icon type="arrow-right" />
                    </Button>
                  </Form>
                ) : null
              }

            </div>
          </div>
        </section>
      </div>
    )
  }
}

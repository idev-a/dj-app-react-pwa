import React, { Component } from 'react';
import { Button } from 'antd';
import FacebookLogin from 'react-facebook-login';

export default class FBLogin extends Component {
  facebookLogin(data) {
    // var { email, imageUrl } = data.profileObj
    console.log(data)
    // var username = email.split("@", 1)[0];
    // axios.post(`${api}/api/socialLogin`, { username, email, imageUrl, password: username })
    //   .then((res) => {
    //     if (res.data.token) {
    //       var userData = jwt.verify(res.data.token, 'reactpro')
    //       if (userData) {
    //         var data = jwt.decode(res.data.token, 'reactpro');
    //         localStorage.setItem("token", res.data.token);
    //         localStorage.setItem("username", data.username);
    //         setAuthorizationToken(res.data.token);
    //         window.location.assign(`/get-started`)
    //       }
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  }
  render() {
    return (
      <FacebookLogin
        appId="335464914014129"
        cssClass="ant-btn ant-btn-lg border-rad-none btn-facebook mb-2"
        callback={this.facebookLogin}
        fields="name,email,picture"
        scope="public_profile,email"
        render={renderProps => (
          <Button size="large" onClick={renderProps.onClick}>Login with facebook</Button>
        )}
      />
    )
  }
}

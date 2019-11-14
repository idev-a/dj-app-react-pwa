import React, {Component} from 'react';
import {CardCVCElement, CardExpiryElement,CardNumberElement, injectStripe} from 'react-stripe-elements';
import { Button, Input, Typography } from "antd";
const { Text } = Typography;

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { cardNumber: false, cardCvc: false, cardExpiry: false, formReady: false, errorText: "", accountName:""};
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: this.state.accountName});
    console.log(token);
    
    this.props.CardInformation(token);
  }
  handleChange(event) {
    this.setState({accountName: event.target.value});
  }
errorHandler =()=>{
    let msg ="";
    msg = this.state.cardNumber ? '' : "Card Number," + this.state.accountName==""? "Name,":''+ this.state.cardExpiry ? '' : "Expire Date,"+this.state.cardCvc ? '' : "CVC," +"is Requied !"
    this.setState({errorText: msg})
    
}

  render() {

      const handleChange = (change) => {
          if(change.elementType === "cardNumber"){
            this.setState({ cardNumber : change.complete})
          }else if(change.elementType === "cardExpiry"){
            this.setState({ cardExpiry : change.complete})
          }else if(change.elementType === "cardCvc"){
            this.setState({ cardCvc : change.complete})
          }else{

          }
        if(this.state.cardNumber&&this.state.cardExpiry&&this.state.cardCvc){
            this.setState({formReady : true})
        }else{
            this.setState({formReady : false})
        }
        console.log(this.state.formReady);
      };
    return (
      <div className="checkout">
          <CardNumberElement
            onChange={handleChange}
          />
            <Input
                placeholder='Card Holder Name'
                className={'cardBoxInput'}
                value={this.state.accountName} 
                onChange={this.handleChange}
            />
        <div className={'twoCardContainer'}>
            <div className={'cardInputRight'}>
                <CardExpiryElement
                    onChange={handleChange}
                />
            </div>
            <div className="cardInputLeft">
                <CardCVCElement
                    onChange={handleChange}
                />
            </div>
        </div>
        <Button disabled={!this.state.formReady} className={"basicButton"} onClick={this.state.formReady ? this.submit: this.errorHandler}>ADD CARD</Button>
        <div>
            <Text>{this.state.errorText}</Text>
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
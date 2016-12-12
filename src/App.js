import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      email:'',
      password:'',
      confirm_password: ''
    }
    this.handleEmailChange =  this.handleEmailChange.bind(this);
    this.handlePasswordChange =  this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange =  this.handlePasswordConfirmChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.validPasswords =  this.validPasswords.bind(this);
    this.validEmail = this.validEmail.bind(this);
  }

    handleEmailChange(event) {
      this.setState({email: event.target.value})
      event.preventDefault()
    }

    handlePasswordChange(event) {
      this.setState({password: event.target.value})
      event.preventDefault()
    }

    handlePasswordConfirmChange(event) {
      this.setState({confirm_password: event.target.value})
      event.preventDefault()
    }

    handleSubmit(event) {
      if (this.validPasswords() && this.validEmail()) {
        alert("everything is good")
      } else if(this.validPasswords() && !this.validEmail()) {
        alert("email is invalid")
      } else if(!this.validPasswords() && this.validEmail) {
        alert("passwords do not match")
      }
      event.preventDefault();
    }


    validPasswords() {
      return this.state.password === this.state.confirm_password
      }

    validEmail() {
      return this.state.email.includes("@") && this.state.email.includes(".")
    }


  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">email:</label>
          <input id='email' type="text" value={this.state.email} onChange={this.handleEmailChange}/>
          <label htmlFor="password">password:</label>
          <input id="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          <label htmlFor="confirm_password">confirm password:</label>
          <input htmlFor="confirm_password" type="password" value={this.state.confirm_password} onChange={this.handlePasswordConfirmChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'

import Success from './Success'
import LoginForm from './LoginForm';

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       password: '',
       showAlert: false,
       alertMessage: '',
       success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChangeUsername(e) {
    this.setState({username: e.target.value})
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.username) {
        this.setState({showAlert: true,
                       alertMessage: 'Please enter a username.'})
    } else if (!this.state.password) {
        this.setState({showAlert: true,
            alertMessage: 'Please enter a password.'})
    } else {
        this.clearAlert()
        this.setState({success: true})
    }
  }

  clearAlert() {
      this.setState({showAlert: false, alertMessage: ''})
  }

  resetForm() {
      this.clearAlert()
      this.setState({username: '', password: '', success: false})
  }
    
  render() {
    return (
        <section className="content">
            <div style={{height: '40px'}} />
            <div className="columns is-centered">
                <div className="column is-half">

                {this.state.success ?
                     <Success reset={() => this.resetForm()}/> : 
                     <LoginForm handleSubmit={this.handleSubmit} 
                                usernameVal={this.state.username}
                                passwordVal={this.state.passwordVal}
                                showAlert={this.state.showAlert}
                                alertMessage={this.state.alertMessage}
                                handleChangeUsername={this.handleChangeUsername}
                                handleChangePassword={this.handleChangePassword}/>}
                </div>
            </div>
        </section>
    )
  }
}

export default Login

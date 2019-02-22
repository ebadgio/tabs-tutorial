import React, { Component } from 'react'

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            showAlert: false,
            alertMessage: '',
            success: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.username) this.setState({showAlert: true, alertMessage: "Please enter a username."});
        else if (!this.state.password) this.setState({showAlert: true, alertMessage: "Please enter a password."});
        else {
            this.clearAlert();
            this.setState({success: true})
        }
    }

    handleChangeUsername(e) {
        this.setState({username: e.target.value})
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value})
    }

    clearAlert() {
        this.setState({showAlert: false, alertMessage: ''})
    }

    reset() {
        this.setState({success: false, username: '', password: ''})
    }

    
    render() {

        if (this.state.success) {
            return (
                <section className="content" style={{paddingTop: "40px"}}>
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <div className="box">
                                <h1 className="title">Login Success!</h1>
                                <button className="button is-primary is-medium"
                                        onClick={() => this.reset()}>Reset Login Form</button>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }

        return (
            <section className="content" style={{paddingTop: "40px"}}>
                <div className="columns is-centered">
                    <div className="column is-half">
                        <div className="box">
                            <h1 className="title">Login</h1>

                            {this.state.showAlert ?
                                 <div className="notification is-danger">
                                    <button className="delete" onClick={() => this.clearAlert()}></button>
                                    {this.state.alertMessage}
                                </div> : null}

                            <form onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control">
                                        <input placeholder="Username" type="text" id="usernameInput" className="input is-medium" onChange={(e) => this.handleChangeUsername(e)} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input placeholder="Password" type="password" className="input is-medium" onChange={(e) => this.handleChangePassword(e)} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button className="button is-primary is-medium" type="submit">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </section>
        )
    }
}

export default LoginForm;

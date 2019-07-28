import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                        <h1>Login</h1>
                            <input type="text" placeholder="Email Address" className="text-box"/>
                            <input type="text" placeholder="Password" className="text-box"/>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

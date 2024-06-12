import React from 'react'

const Register = () => {
  return (
    <div>
         <div className="big-banner-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="big-banner-descs">
                            <h1 className="big-b-title">My Account</h1>
                            <a href="index.html">Home page</a>
                            <span>My Account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-account-area single-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="my-acc-login">
                                    <div className="title-heading">register</div>
                                    <form action="#">
                                        <p>
                                            <label>
                                                email 
                                                <span className="required">*</span>
                                            </label>
                                            <input className="my-inptsd" type="text" />
                                        </p>
                                        <p>
                                            <label>
                                                Password: 
                                                <span className="required">*</span>
                                            </label>
                                            <input className="my-inptsd" type="password" />
                                        </p>
                                        <div className="my-acc-lgin-btn">
                                            <input type="submit" value="register"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="my-acc-menu">
                            <h3>Account</h3>
                            <div className="acc-menu-content">
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Register</a></li>
                                    <li><a href="#">Forgotten Password</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register

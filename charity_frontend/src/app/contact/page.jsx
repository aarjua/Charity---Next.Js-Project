import React from 'react'

const Contact = () => {
  return (
    <div>
       <div className="big-banner-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="big-banner-descs">
                            <h1 className="big-b-title">Contact Page</h1>
                            <a href="index.html">Home page</a>
                            <span>Contact Page</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-us-areas single-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="single-help-us">
                            <div className="help-icon-circle">
                                <i className="fa fa-home"></i>
                            </div>
                            <div className="single-help-descs">
                                <h4>Address</h4>
                                <p>123 Kingsland Rd. Bighouse London</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="single-help-us">
                            <div className="help-icon-circle">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="single-help-descs">
                                <h4>Phone Number</h4>
                                <p>1800 222 222</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="single-help-us">
                            <div className="help-icon-circle">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="single-help-descs">
                                <h4>Email</h4>
                                <p><a href="#">admin@bootexperts.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="single-help-us">
                            <div className="help-icon-circle">
                                <i className="fa fa-globe"></i>
                            </div>
                            <div className="single-help-descs">
                                <h4>Website</h4>
                                <p><a href="#">www.charity.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ctmts">
                    <form action="https://tvlgiao.github.io/html-charity-demo/charity/mail.php" method="post">
						<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div className="contact-form-details">
								<input type="text" placeholder="Name:" name="name"/>
								<input type="email" placeholder="Email:" name="email"/>
								<input type="text" placeholder="Subject:" name="subject" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div className="cntct-txtarea">
								<textarea cols="40" rows="10" placeholder="Message:" name="message"></textarea>
								<input type="submit" value="Send" />
							</div>
						</div>
                    </form>
                </div>
                <div className="row bfcfmt">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="be-first-comments">
                            <h4>be first to comment </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <form action="#">
						<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div className="be-first-cmmnt-form">
								<span className="cmmnt-label">
									Your Name
									<b>*</b>
								</span>
								<p className="comment-form-author">
									<input type="text" placeholder="Your Name" />
								</p>
								<span className="cmmnt-label">
									Your Email
									<b>*</b>
								</span>
								<p className="comment-form-author">
									<input type="email" placeholder="hello@example.com" />
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div className="be-first-cmmnt-form">
								<span className="cmmnt-label">
									Message
									<b>*</b>
								</span>
								<p className="comment-txtarea">
									<textarea cols="45" rows="8"></textarea>
									<input type="submit" value="SUBMIT" />
								</p>
							</div>
						</div>
					</form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact

import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer-area">
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                <div className="copyryt-txt">
                                    Copyright ©
                                    <a href="http://bootexperts.com/">BootExperts.com</a> . All
                                    Rights Reserved
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                <div className="footer-menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="#">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="#">Our Story</a>
                                            </li>
                                            <li>
                                                <a href="#">Be a Volunteer</a>
                                            </li>
                                            <li>
                                                <a href="#">What we do</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer

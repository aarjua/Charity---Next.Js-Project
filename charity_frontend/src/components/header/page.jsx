import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="header-area">
                <div className="header-top hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="top-social">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-pinterest"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="top-srch-bx">
                                    <input type="text" placeholder="Text Search" name="text_search" id="text_search" />
                                    <div className="button_search">
                                        <button title="Search" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="account-login">
                                    <div className="accounts-login">
                                        <a href="#">
                                            <span>Login</span>
                                        </a>
                                        <div className="login-form">
                                            <form action="#">
                                                <div className="form_wrapper_body">
                                                    <p className="login-username">
                                                        <label htmlFor="email">User or Email</label>
                                                        <input type="text" id="email" name="email" placeholder="User or Email" autoComplete="email" />
                                                    </p>
                                                    <p className="login-password">
                                                        <label htmlFor="password">Password</label>
                                                        <input type="text" id="password" name="password" placeholder="Password" />
                                                    </p>
                                                </div>
                                                <div className="form_wrapper_footer">
                                                    <input
                                                        className="button"
                                                        type="submit"
                                                        name="wrapper"
                                                        value="Login"
                                                    />
                                                    <a className="button" href="#">
                                                        Register
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="contacts-top">
                                    <div className="contacts-supports">
                                        <span className="spprt-phone">
                                            <i className="fa fa-phone"></i>
                                            01973833508
                                        </span>
                                        <span className="support-email">
                                            <i className="fa fa-envelope"></i>
                                            admin@bootexperts.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom" id="sticker">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="logo">
                                    <a href="/charity">
                                        <img src="./assets/img/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 hidden-xs">
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            <li className="active">
                                                <a href="/charity">Home</a>
                                            </li>
                                            <li>
                                                <a href="/cause">Causes</a>
                                            </li>
                                            <li>
                                                <a href="/portfolio">Portfolio</a>
                                            </li>
                                            <li>
                                                <a href="/blog">Blog</a>
                                            </li>
                                            <li className="parent">
                                                <a href="#">Enquiry</a>
                                                <div className="mega-menu">
                                                <span>
                                                        <a className="mm-title" href="#">
                                                        Services
                                                        </a>
                                                        
                                                        <a href="/products">Products</a>
                                                        <a href="/cart">Cart</a>
                                                        <a href="/wishlist">Wishlist</a>
                                                    </span>
                                                    <span>
                                                        <a className="mm-title" href="#">
                                                            Accounts
                                                        </a>
                                                        <a href="/register">
                                                            Register
                                                        </a>
                                                        <a href="/login">
                                                          Login
                                                        </a>
                                                    </span>
                                                    <span>
                                                        <a className="mm-title" href="#">
                                                            Contact
                                                        </a>
                                                        <a href="/contact">Contact us</a>
                                                        <a href="/team">Team member</a>
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="donate-tdy">Donate Today!</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="mobile-menu-area visible-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mobile-menu">
                                <nav id="dropdown">
                                    <ul>
                                        <li>
                                            <a href="/charty">Home</a>
                                            {/* <ul>
                                                <li>
                                                    <a href="index.html">Home Default</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home Blue</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home Turquoise</a>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li>
                                            <a href="causes.html">Causes</a>
                                        </li>
                                        <li>
                                            <a href="portfolio.html">Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul>
                                                <li>
                                                    <a href="#">page set 1</a>
                                                    <ul>
                                                        <li>
                                                            <a href="shopping-cart.html">Cart</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-leftsidebar.html">
                                                                Shop left sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-rightsidebar.html">
                                                                Shop right sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-list.html">Shop list</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-fullwidth.html">Shop fullwidth</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">page set 2</a>
                                                    <ul>
                                                        <li>
                                                            <a href="blog-details.html">Blog details</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Checkout</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact-us.html">Contact us</a>
                                                        </li>
                                                        <li>
                                                            <a href="gallery.html">Gallery</a>
                                                        </li>
                                                        <li>
                                                            <a href="my-account.html">My account</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">page set 3</a>
                                                    <ul>
                                                        <li>
                                                            <a href="services.html">Services</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-product.html">Single product</a>
                                                        </li>
                                                        <li>
                                                            <a href="team-member.html">Team member</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Wishlist</a>
                                                        </li>
                                                        <li>
                                                            <a href="404.html">404</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Header

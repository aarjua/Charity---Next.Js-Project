import React from 'react'

const Products = () => {
  return (
    <div>
       <div className="big-banner-area shop-bnr-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="big-banner-descs">
                            <h1 className="big-b-title">Shop List</h1>
                            <a href="index.html">Home page</a>
                            <span>Shop List</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="all-products-area single-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <div className="row product-shop-mb">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <div className="all-product-list-grid-area">
                                    <ul className="list-grid-tab" role="tablist">
                                        <li role="presentation"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i className="fa fa-th"></i></a></li>
                                        <li role="presentation" className="active"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><i className="fa fa-th-list"></i></a></li>
                                    </ul>
                                    <span>Showing 1–12 of 30 results</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 hidden-xs">
                                <form className="woocommerce-ordering" method="get">
                                    <select className="orderby" name="orderby">
                                        <option selected="selected" value="menu_order">Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by newness</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane" id="home">
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/h14-270x400.jpg" alt="" /></a>
                                                <div className="pro-label">
                                                    <span className="product_label blue_label">20%</span>
                                                </div>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Collarless playsuit white</a></h3>
												<div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price pro-mb">
                                                    <span className="amount-one amnt-one">$55.00</span>
                                                    <span className="amount-two amnt-two">$44.25</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/h13-270x400.jpg" alt="" /></a>
                                                <div className="pro-label">
                                                    <span className="product_label">New</span>
                                                </div>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Buy product</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Fusce aliquam variable – v1</a></h3>
                                                <div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price">
                                                    <span className="amount-one">$245.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/9-270x400.jpg" alt="" /></a>
                                                <div className="pro-label">
                                                    <span className="product_label blue_label">4%</span>
                                                </div>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Cashmere Saint Laurent</a></h3>
                                                <div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                </div>
                                                <span className="product-price pro-mb">
                                                    <span className="amount-one amnt-one">$18.00</span>
                                                    <span className="amount-two amnt-two">$17.20</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/h10-270x400.jpg" alt="" /></a>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Floral gold collar chunky – s3</a></h3>
												<div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price">
                                                    <span className="amount-one">$133.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/h09-270x400.jpg" alt="" /></a>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Floral gold collar chunky – s2</a></h3>
												<div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price">
                                                    <span className="amount-one">$110.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/6-270x400.jpg" alt="" /></a>
                                                <div className="pro-label">
                                                    <span className="product_label blue_label">20%</span>
                                                </div>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Floral gold collar chunky</a></h3>
												<div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price pro-mb">
                                                    <span className="amount-one amnt-one">$100.00</span>
                                                    <span className="amount-two amnt-two">$80.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/h05-270x400.jpg" alt="" /></a>
                                                <div className="pro-label">
                                                    <span className="product_label blue_label">8%</span>
                                                </div>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Fusce aliquam sample – s4</a></h3>
                                                <div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price pro-mb">
                                                    <span className="amount-one amnt-one">$52.00</span>
                                                    <span className="amount-two amnt-two">$48.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/h03-270x400.jpg" alt="" /></a>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Buy product</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Fusce aliquam sample – s3</a></h3>
                                                <div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price">
                                                    <span className="amount-one">$44.20</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/x31-270x400.jpg" alt="" /></a>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Fusce aliquam sample – s2</a></h3>
                                                <div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price">
                                                    <span className="amount-one">$22.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/x39-270x400.jpg" alt="" /></a>
                                                <div className="pro-label">
                                                    <span className="product_label">New</span>
                                                </div>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <a href="#">Select options</a>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Fusce aliquam variable – v1</a></h3>
                                                <div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                </div>
                                                <span className="product-price">
                                                    <span className="amount-one">$17.20</span> -
                                                <span className="amount-two">$18.20</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/h14-270x400.jpg" alt="" /></a>
                                                <div className="pro-label">
                                                    <span className="product_label blue_label">20%</span>
                                                </div>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Add to Cart</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Collarless playsuit white</a></h3>
												<div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price pro-mb">
                                                    <span className="amount-one amnt-one">$55.00</span>
                                                    <span className="amount-two amnt-two">$44.25</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="#"><img src="./assets/img/products/h13-270x400.jpg" alt="" /></a>
                                                <div className="pro-label">
                                                    <span className="product_label">New</span>
                                                </div>
                                                <div className="product-actions">
                                                    <div className="list-add-to-cart">
                                                        <button className="button">
                                                            <span>Buy product</span>
                                                        </button>
                                                    </div>
                                                    <div className="add-to-links">
                                                        <a href="#"><i className="fa fa-heart"></i></a>
                                                        <a href="#"><i className="fa fa-link"></i></a>
                                                        <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-desc text-center">
                                                <h3><a href="#">Fusce aliquam variable – v1</a></h3>
                                                <div className="product-rating">
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star"></i></a>
                                                    <a href="#"><i className="fa fa-star-half-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                    <a href="#"><i className="fa fa-star-o"></i></a>
                                                </div>
                                                <span className="product-price">
                                                    <span className="amount-one">$245.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane active" id="profile">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/9-270x400.jpg" alt="" /></a>
                                                        <div className="pro-label">
                                                            <span className="product_label blue_label">4%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Cashmere Saint Laurent</a></h3>
                                                    <div className="product-rating">
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                    </div>
                                                    <span className="product-price pro-mb">
        <span className="amount-one amnt-one">$18.00</span>
                                                    <span className="amount-two amnt-two">$17.20</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/h13-270x400.jpg" alt="" /></a>
                                                        <div className="pro-label">
                                                            <span className="product_label">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Fusce aliquam variable – v1</a></h3>
                                                    <div className="product-rating">
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-half-o"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-o"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-o"></i>
                                                        </a>
                                                    </div>
                                                    <span className="product-price">
        <span className="amount-one">$245.00</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/h14-270x400.jpg" alt="" /></a>
                                                        <div className="pro-label">
                                                            <span className="product_label blue_label">20%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Collarless playsuit white</a></h3>
                                                    <span className="product-price pro-mb">
        <span className="amount-one amnt-one">$55.00</span>
                                                    <span className="amount-two amnt-two">$44.25</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/6-270x400.jpg" alt="" /></a>
                                                        <div className="pro-label">
                                                            <span className="product_label blue_label">20%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Floral gold collar chunky</a></h3>
                                                    <span className="product-price pro-mb">
        <span className="amount-one amnt-one">$100.00</span>
                                                    <span className="amount-two amnt-two">$80.00</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/h09-270x400.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Floral gold collar chunky – s2</a></h3>
                                                    <span className="product-price">
        <span className="amount-one">$110.00</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/h10-270x400.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Floral gold collar chunky – s3</a></h3>
                                                    <span className="product-price">
        <span className="amount-one">$133.00</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/x31-270x400.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Fusce aliquam sample – s2</a></h3>
                                                    <div className="product-rating">
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-half-o"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-o"></i>
                                                        </a>
                                                    </div>
                                                    <span className="product-price">
        <span className="amount-one">$22.00</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/h03-270x400.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Fusce aliquam sample – s3</a></h3>
                                                    <div className="product-rating">
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-half-o"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-o"></i>
                                                        </a>
                                                    </div>
                                                    <span className="product-price">
        <span className="amount-one">$44.20</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/9-270x400.jpg" alt="" /></a>
                                                        <div className="pro-label">
                                                            <span className="product_label blue_label">4%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Cashmere Saint Laurent</a></h3>
                                                    <div className="product-rating">
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                        <a href="#"><i className="fa fa-star"></i></a>
                                                    </div>
                                                    <span className="product-price pro-mb">
        <span className="amount-one amnt-one">$18.00</span>
                                                    <span className="amount-two amnt-two">$17.20</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/h13-270x400.jpg" alt="" /></a>
                                                        <div className="pro-label">
                                                            <span className="product_label">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Fusce aliquam variable – v1</a></h3>
                                                    <div className="product-rating">
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-half-o"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-o"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star-o"></i>
                                                        </a>
                                                    </div>
                                                    <span className="product-price">
        <span className="amount-one">$245.00</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh res-list">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/h14-270x400.jpg" alt="" /></a>
                                                        <div className="pro-label">
                                                            <span className="product_label blue_label">20%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Collarless playsuit white</a></h3>
                                                    <span className="product-price pro-mb">
        <span className="amount-one amnt-one">$55.00</span>
                                                    <span className="amount-two amnt-two">$44.25</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row tabmttsh">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="#"><img src="./assets/img/products/6-270x400.jpg" alt="" /></a>
                                                        <div className="pro-label">
                                                            <span className="product_label blue_label">20%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <div className="product-desc text-center">
                                                    <h3><a href="#">Floral gold collar chunky</a></h3>
                                                    <span className="product-price pro-mb">
        <span className="amount-one amnt-one">$100.00</span>
                                                    <span className="amount-two amnt-two">$80.00</span>
                                                    </span>
                                                    <div className="product-cont-shop">
                                                        <p>Paragraph text Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl. Unordered list…</p>
                                                    </div>
                                                    <div className="product-actions">
                                                        <div className="list-add-to-cart">
                                                            <button className="button">
                                                                <span>Add to Cart</span>
                                                            </button>
                                                        </div>
                                                        <div className="add-to-links">
                                                            <a href="#"><i className="fa fa-heart"></i></a>
                                                            <a href="#"><i className="fa fa-link"></i></a>
                                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="blog-pg-nav text-center">
                                    <span>1</span>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                </div>
                            </div>                  
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="shop-carts">
                            <h3 className="shop-cart-title">
                                Cart
                            </h3>
                            <div className="widget_shopping_cart_content">
                                <ul className="cart_list product_list_widget ">
                                    <li>
                                        <div className="crtsss-img">
                                            <a href="#"><img src="./assets/img/products/h14.jpg" alt="" /></a>
                                            <a href="#"><i className="fa fa-times"></i></a>
                                        </div>
                                        <div className="cart_item_wrapper">
                                            <a className="wd_cart_title" href="#"> Collarless playsuit white shirt spearmint </a>
                                            <span className="quantity">
                                            <span className="amount">$44.25</span>
                                            × 1
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                                <p className="total">
                                <strong>Subtotal:</strong>
                                <span className="amount">$44.25</span>
                                </p>
                                <p className="buttons">
                                <a className="button mygs" href="#">View Cart</a>
                                <a className="button normal" href="#">Checkout</a>
                                </p>
                            </div>
                        </div>
                        <div className="shop-categories hidden-xs">
                            <h3 className="shop-cat-title">
                                Categories
                            </h3>
                            <ul className="product-categories">
                                <li>
                                    <a href="#">Electronics</a>
                                    <span>(0)</span>
                                </li>
                                <li>
                                    <i id="xtraangle" className="fa fa-angle-right"></i>
                                    <a id="fshntgl" href="#">Fashion</a>
                                    <span>(30)</span>
                                    <ul id="fnstglinot" className="pro-cat-children">
                                        <li>
                                            <a href="#">Bags</a>
                                            <span>(3)</span>
                                        </li>
                                        <li>
                                            <a href="#">Boys</a>
                                            <span>(10)</span>
                                        </li>
                                        <li>
                                            <a href="#">Girls</a>
                                            <span>(12)</span>
                                        </li>
                                        <li>
                                            <a href="#">Men's</a>
                                            <span>(12)</span>
                                        </li>
                                        <li>
                                            <a href="#">Shoes</a>
                                            <span>(4)</span>
                                        </li>
                                        <li>
                                            <a href="#">Women's</a>
                                            <span>(11)</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Home & Garden</a>
                                    <span>(0)</span>
                                </li>
                                <li>
                                    <a href="#">Laptop & Computer</a>
                                    <span>(0)</span>
                                </li>
                                <li>
                                    <a href="#">Sport & Game</a>
                                    <span>(2)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="shop-top-rated-products hidden-xs">
                            <h3 className="shop-cat-title">
                                Top Rated Products
                            </h3>
                            <div className="all-top-rated-pro">
                                <div className="single-top-rated stmb">
                                    <div className="top-rated-img img-hvr-effect">
										<a className="venobox" data-gall="myGallery" href="./assets/img/products/x39-70x90.jpg"><img src="./assets/img/products/x39-70x90.jpg" alt="image alt"/></a>
                                    </div>
                                    <div className="top-rated-descs">
                                        <a href="#">Fusce aliquam variable – v1</a>
                                        <div className="product-rating">
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <span className="product-price">
                                            <span className="amount-one">$17.20</span>
                                            -
                                            <span className="amount-two">$18.20</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="single-top-rated">
                                    <div className="top-rated-img img-hvr-effect">
										<a className="venobox" data-gall="myGallery" href="./assets/img/products/h06-70x90.jpg"><img src="./assets/img/products/h06-70x90.jpg" alt="image alt"/></a>
                                    </div>
                                    <div className="top-rated-descs">
                                        <a href="#">Jil sander vasari white shirt – s1</a>
                                        <div className="product-rating">
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <span className="product-price">
                                            <span className="amount-one">$80.50</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="single-top-rated">
                                    <div className="top-rated-img img-hvr-effect">
										<a className="venobox" data-gall="myGallery" href="./assets/img/products/10-70x90.jpg"><img src="./assets/img/products/10-70x90.jpg" alt="image alt"/></a>
                                    </div>
                                    <div className="top-rated-descs">
                                        <a href="#">Navy blue center part leather – s1</a>
                                        <div className="product-rating">
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <span className="product-price">
                                            <span className="amount-one">$233.00</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="single-top-rated">
                                    <div className="top-rated-img img-hvr-effect">
										<a className="venobox" data-gall="myGallery" href="./assets/img/products/6-70x90.jpg"><img src="./assets/img/products/6-70x90.jpg" alt="image alt"/></a>
                                    </div>
                                    <div className="top-rated-descs">
                                        <a href="#">Minimal black ribbed bandeau</a>
                                        <div className="product-rating">
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <span className="product-price">
                                            <span className="amount-one">$310.00</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="single-top-rated">
                                    <div className="top-rated-img img-hvr-effect">
										<a className="venobox" data-gall="myGallery" href="./assets/img/products/h01-70x90.jpg"><img src="./assets/img/products/h01-70x90.jpg" alt="image alt"/></a>
                                    </div>
                                    <div className="top-rated-descs">
                                        <a href="#">Fusce aliquam simple</a>
                                        <div className="product-rating">
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <span className="product-price">
                                            <span className="amount-one">$400.00</span>
                                        </span>

                                    </div>
                                </div>
                                <div className="single-top-rated">
                                    <div className="top-rated-img img-hvr-effect">
										<a className="venobox" data-gall="myGallery" href="./assets/img/products/h02-70x90.jpg"><img src="./assets/img/products/h02-70x90.jpg" alt="image alt"/></a>
                                    </div>
                                    <div className="top-rated-descs">
                                        <a href="#">Fusce aliquam variable – v2</a>
                                        <div className="product-rating">
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <span className="product-price">
                                            <span className="amount-one">$18.55</span>
                                            -
                                            <span className="amount-two">$19.00</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="single-top-rated">
                                    <div className="top-rated-img img-hvr-effect">
										<a className="venobox" data-gall="myGallery" href="./assets/img/products/h15-70x90.jpg"><img src="./assets/img/products/h15-70x90.jpg" alt="image alt"/></a>
                                    </div>
                                    <div className="top-rated-descs">
                                        <a href="#">Jil sander vasari white – v1</a>
                                        <div className="product-rating">
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <span className="product-price">
                                            <span className="amount-one">$24.00</span>
                                            -
                                            <span className="amount-two">$25.35</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="single-top-rated">
                                    <div className="top-rated-img img-hvr-effect">
										<a className="venobox" data-gall="myGallery" href="./assets/img/products/9-70x90.jpg"><img src="./assets/img/products/9-70x90.jpg" alt="image alt"/></a>
                                    </div>
                                    <div className="top-rated-descs">
                                        <a href="#">Cashmere Saint Laurent</a>
                                        <div className="product-rating">
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#">
                                            <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <span className="product-price pro-mb">
                                            <span className="amount-one amnt-one">$18.00</span>
                                            <span className="amount-two amnt-two">$17.20</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop-filter-by-price hidden-xs">
                            <h3 className="shop-cat-title">
                                Filter by price
                            </h3>
                            <div className="price-filter">
                                <div id="slider-range"></div>
                                <div className="price-slider-amount">
                                    <p>
                                        Price:
                                        <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                    </p>
                                    <input className="pri-sub" type="submit"  value="Filter"/>  
                                </div>
                            </div>
                        </div>
                        <div className="shop-flick hidden-xs">
                            <h3 className="shop-cat-title">
                                Flickr
                            </h3>
                            <div className="single-flickr-img">
								<a className="venobox" data-gall="myGallery" href="./assets/img/products/8072887203_286c3ddc89_s.jpg"><img src="./assets/img/products/8072887203_286c3ddc89_s.jpg" alt="image alt"/></a>
							</div>
                            <div className="single-flickr-img">
								<a className="venobox" data-gall="myGallery" href="./assets/img/products/8072880804_e1e21f2b3c_s.jpg"><img src="./assets/img/products/8072880804_e1e21f2b3c_s.jpg" alt="image alt"/></a>
                            </div>
                            <div className="single-flickr-img">
								<a className="venobox" data-gall="myGallery" href="./assets/img/products/8072880866_418be162f9_s.jpg"><img src="./assets/img/products/8072880866_418be162f9_s.jpg" alt="image alt"/></a>
                            </div>
                            <div className="single-flickr-img">
								<a className="venobox" data-gall="myGallery" href="./assets/img/products/8072881024_eacaa2a92a_s.jpg"><img src="./assets/img/products/8072881024_eacaa2a92a_s.jpg" alt="image alt"/></a>
                            </div>
                            <div className="single-flickr-img">
								<a className="venobox" data-gall="myGallery" href="./assets/img/products/8072880934_7230064303_s.jpg"><img src="./assets/img/products/8072880934_7230064303_s.jpg" alt="image alt"/></a>
                            </div>
                            <div className="single-flickr-img">
								<a className="venobox" data-gall="myGallery" href="./assets/img/products/8072880978_a9b8a1c3ba_s.jpg"><img src="./assets/img/products/8072880978_a9b8a1c3ba_s.jpg" alt="image alt"/></a>
                            </div>
                            <div className="single-flickr-img">
								<a className="venobox" data-gall="myGallery" href="./assets/img/products/8072887131_e3927498c1_s.jpg"><img src="./assets/img/products/8072887131_e3927498c1_s.jpg" alt="image alt"/></a>
                            </div>
                            <div className="single-flickr-img">
								<a className="venobox" data-gall="myGallery" href="./assets/img/products/8072880896_9f7a416e0a_s.jpg"><img src="./assets/img/products/8072880896_9f7a416e0a_s.jpg" alt="image alt"/></a>
                            </div>
                            <div className="single-flickr-img">
								<a className="venobox" data-gall="myGallery" href="./assets/img/products/8072887413_5584b88f4b_s.jpg"><img src="./assets/img/products/8072887413_5584b88f4b_s.jpg" alt="image alt"/></a>
                            </div>
                            <div className="fxcs"></div>
                            <div className="flick-see-more">
                                <a href="#">See more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="quickview-wrapper">
            <div className="modal fade" id="productModal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-product">
                                <div className="mdl-product-images">
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane active" id="home-one">
                                            <a className="venobox" data-gall="myGallery" href="./assets/img/products/x39.jpg"><img src="./assets/img/products/x39.jpg" alt="" /></a>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="profile-one">
                                            <a className="venobox" data-gall="myGallery" href="./assets/img/products/h01.jpg"><img alt="" src="./assets/img/products/h01.jpg" /></a>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="messages-one">
                                            <a className="venobox" data-gall="myGallery" href="./assets/img/products/h05.jpg"><img alt="" src="./assets/img/products/h05.jpg" /></a>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="settings-one">
                                            <a className="venobox" data-gall="myGallery" href="./assets/img/products/h04.jpg"><img alt="" src="./assets/img/products/h04.jpg" /></a>
                                        </div>
                                    </div>
                                    <ul className="mdl-tab" role="tablist">
                                        <li role="presentation" className="active"><a href="#home-one" aria-controls="home-one" role="tab" data-toggle="tab"><img src="./assets/img/products/x39-70x90.jpg" alt="" /></a></li>
                                        <li role="presentation"><a href="#profile-one" aria-controls="profile-one" role="tab" data-toggle="tab"><img src="./assets/img/products/h01-70x90.jpg" alt="" /></a></li>
                                        <li role="presentation"><a href="#messages-one" aria-controls="messages-one" role="tab" data-toggle="tab"><img src="./assets/img/products/h05-70x90.jpg" alt="" /></a></li>
                                        <li role="presentation"><a href="#settings-one" aria-controls="settings-one" role="tab" data-toggle="tab"><img src="./assets/img/products/h04-70x90.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="mdl-product-info">
                                    <div className="mdl-pro-descs text-center">
                                        <h3><a href="#">Fusce aliquam variable – v1</a></h3>
                                        <p className="mdl-sku">
                                            SKU:
                                            <span className="product_sku">W013</span>
                                        </p>
                                        <p className="availability">
                                            <span className="wd_availability">Availability: </span>
                                            <span className="stock">In stock</span>
                                        </p>
                                        <div className="mdl-short-description">
                                            <h6 className="short-description-title">Quick Overview</h6>
                                            <div className="std"> Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu.... </div>
                                        </div>
                                    </div>
                                    <div className="mdl-price-size-clr">
                                        <div className="product-rating text-center">
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                        </div>
                                        <div className="prc-range-md text-center">
                                            <p className="price">
                                                <span className="amount">$17.20</span>
                                                -
                                                <span className="amount">$18.20</span>
                                            </p>
                                        </div>
                                        <div className="mdl-sz-clr">
                                            <label>size</label>
                                            <select className="slct1">
                                                <option value="">Choose an option</option>
                                                <option value="l">L</option>
                                                <option value="m">M</option>
                                                <option value="s">S</option>
                                                <option value="xl">XL</option>
                                                <option value="xxl">XXL</option>
                                            </select>
                                        </div>
                                        <div className="mdl-sz-clr">
                                            <label>color</label>
                                            <select className="slct2">
                                                <option value="">Choose an option</option>
                                                <option value="black">Black</option>
                                                <option value="blue">Blue</option>
                                                <option value="green">Green</option>
                                                <option value="pink">Pink</option>
                                                <option value="red">Red</option>
                                                <option value="yellow">Yellow</option>
                                                <option value="orange">Orange</option>
                                                <option value="purple">Purple</option>
                                                <option value="white-2">White</option>
                                            </select>
                                        </div>
                                        <div className="mdl-fav-icon">
                                            <a href="#"><i className="fa fa-heart"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products

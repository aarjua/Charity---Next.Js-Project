import React from 'react'

const Cart = () => {
  return (
    <div>
       <div className="big-banner-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="big-banner-descs">
                            <h1 className="big-b-title">Cart</h1>
                            <a href="index.html">Home page</a>
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="shopping-cart-area single-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <form action="#">
                            <div className="table-content table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">Images</th>
                                            <th className="product-name">Product name</th>
                                            <th className="real-product-price">price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center"><a href="#"><img src="./assets/img/products/cart1.jpg" alt=""/></a></td>
                                            <td className="text-center pro-name">
                                                <a href="#">Fusce aliquam sample – s5</a>
                                            </td>
                                            <td className="text-center pro-price">$42.00</td>
                                            <td className="text-center crt-qntty"><input className="input-text qty text" type="number" size="4" title="Qty" value="1" /></td>
                                            <td className="text-center pro-price">$42.00</td>
                                            <td className="text-center pro-rmv"><a href="#"><i className="fa fa-times"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><a href="#"><img src="./assets/img/products/cart2.jpg" alt=""/></a></td>
                                            <td className="text-center pro-name">
                                                <a href="#">Floral gold collar chunky</a>
                                            </td>
                                            <td className="text-center pro-price">$80.00</td>
                                            <td className="text-center crt-qntty"><input className="input-text qty text" type="number" size="4" title="Qty" value="1" /></td>
                                            <td className="text-center pro-price">$80.00</td>
                                            <td className="text-center pro-rmv"><a href="#"><i className="fa fa-times"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="pro-cart-totals">
                            <h3>Cart Totals</h3>
                            <table>
                                <tbody>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td>
                                            <span className="amount">$244.00</span>
                                        </td>
                                    </tr>
                                    <tr className="shipping">
                                        <th>Shipping and Handling</th>
                                        <td>Free Shipping</td>
                                    </tr>
                                    <tr className="total">
                                        <th>GrandTotal</th>
                                        <td>
                                            <strong>
                                                <span className="amount">$244.00</span>
                                            </strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="pro-proceed-to-chkout">
                                <a href="#">Proceed to Checkout</a>
                            </div>
                            <div className="wd_cart_buttons">
                                <a className="up-cart-pros" href="#">Update Cart</a>
                                <a className="bck-to-tp" href="#">Back To Shop</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 className="shop-cat-title">You may be interested in</h3>
                    </div>
                </div>
                <div className="row ymmtp">
                    <div className="you-may-lyk-carousel-3 indicator-style indicator-style-2">
                        <div className="col-lg-12">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="#"><img src="./assets/img/products/x39-270x400.jpg" alt=""/></a>
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
                                        <span className="amount-one">$17.20</span>
                                        -
                                        <span className="amount-two">$18.20</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="#"><img src="./assets/img/products/h04-270x400.jpg" alt=""/></a>
                                    <div className="pro-label">
                                        <span className="product_label blue_label">16%</span>
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
                                    <h3><a href="#">Fusce aliquam variable – v1</a></h3>
                                    <span className="product-price pro-mb">
                                        <span className="amount-one amnt-one">$50.00</span>
                                        <span className="amount-two amnt-two">$42.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="#"><img src="./assets/img/products/h07-270x400.jpg" alt=""/></a>
                                    <div className="pro-label">
                                        <span className="product_label blue_label">4%</span>
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
                                    <h3><a href="#">Navy blue center part leather</a></h3>
                                    <span className="product-price pro-mb">
                                        <span className="amount-one amnt-one">$230.00</span>
                                        <span className="amount-two amnt-two">$220.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="#"><img src="./assets/img/products/9-270x400.jpg" alt=""/></a>
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
                                    <h3><a href="#">Sander vasari white shirt – v1</a></h3>
                                    <span className="product-price pro-mb">
                                        <span className="amount-one">$17.99</span>
                                        -
                                        <span className="amount-two">$18.55</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="#"><img src="./assets/img/products/6-270x400.jpg" alt=""/></a>
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
                                    <span className="product-price pro-mb">
                                        <span className="amount-one amnt-one">$100.00</span>
                                        <span className="amount-two amnt-two">$80.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="#"><img src="./assets/img/products/h11-270x400.jpg" alt="" /></a>
                                    <div className="pro-label">
                                        <span className="product_label">New</span>
                                    </div>
                                    <div className="product-actions">
                                        <div className="list-add-to-cart">
                                            <a href="#">View products</a>
                                        </div>
                                        <div className="add-to-links">
                                            <a href="#"><i className="fa fa-heart"></i></a>
                                            <a href="#"><i className="fa fa-link"></i></a>
                                            <a data-toggle="modal" data-target="#productModal" href="#"><i className="fa fa-eye"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-desc text-center">
                                    <h3><a href="#">Jil sander vasari white shirt – G1</a></h3>
                                    <span className="product-price pro-mb">
                                        <span className="amount-one">$80.50</span>
                                        -
                                        <span className="amount-two">$120.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="#"><img src="./assets/img/products/h12-270x400.jpg" alt="" /></a>
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
                                    <h3><a href="#">Navy blue center part leather – V1</a></h3>
                                    <span className="product-price pro-mb">
                                        <span className="amount-one">$250.00</span>
                                        -
                                        <span className="amount-two">$260.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart

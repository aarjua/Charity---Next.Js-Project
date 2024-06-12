import React from 'react'

const Wishlist = () => {
  return (
    <div>
       <div className="big-banner-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="big-banner-descs">
                            <h1 className="big-b-title">Wishlist</h1>
                            <a href="index.html">Home page</a>
                            <span>Wishlist</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wishlist-area single-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="wishlist-content">
                            <form action="#">
                                <div className="wishlist-table table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-remove"><span className="nobr">Remove</span></th>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name"><span className="nobr">Product Name</span></th>
                                                <th className="product-price"><span className="nobr"> Unit Price </span></th>
                                                <th className="product-stock-stauts"><span className="nobr"> Stock Status </span></th>
                                                <th className="product-add-to-cart"><span className="nobr">add-to-cart </span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-remove"><a href="#">×</a></td>
                                                <td className="product-thumbnail"><a href="#"><img src="./assets/img/products/cart.jpg" alt="" /></a></td>
                                                <td className="product-name"><a href="#">Vestibulum suscipit</a></td>
                                                <td className="product-price"><span className="amount">$165.00</span></td>
                                                <td className="product-stock-status"><span className="wishlist-in-stock">In Stock</span></td>
                                                <td className="product-add-to-cart"><a href="#"> Add to Cart</a></td>
                                            </tr>
                                            <tr>
                                                <td className="product-remove"><a href="#">×</a></td>
                                                <td className="product-thumbnail"><a href="#"><img src="./assets/img/products/total-cart.jpg" alt="" /></a></td>
                                                <td className="product-name"><a href="#">Vestibulum dictum magna</a></td>
                                                <td className="product-price"><span className="amount">$50.00</span></td>
                                                <td className="product-stock-status"><span className="wishlist-in-stock">In Stock</span></td>
                                                <td className="product-add-to-cart"><a href="#"> Add to Cart</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wishlist

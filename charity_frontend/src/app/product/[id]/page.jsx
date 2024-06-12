
const Product = ({params}) => {
    console.log("params:",params)
  return (
    <div>
       <div className="big-banner-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="big-banner-descs single-pro-descssc">
                            <h1 className="big-b-title">Fusce aliquam sample – s5 - {params.id}</h1>
                            <a className="frtsv" href="/charity">Home page</a>
                            <a href="#">Shop Sidebar</a>
                            <a href="#">Fashion</a>
                            <a className="wtsp" href="#">Women's</a>
                            <span> / Fusce aliquam sample – s5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="single-product-area single-padding ag-res">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="single-pro-big-img">
                            <a href="#"><img className="first-img" src="../assets/img/products/h04-370x550.jpg" alt="" data-zoom-image="../assets/img/products/zoom1.jpg" /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="mdl-product-info">
                            <div className="mdl-pro-descs text-center">
                                <h3><a href="#">Fusce aliquam sample – s5</a></h3>
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
                            <div className="mdl-price-size-clr single-pro-amnt-sec">
                                <div className="prc-range-md text-center">
                                    <p className="price">
                                        <del>
                                            <span className="amount">$50.00</span>
                                        </del>
                                        <span className="amount">$18.20</span>
                                    </p>
                                </div>
                                <div className="quantity">
                                    <input className="input-text qty text" type="number" size="4" title="Qty" value="1" name="quantity" min="1" step="1" />
                                </div>
                                <div className="sngle-add-crt">
                                    <button>Add To Cart</button>
                                    <div className="mdl-fav-icon">
                                        <a href="#">
                                        <i className="fa fa-heart"></i>
                                        </a>
                                        <a href="#">
                                        <i className="fa fa-retweet"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-pro-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                            <div className="single-pro-tags">
                                <span className="tagged_as">
                                    Tags:
                                    <a rel="tag" href="#">fashion</a>
                                    ,
                                    <a rel="tag" href="#">Fusce aliquam</a>
                                    ,
                                    <a rel="tag" href="#">girls</a>
                                    ,
                                    <a rel="tag" href="#">sample</a>
                                    ,
                                    <a rel="tag" href="#">women's</a>
                                    .
                                </span>
                            </div>
                            <div className="return-shipping">
                                <div className="content-quick">
                                    <h3 className="title-quickshop text-uppercase text_color"> FREE SHIPPING & RETURN </h3>
                                    <div className="text-center">Tucked t-shirt relaxed plaited leather tote Jil Sander Vasari bomber clutch. Lilac minimal crop flats slipper denim shorts seam. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row single-tab-mtsd">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="single-pro-tabss">
                            <ul className="single-pro-tab" role="tablist">
                                <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Custom Tab</a></li>
                                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Reviews (0)</a></li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active tab-description" id="home">
                                    <h4>Paragraph text</h4>
                                    <p>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
                                    <h4>Unordered list</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                                        <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                                        <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                                        <li>Mauris eget diam magna, in blandit turpis.</li>
                                    </ul>
                                    <h4>Ordered list</h4>
                                    <ol>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                                        <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                                        <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                                        <li>Mauris eget diam magna, in blandit turpis.</li>
                                    </ol>
                                    <p>In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.</p>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="profile">custom contents goes here</div>
                                <div role="tabpanel" className="tab-pane" id="messages">
                                    <div className="my-tb-reviews">
                                        <div id="comments">
                                            <h2>Reviews</h2>
                                        </div>
                                        <div className="lv-a-rep">
                                            Leave a Reply to %s
                                            <h3>Be the first to review “Fusce aliquam sample – s5” </h3>
                                        </div>
                                        <div className="rev-rating">
                                            <h4>Rating</h4>
                                            <div className="rev-rating-icon">
                                                <a className="star-1" href="#">1</a>
                                                <a className="star-2" href="#">2</a>
                                                <a className="star-3" href="#">3</a>
                                                <a className="star-4" href="#">4</a>
                                                <a className="star-5" href="#">5</a>
                                            </div>
                                        </div>
                                        <div className="tb-your-review">
                                            <h4>Your Review</h4>
                                            <textarea cols="45" rows="8"></textarea>
                                        </div>
                                        <div className="name-review">
                                            <label>Name<span className="required">*</span></label>
                                            <input type="text" />
                                        </div>
                                        <div className="name-review">
                                            <label>Email<span className="required">*</span></label>
                                            <input type="text" />
                                        </div>
                                        <div className="tab-sbmt">
                                            <input type="submit" value="Submit Review" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
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
                                            <a className="venobox" data-gall="myGallery" href="../assets/img/products/x39.jpg"><img src="../assets/img/products/x39.jpg" alt="" /></a>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="profile-one">
                                            <a className="venobox" data-gall="myGallery" href="../assets/img/products/h01.jpg"><img alt="" src="../assets/img/products/h01.jpg" /></a>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="messages-one">
                                            <a className="venobox" data-gall="myGallery" href="../assets/img/products/h05.jpg"><img alt="" src="../assets/img/products/h05.jpg" /></a>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="settings-one">
                                            <a className="venobox" data-gall="myGallery" href="../assets/img/products/h04.jpg"><img alt="" src="../assets/img/products/h04.jpg" /></a>
                                        </div>
                                    </div>
                                    <ul className="mdl-tab" role="tablist">
                                        <li role="presentation" className="active"><a href="#home-one" aria-controls="home-one" role="tab" data-toggle="tab"><img src="../assets/img/products/x39-70x90.jpg" alt="" /></a></li>
                                        <li role="presentation"><a href="#profile-one" aria-controls="profile-one" role="tab" data-toggle="tab"><img src="../assets/img/products/h01-70x90.jpg" alt="" /></a></li>
                                        <li role="presentation"><a href="#messages-one" aria-controls="messages-one" role="tab" data-toggle="tab"><img src="../assets/img/products/h05-70x90.jpg" alt="" /></a></li>
                                        <li role="presentation"><a href="#settings-one" aria-controls="settings-one" role="tab" data-toggle="tab"><img src="../assets/img/products/h04-70x90.jpg" alt="" /></a></li>
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

export default Product

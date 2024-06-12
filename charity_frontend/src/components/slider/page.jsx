

const Slider = () => {
  return (
    <div>
       <div className="slider-area">
                <div className="bend niceties preview-2">
                    <div id="ensign-nivoslider" className="slides">
                        <img src="./assets/img/slider/slide1.jpg" alt="" title="#slider-direction-1" />
                        <img src="./assets/img/slider/slide2.jpg" alt="" title="#slider-direction-2" />
                        <img src="./assets/img/slider/slide3.jpg" alt="" title="#slider-direction-3" />
                    </div>
                    <div id="slider-direction-1" className="t-cn slider-direction slider-one">
                        <div className="container slider-space">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slider-content-1 text-center hidden-xs">
                                        <div className="layer-1-1 wow fadeInDownBig" data-wow-duration="0.6s" data-wow-delay="0s">
                                            <img src="./assets/img/slider/caption1_slider1.png" alt="" />
                                        </div>
                                        <div className="layer-1-2 wow slideInLeft" data-wow-duration="0.3s" data-wow-delay="0.6s">
                                            <img src="./assets/img/slider/caption2_slider1.png" alt="" />
                                        </div>
                                        <div className="layer-1-3 wow slideInRight" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                            <img src="./assets/img/slider/caption3_slider1.png" alt="" />
                                        </div>
                                        <div className="layer-1-4 wow bounceInUp" data-wow-duration="0.6s" data-wow-delay="1.0s">
                                            <a className="stat" href="#"><img src="./assets/img/slider/caption4_slider1.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slider-direction-2" className="slider-direction slider-two">
                        <div className="container slider-space">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slider-content-2 hidden-xs">
                                        <div className="layer-2-1 wow fadeInDown" data-wow-duration="0.3s" data-wow-delay="0s">
                                            <img src="./assets/img/slider/caption1_slider2.png" alt="" />
                                        </div>
                                        <div className="layer-2-2 wow flipInX" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                            <img src="./assets/img/slider/caption2_slider2.png" alt="" />
                                        </div>
                                        <div className="layer-2-3 wow bounceInUp" data-wow-duration="0.6s" data-wow-delay="1.1s">
                                            <a className="stat" href="#"><img src="./assets/img/slider/caption4_slider1.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slider-direction-3" className="slider-direction slider-three">
                        <div className="container slider-space">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slider-content-3 text-right hidden-xs">
                                        <div className="layer-3-1 wow fadeInLeftBig" data-wow-duration="0.7s" data-wow-delay="0s">
                                            <img src="./assets/img/slider/caption1_slider3.png" alt="" />
                                        </div>
                                        <div className="layer-3-2 wow bounceInRight" data-wow-duration="0.2s" data-wow-delay="0.7s">
                                            <img src="./assets/img/slider/caption2_slider3.png" alt="" />
                                        </div>
                                        <div className="layer-3-3 wow bounceInUp" data-wow-duration="0.6s" data-wow-delay="0.9s">
                                            <a className="stat" href="#"><img src="./assets/img/slider/caption4_slider1.png" alt="" /></a>
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

export default Slider

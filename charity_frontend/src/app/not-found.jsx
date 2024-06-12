
const NotFound = () => {
  return (
    <div>
      <div className="big-banner-area text-center">
<div className="container">
    <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="big-banner-descs">
                <h1 className="big-b-title">404</h1>
            </div>
        </div>
    </div>
</div>
</div>
<div className="error-area">
<div className="container">
    <div className="row text-center">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="error-img">
                <img src="./assets/img/indicator/404.png" alt="" />
            </div>
        <div className="error-descs">
            <h2>Oops! That page can not be found</h2>
            <p>It looks like nothing was found at this location. Maybe try to use a search?</p>
        </div>
        <div className="error-srch-box">
            <div className="myinpt">
                <input type="text" placeholder="Put your email address here" />
            <button title="Search" type="submit">
                <i className="fa fa-search"></i>
            </button>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
    </div>
  )
}

export default NotFound

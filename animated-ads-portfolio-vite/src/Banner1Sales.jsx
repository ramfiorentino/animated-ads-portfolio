import './bannersales.css'
import banner1 from './assets/sales-banner/sales-banner-bg.png'


function Banner1Sales() {

    return (
      <>
  <div className="banner">
    <div id="bg-container">
      <div className="bg-graphic-container"></div>
      <div className="background-images">
        <img id="bg-image" src={banner1} />
      </div>
      <div className="text-content">
        <div className="text-content1">
          <h1 id="super" className="extra-bold-text">
            SUPER
          </h1>
          <div id="sale" className="extra-bold-text">
            SALE
          </div>
          <p id="weekend" className="bold-text">
            THIS WEEKEND ONLY
          </p>
          <p id="upTo" className="regular-text">
            Up to 50% OFF
          </p>
        </div>
        <div className="text-content2">
        <p id="special_offer" className="bold-text">
            SPECIAL <br/> OFFER!
          </p>
        </div>
      </div>
    </div>
  </div>
</>
    )
  }
  
  export default Banner1Sales;
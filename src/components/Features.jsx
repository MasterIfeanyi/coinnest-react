import OwlCarousel from 'react-owl-carousel';


const Features = () => {

  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    },
    nav: false,
    dots: true
  }


  return (
    <OwlCarousel className='owl-theme section' loop margin={10} autoplay {...options}>

      {/* 1 */}
      <div className="review item">
        <h3>24 hour up-time</h3>
        <p>The API will always be available with zero latency and little to no down-time</p>
        <div className="review-img">
          <img src="./trust_image/shield.svg" alt=""/>
        </div>
      </div>

      {/* 2 */}
      <div className="review item">
        <h3>Global coverage</h3>
        {/* <p>Choose from 100+ fiat currencies, and buy the crypto you want, effortlessly</p> */}
        {/* <p>we offer a wide range of crypto-currencies. </p>  */}
        <p>View the latest live exchange rates for all the crypto-currencies available worldwide.</p>
        <div className="review-img">
          <img src="./trust_image/globe.svg" alt="" />
        </div>
      </div>


      {/* 3 */}
      <div className="review item">
        <h3>Great Documentation</h3>
        <p>To assist developers, we have curated a world-className documentation for the API</p>
        <div className="review-img">
            <img src="./trust_image/trust.svg" alt="" className="trust" />
        </div>
      </div>
    </OwlCarousel>
  )
}

export default Features
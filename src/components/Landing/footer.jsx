import Google from "../../img/landing/google.png";
import Netflix from "../../img/landing/netflix.png";
import Airbnb from "../../img/landing/airbnb.png";
import Amazon from "../../img/landing/amazon.png";
import Facebook from "../../img/landing/facebook.png";
import Grab from "../../img/landing/grab.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_footer.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Footer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <footer>
      <div className="footer-wrapper pt-90 pb-90">
        <div>
          <p className="mb-26"> Trusted by 5,000+ Companies Worldwide</p>
        </div>
        <div className="footer-slider">
          <Slider {...settings}>
            <div className="f-slider-logo">
              <img src={Google} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Netflix} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Airbnb} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Amazon} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Facebook} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Grab} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Google} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Netflix} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Airbnb} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Amazon} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Facebook} alt="company-logo" />
            </div>

            <div className="f-slider-logo">
              <img src={Grab} alt="company-logo" />
            </div>
          </Slider>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

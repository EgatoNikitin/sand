import {Header} from '../../componentns/Header/Header';
import './GiftcardPage.scss';
import {Footer} from '../../componentns/Footer/Footer';
import Slider from 'react-slick';
import img from '../../imgs/main-content/apple.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const GiftcardPage = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className='main--wrapper'>
      <Header />
      <Slider {...settings}>
        <img src={img} alt='behjw' />
        <img src={img} alt='behjw' />
        <img src={img} alt='behjw' />
        <img src={img} alt='behjw' />
        <img src={img} alt='behjw' />
        <img src={img} alt='behjw' />
        <img src={img} alt='behjw' />
      </Slider>
      <Footer />
    </div>
  );
};

export default GiftcardPage;

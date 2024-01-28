import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Paper } from '@mui/material';
import ExampleImage1 from './image/1.jpg';
import ExampleImage2 from './image/2.jpg';
import ExampleImage4 from './image/4.jpg';
import ExampleImage3 from './image/3.jpg';

const images = [
  'https://shalva.org.il/wp-content/uploads/2022/03/shalva_home.jpg',
  'https://shalva.org.il/wp-content/uploads/2015/01/Button-Hebrew-5.jpg',
  'https://cdn.doctorsonly.co.il/2018/12/shutterstock_252657109.jpg',
  ExampleImage1, ExampleImage2, ExampleImage3, ExampleImage4,

];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const ImageCarousel = (props) => {
  return (
    <>
      <div style={{ width: '45%' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Paper>
                <img src={image} alt={` ${index + 1}`} style={{ width: '100%', height: '400px' }} />
              </Paper>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageCarousel;

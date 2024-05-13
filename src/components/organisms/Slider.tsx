import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Slider.scss'; // Estilos CSS personalizados para el slider

const SliderComponent = () => {
  const settings = {
    dots: true, // Muestra indicadores de puntos
    infinite: true, // Permite desplazamiento infinito
    speed: 500, // Velocidad de animación en milisegundos
    slidesToShow: 1, // Número de slides a mostrar
    slidesToScroll: 1, // Número de slides a desplazar
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://ramenparados.com/wp-content/uploads/2016/09/One-Piece.jpg"
          alt="Slide 1"
          style={{
            height: '500px',
          }}
        />
      </div>
      <div>
        <img
          src="https://4d315bd0ad.clvaw-cdnwnd.com/3ef19ffa6fe81c38506c5c873e06534e/200003823-b6402b6406/1366_2000.jpeg?ph=4d315bd0ad"
          alt="Slide 2"
          style={{
            height: '500px',
          }}
        />
      </div>
      <div>
        <img
          src="https://im.ziffdavisinternational.com/ign_es/screenshot/default/galeria_jmb4.jpg"
          alt="Slide 3"
          style={{
            height: '500px',
          }}
        />
      </div>
    </Slider>
  );
};

export default SliderComponent;

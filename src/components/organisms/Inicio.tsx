import React from 'react';
import Slider from './Slider'; // Importa el componente Slider
import '../styles/Inicio.scss';
import Section1 from '../Pages/Body/Inicio';

const TwoColumnLayout = () => {
  return (
    <div className="two-column-container">
      <div className="left-column">
        <Section1 />
      </div>
      <div className="right-column">
        <Slider />
      </div>
    </div>
  );
};

export default TwoColumnLayout;

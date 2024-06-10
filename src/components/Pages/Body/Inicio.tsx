import React from 'react';

import '../../styles/Body/Section1Styles.scss';

const Section1: React.FC = () => {
  return (
    <div className="section-content">
      {/* // <div> */}
      <div style={{ textAlign: 'center', width: '100%', marginTop: '40px' }}>
        <h1 style={{ fontSize: '35px' }}>Mundo Anime</h1>
      </div>

      <p style={{ fontSize: '2vw', textAlign: 'center' }}>
        El anime, una forma de entretenimiento japonesa, ha ganado popularidad global por su diversidad de géneros y
        narrativas profundas. Influencia en la cultura pop, abordando temas sociales y personales. Su estilo visual
        distintivo y su capacidad para cautivar a las audiencias lo convierten en un fenómeno cultural duradero.
      </p>
    </div>
  );
};

export default Section1;

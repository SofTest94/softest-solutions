import React from 'react';
// import '../../styles/Section1Styles.scss'; // Importa tus estilos CSS aquí
import '../../styles/Body/Section1Styles.scss';

const Section5: React.FC = () => {
  return (
    <div className="section-container">
      <div className="section-content">
        <div className="section-text">
          <h1>Sobre mí</h1>

          <p>
            En SofTest Solutions, nos especializamos en ofrecer soluciones digitales a medida para satisfacer las
            necesidades de nuestros clientes. Desde el desarrollo de páginas web cautivadoras hasta la creación de
            aplicaciones móviles innovadoras, estamos aquí para convertir tus ideas en realidad digital.
          </p>

          {/* <div>
            <br />
            <br />
            <Button
              className="section-btn"
              onClick={() => handleScheduleAppointmentClick('7711129510', 'Buenas tardes, me gustaria agendar una cita.')}
            >
              Agendar cita
            </Button>
          </div> */}
        </div>
        <div className="section-image">
          <img src="https://bucket-harmony.s3.amazonaws.com/logo.jpeg" alt="Descripción de la imagen" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Section5;

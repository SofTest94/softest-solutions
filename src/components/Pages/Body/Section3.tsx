// import React from 'react';
// import '../../styles/Body/Section1Styles.scss';
// import '../../styles/Portafolio.scss';
// import PortfolioItem from '../../molecules/PortfolioItem';

// const Section3: React.FC = () => {
//   const imageUrls = [
//     'https://pulpos.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fstock_others.e9ac297d.png&w=1920&q=100',
//     'https://pulpos.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Finvoicing.3f831bfc.png&w=1920&q=100',
//     'https://pulpos.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Freports.6afb41aa.png&w=1920&q=100',
//     // 'https://example.com/image4.jpg',
//   ];

//   return (
//     <div className="section-container">
//       <div className="section-content">
//         <div className="columns-container">
//           <div className="column">
//             <PortfolioItem
//               title="Página web "
//               description="Desarrollo de un sistema de gestión de ventas para una empresa de comercio electrónico."
//               type="Software"
//               // imageUrl="URL_IMAGEN_SOFTWARE"
//               websiteUrl="URL_SITIO_WEB_SOFTWARE"
//               imageUrls={imageUrls}
//             />
//           </div>
//           <div className="column">
//             <img
//               src="https://cdn.shopify.com/app-store/listing_images/0456cc0304bcaa8012aeceb1d71d0128/desktop_screenshot/CIWAjOHtgP4CEAE=.jpeg?height=720&quality=90&width=1280"
//               alt="Imagen"
//               width={'100%'}
//               height={'100%'}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section3;

import React from 'react';
import '../../styles/Body/Section1Styles.scss';
import '../../styles/Portafolio.scss';
import PortfolioItem from '../../molecules/PortfolioItem';

const Section3: React.FC = () => {
  const imageUrls = [
    'https://bxerblog.files.wordpress.com/2014/07/strong-world-one-piece-34106704-1024-768.jpg',
    'https://ramenparados.com/wp-content/uploads/2015/10/71UQSmH3D4L._SL1181_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpljeK4eAGeS5cHtZZNjdjgjasq3J44lnuH4Gl0XwRBQ&s',

    // 'https://example.com/image4.jpg',
  ];

  return (
    <div className="section-container">
      <div className="section-content">
        {/* Primera fila */}
        <div className="title-row">
          <h2>Explora las mejores peliculas</h2>
        </div>
        {/* Segunda fila */}
        <div className="columns-container">
          <div className="column">
            <PortfolioItem
              title="One Piece: Strong World"
              description="Los Sombrero de Paja se enfrentan al temible pirata Shiki, quien planea destruir el mundo con su poderoso barco volador. Luffy y su tripulación deben detenerlo para salvar el East Blue."
              type="One piece"
              // imageUrl="URL_IMAGEN_SOFTWARE"
              websiteUrl="URL_SITIO_WEB_SOFTWARE"
              imageUrls={imageUrls}
            />
          </div>
          <div className="column">
            <img
              src="https://bxerblog.files.wordpress.com/2014/07/strong-world-one-piece-34106704-1024-768.jpg"
              alt="Imagen"
              width={'100%'}
              height={'100%'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

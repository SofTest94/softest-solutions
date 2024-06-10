import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  type: string;
  imageUrls: string[]; // Cambié imageUrl a imageUrls para recibir una lista de URLs
  websiteUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, type, imageUrls, websiteUrl }) => {
  return (
    <div className="portfolio-item">
      <div className="portfolio-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Anime: {type}</p>
        <a href={'https://www.youtube.com/watch?v=3n58UPvcD7I'} target="_blank" rel="noopener noreferrer">
          Link de la pelicula
        </a>
      </div>
      <div className="portfolio-images">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={title} className="portfolio-image" />
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;

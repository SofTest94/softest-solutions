import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <p>AMS Inc. Anime</p>
      <p>&copy; {new Date().getFullYear()} AMS</p>
    </footer>
  );
};

export default Footer;

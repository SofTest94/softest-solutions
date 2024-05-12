import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <p>Correo electrónico: softest94@gmail.com</p>
      <p>&copy; {new Date().getFullYear()} SofTest Solutions</p>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import { styled, Theme } from '@mui/system';
import BranchSelect from './BranchSelect';

interface AppBarProps {
  onSelectBranch: (branch: string) => void;
}

const AppBarRoot = styled('div')(({ theme }: { theme: Theme }) => ({
  marginBottom: theme.spacing(2),
  position: 'fixed', // Hace que el AppBar sea fijo
  top: 0, // Lo fija en la parte superior de la página
  width: '99%', // Ocupa todo el ancho de la página
  zIndex: 1100, // Asegura que esté por encima de otros elementos
}));

const LogoImage = styled('img')({
  marginRight: 'auto',
  height: '80px',
  marginBottom: '10px',
  marginTop: '10px',
});

const AppBar: React.FC<AppBarProps> = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleMenuItemClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedItem(sectionId); // Actualizar el elemento seleccionado
  };

  return (
    <AppBarRoot>
      <MuiAppBar position="static">
        <Toolbar>
          <LogoImage src="https://bucket-harmony.s3.amazonaws.com/logo.jpeg" alt="Logo" height={'80px'} width={'200px'} />

          <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              marginLeft: '20px',
              color: selectedItem === 'section1' ? '#DBE024' : 'black', // Cambia el color si seleccionado
            }}
            onClick={() => handleMenuItemClick('section1')}
          >
            Inicio
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              marginLeft: '20px',
              color: selectedItem === 'section2' ? '#DBE024' : 'white', // Cambia el color si seleccionado
            }}
            onClick={() => handleMenuItemClick('section2')}
          >
            Servicios
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              marginLeft: '20px',
              color: selectedItem === 'section3' ? '#DBE024' : 'white', // Cambia el color si seleccionado
            }}
            onClick={() => handleMenuItemClick('section3')}
          >
            Portafolio
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              marginLeft: '20px',
              color: selectedItem === 'section4' ? '#DBE024' : 'white', // Cambia el color si seleccionado
            }}
            onClick={() => handleMenuItemClick('section4')}
          >
            Blog
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              marginLeft: '20px',
              color: selectedItem === 'section5' ? '#F3F91F' : 'white', // Cambia el color si seleccionado
            }}
            onClick={() => handleMenuItemClick('section5')}
          >
            Sobre mí
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              marginLeft: '20px',
              color: selectedItem === 'section6' ? '#F3F91F' : 'white', // Cambia el color si seleccionado
            }}
            onClick={() => handleMenuItemClick('section6')}
          >
            Contacto
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </AppBarRoot>
  );
};

export default AppBar;

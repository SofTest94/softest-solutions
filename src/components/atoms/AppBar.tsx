import React, { useState } from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import { styled, Theme } from '@mui/system';

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
          <LogoImage
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a156873-a830-43b1-9b31-3becb2f788fb/dfjthan-40069148-31b5-4d4e-91a2-b295fb413b22.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhMTU2ODczLWE4MzAtNDNiMS05YjMxLTNiZWNiMmY3ODhmYlwvZGZqdGhhbi00MDA2OTE0OC0zMWI1LTRkNGUtOTFhMi1iMjk1ZmI0MTNiMjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vZGUwY5YLxa6ZiVa6qq1kgoJwCSOzNyVdAbUu9AfGeE"
            alt="Logo"
            height={'80px'}
            width={'200px'}
          />

          <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              marginLeft: '20px',
              color: selectedItem === 'section1' ? '#EEF913' : 'white', // Cambia el color si seleccionado
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
              color: selectedItem === 'section2' ? '#EEF913' : 'white', // Cambia el color si seleccionado
            }}
            onClick={() => handleMenuItemClick('section2')}
          >
            Animes
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              marginLeft: '20px',
              color: selectedItem === 'section3' ? '#EEF913' : 'white', // Cambia el color si seleccionado
            }}
            onClick={() => handleMenuItemClick('section3')}
          >
            Peliculas
          </Typography>
          {/* <Typography
            variant="h6"
            sx={{
              cursor: 'pointer',
              marginLeft: '20px',
              color: selectedItem === 'section4' ? '#EEF913' : 'white', // Cambia el color si seleccionado
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
              color: selectedItem === 'section5' ? '#EEF913' : 'white', // Cambia el color si seleccionado
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
              color: selectedItem === 'section6' ? '#EEF913' : 'white', // Cambia el color si seleccionado
            }}
            onClick={() => handleMenuItemClick('section6')}
          >
            Contacto
          </Typography> */}
        </Toolbar>
      </MuiAppBar>
    </AppBarRoot>
  );
};

export default AppBar;

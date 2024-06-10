import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const FloatingButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5217711129510?text=Hola,%20me%20interesa%20ver%20un%20anime', '_blank');
  };

  return (
    <Tooltip title="Pedir información" aria-label="add">
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        onClick={handleClick}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default FloatingButton;

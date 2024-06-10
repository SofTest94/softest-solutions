import React, { useRef, useEffect, useState } from 'react';
import '../styles/HeaderStyles.scss';
import { handleScheduleAppointmentClick } from '../../utils/functions';
import AppBar from '../atoms/AppBar';
import Section5 from '../Pages/Body/Section5';
import Section1 from '../Pages/Body/Inicio';
import Slider from './Slider';
import TwoColumnLayout from './Inicio';

// const Header: React.FC = () => {
interface HeaderProps {
  onSelectBranch: (branch: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSelectBranch }) => {
  const [selectedBranch, setSelectedBranch] = useState<string>('México'); // Valor predeterminado

  const handleSelectBranch = (branch: string) => {
    setSelectedBranch(branch);
    onSelectBranch(branch); // Llama a la función pasada desde MainTemplate
  };
  const textoRef = useRef<HTMLHeadingElement>(null);
  const textoWidthRef = useRef<number | null>(null);

  useEffect(() => {
    setSelectedBranch('México');
    const updateTextoWidth = () => {
      if (textoRef.current) {
        const textoWidth = textoRef.current.getBoundingClientRect().width;
        textoWidthRef.current = textoWidth;
        console.log('Ancho del texto:', textoWidth);
      }
    };

    window.addEventListener('resize', updateTextoWidth);
    updateTextoWidth(); // Llamada inicial para asegurarse de obtener el ancho del texto
    return () => {
      window.removeEventListener('resize', updateTextoWidth);
    };
  }, []);

  return (
    <header>
      <div style={{ marginTop: '3.8vw' }}>
        <AppBar onSelectBranch={handleSelectBranch} />
      </div>
      <div id="section1" style={{ paddingTop: '6%' }}>
        <TwoColumnLayout />
      </div>
    </header>
  );
};

export default Header;

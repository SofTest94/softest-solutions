import React, { useState } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Body from '../organisms/Body';
import FloatingButton from '../molecules/FloatingButton';

const MainTemplate: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>('México');

  const handleSelectBranch = (branch: string) => {
    setSelectedBranch(branch);
  };

  return (
    <>
      <Header onSelectBranch={handleSelectBranch} />
      <Body selectedBranch={selectedBranch} />
      <Footer />
      <FloatingButton />
    </>
  );
};

export default MainTemplate;

import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Section2 from '../Pages/Body/Section2';
import Section3 from '../Pages/Body/Section3';
import Section4 from '../Pages/Body/Section4';
import Section5 from '../Pages/Body/Section5';
import '../styles/HeaderStyles.scss';
import Section6 from '../Pages/Body/Section6';

// const Body: React.FC = () => {
interface BodyProps {
  selectedBranch: string;
}

const Body: React.FC<BodyProps> = ({ selectedBranch }) => {
  return (
    <div style={{ width: '100%' }}>
      <div id="section2" style={{ paddingTop: '60px' }}>
        <Section2 />
      </div>
      <div id="section3" style={{ paddingTop: '60px' }}>
        <Section3 />
      </div>
      <div id="section4" style={{ paddingTop: '60px' }}>
        <Section4 />
      </div>
      <div id="section5" style={{ paddingTop: '60px' }}>
        <Section5 />
      </div>
      <div id="section6" style={{ paddingTop: '60px', marginBottom: '60px' }}>
        <Section6 />
      </div>
      {/* <div id="section2">
        <Section2 selectedBranch={selectedBranch} />
      </div>
      <div id="section3">
        <Section3 />
      </div>
      <div id="section4">
        <Section4 />
      </div>
      <div id="section5">
        <Section5 />
      </div> */}
    </div>
  );
};

export default Body;

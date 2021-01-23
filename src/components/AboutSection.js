import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';
//Styled
// import styled from 'styled-components';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We Work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>Dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have
            professionals with amazing skills
          </p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt='guy with a camra' />
      </Image>
    </About>
  );
};

export default AboutSection;

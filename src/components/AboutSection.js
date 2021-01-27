import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className='title'>
          <Hide>
            <motion.h2 variants={titleAnim}>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>Dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas that you have
            professionals with amazing skills
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt='guy with a camra' />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;

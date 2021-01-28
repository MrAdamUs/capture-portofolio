import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Import Animation
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from '../animation';
import { useScroll } from '../components/useScroll';

const OutWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <Work
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      style={{ background: '#cccccc' }}
      layout='position'
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie ref={element} variants={fade} animate={controls} initia='hidden'>
        <Link to='/work/the-athlete'>
          <motion.h2 variants={fade}>The Athlate</motion.h2>
          <motion.div className='line' variants={lineAnim}></motion.div>

          <motion.img variants={photoAnim} src={athlete} alt='athlete' />
        </Link>
      </Movie>

      <Movie ref={element2} variants={fade} animate={controls2} initia='hidden'>
        <Link to='/work/good-times'>
          <h2>The Racer</h2>
          <motion.div className='line' variants={lineAnim}></motion.div>
          <motion.img variants={photoAnim} src={theracer} alt='athlete' />
        </Link>
      </Movie>

      <Movie ref={element3} variants={fade} animate={controls3} initia='hidden'>
        <Link to='/work/the-racer'>
          <h2>Good Times</h2>
          <motion.div className='line' variants={lineAnim}></motion.div>
          <motion.img variants={photoAnim} src={goodtimes} alt='athlete' />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 50px;
  }
`;

// const Hide = styled.div`
//   overflow: hidden;
// `;
//Fram Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OutWork;

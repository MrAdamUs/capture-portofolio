import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Import Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const OutWork = () => {
  return (
    <Work exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
      <Movie>
        <Link to='/work/the-athlete'>
          <h2>The Athlate</h2>
          <div className='lin'></div>

          <img src={athlete} alt='athlete' />
        </Link>
      </Movie>
      <Movie>
        <Link to='/work/good-times'>
          <h2>The Racer</h2>
          <div className='lin'></div>

          <img src={theracer} alt='thercer' />
        </Link>
      </Movie>
      <Movie>
        <Link to='/work/the-racer'>
          <h2>Good Times</h2>
          <div className='lin'></div>

          <img src={goodtimes} alt='goodtime' />
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
    color: white;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OutWork;

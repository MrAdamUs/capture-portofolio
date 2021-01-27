import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <div className='faq'>
        <h2>
          Any questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title='How Do I Start?'>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Toggle>
          <Toggle title='What can you do?'>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Toggle>
          <Toggle title='I want the best service '>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 0.5rem 0rem;
    }
  }
`;

export default FaqSection;

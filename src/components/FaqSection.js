import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';

const FaqSection = () => {
  return (
    <Faq>
      <div className='faq'>
        <h2>
          Any questions <span>FAQ</span>
        </h2>
        <div className='question'>
          <h4>How Do I Start?</h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='faq-line'></div>
        </div>
        <div className='question'>
          <h4>How Do I Start?</h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='faq-line'></div>
        </div>
        <div className='question'>
          <h4>How Do I Start?</h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='faq-line'></div>
        </div>
        <div className='question'>
          <h4>How Do I Start?</h4>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='faq-line'></div>
        </div>
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
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .amswer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

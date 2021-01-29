import React from 'react';
// Import Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <ContactStyle
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Socail variants={titleAnim}>
            <Circale />
            <h2>Send Us A messge</h2>
          </Socail>
        </Hide>
        <Hide>
          <Socail variants={titleAnim}>
            <Circale />
            <h2>Send Us an Email</h2>
          </Socail>
        </Hide>
        <Hide>
          <Socail variants={titleAnim}>
            <Circale />
            <h2>Our Facbook</h2>
          </Socail>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    h2 {
      font-size: 1.5rem;
      font-weight: bolder;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Circale = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media (max-width: 1300px) {
    width: 1rem;
    height: 1rem;
  }
`;

const Socail = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
export default ContactUs;

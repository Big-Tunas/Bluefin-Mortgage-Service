import React from 'react';
import Styled from 'styled-components';

// import patchRequest from '../helpers/patchRequest.js';

const ContactButton = Styled.button`
  background-color: maroon;
  width: 100%;
  height: 40px;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 1.1rem;
`;

const Center = Styled.div`
  padding 5px;
`;

const StyledContactButton = () => (
  <div>
    <ContactButton onClick={() => console.log('click')}>
      <Center>Get pre-qualified</Center>
    </ContactButton>
  </div>
);

export default StyledContactButton;

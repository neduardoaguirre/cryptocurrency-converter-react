import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Message = styled.p`
  background-color: #b7322c;
  padding: 10px;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  border-radius: 10px;
`;

const Error = ({ message }) => {
  return <Message>{message}</Message>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;

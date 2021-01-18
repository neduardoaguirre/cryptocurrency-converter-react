import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const PriceBox = styled.div`
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-style: 18px;
  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Result = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <PriceBox>
      <Price>
        Price: <span>{result.PRICE}</span>
      </Price>
      <Info>
        High day: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Low day: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Change 24 hour: <span>{result.CHANGEPCT24HOUR}%</span>
      </Info>
      <Info>
        Last Update: <span>{result.LASTUPDATE}</span>
      </Info>
    </PriceBox>
  );
};

Result.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Result;

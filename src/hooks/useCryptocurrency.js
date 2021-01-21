import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', sans-serif;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 24px;
  margin-top: 3rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCryptocurrency = (label, stateInitial, cryptos) => {
  const [state, setState] = useState(stateInitial);

  const SelectCrypto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value=""> -- Select -- </option>
        {cryptos.map((crypto) => (
          <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
            {crypto.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, SelectCrypto, setState];
};

export default useCryptocurrency;

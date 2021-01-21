import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import Error from '../components/Error';
import styled from '@emotion/styled';
import axios from 'axios';

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  background-color: #0d2235;
  padding: 10px;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 10px;
  color: #ffffff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #224b72;
    cursor: pointer;
  }
`;

const Form = ({ setCurrency, setCrypto }) => {
  const [cryptoList, setCryptoList] = useState([]);
  const [error, setError] = useState(false);

  const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'BRL', name: 'Brazilian Real' },
    { code: 'ARS', name: 'Argentine Peso' },
  ];

  const [currency, SelectCurrency] = useCurrency(
    'Choose your currency',
    '',
    currencies
  );

  const [crypto, SelectCrypto] = useCryptocurrency(
    'Choose cryptocurrency',
    '',
    cryptoList
  );

  useEffect(() => {
    const callAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const res = await axios.get(url);
      setCryptoList(res.data.Data);
    };
    callAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency === '' || crypto === '') {
      setError(true);
      return;
    }
    setError(false);
    setCurrency(currency);
    setCrypto(crypto);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="Both fields are required" /> : null}
      <SelectCurrency />
      <SelectCrypto />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

Form.propTypes = {
  setCurrency: PropTypes.func.isRequired,
  setCrypto: PropTypes.func.isRequired,
};

export default Form;

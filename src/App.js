import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './logo.png';
import Form from './components/Form';
import Result from './components/Result';
import Spinner from './components/Spinner';
import axios from 'axios';

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 70%;
  display: block;
  margin: 6rem auto;
  @media (max-width: 992px) {
    margin: 1rem auto;
  }
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  color: #ffffff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;
  margin-top: 30px;

  &::after {
    content: '';
    width: 100px;
    height: 5px;
    background-color: #0d2235;
    display: block;
  }
`;

function App() {
  const [currency, setCurrency] = useState('');
  const [crypto, setCrypto] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPrice = async () => {
      if (currency === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
      const res = await axios.get(url);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setResult(res.data.DISPLAY[crypto][currency]);
      }, 2000);
    };
    getPrice();
  }, [currency, crypto]);

  const component = loading ? <Spinner /> : <Result result={result} />;

  return (
    <Container>
      <div>
        <Image src={image} alt="crypto image" />
      </div>
      <div>
        <Heading>Cryptocurrency Converter</Heading>
        <Form setCurrency={setCurrency} setCrypto={setCrypto} />
        {component}
      </div>
    </Container>
  );
}

export default App;

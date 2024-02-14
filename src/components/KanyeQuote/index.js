// src/components/QuoteBox.js
import React, { useState, useEffect } from 'react';
import * as C from './styles';
import KanyeImage from '../../image/kw_photo.jpg';


const QuoteBox = () => {
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(data => {
        setQuote(data.quote);
      })
      .catch(error => {
        console.error('Erro ao obter a citação:', error);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <C.Container>
      <C.Title><C.Span>Kanye's</C.Span>Box</C.Title>
      <C.QuoteContainer>
        <C.Image src={KanyeImage} alt="Kanye photo" />
        <C.QuoteText>"{quote}"</C.QuoteText>
        <C.Button onClick={getQuote}>A new shit</C.Button>
      </C.QuoteContainer>
    </C.Container>
  );
};

export default QuoteBox;

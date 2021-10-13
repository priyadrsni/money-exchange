import ConvertorCont from './components/ConvertorContainer';
import Exchange from './components/Exchange';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const apiKey = "ddf0caf96794615a9876710b";
  let url = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;
  const [countryCodes, setCountryCodes] = useState([]);
  const [conversionRate, setRate] = useState();
  const [conversionResult, setResult] = useState();
  const [resultOfCall, setCallResult] = useState();

  const fetchCountryCodes = async () => {
    const responseData = await fetch(url);
    const { supported_codes }  = await responseData.json();
    setCountryCodes(supported_codes);
  }

  useEffect(() => {fetchCountryCodes()}, []);

  const calculateExchangeHandler = async (url) => {
    const responseData = await fetch(url);
    const { result, conversion_rate, conversion_result }  = await responseData.json();
    setRate(conversion_rate);
    setResult(conversion_result);
    setCallResult(result);
  }

  return (
    <div className="App">
      <h1>Exchange</h1>
      {/* {countryCodes.map(code => 
      {if(code[0] === 'USD') return (
         <p>{code[0]} - {code[1]}</p>
      )
      else return;
      })
    } */}
      <ConvertorCont codes={countryCodes} result={conversionResult} />
      <Exchange calculateExchangeHandler={calculateExchangeHandler} apikey={apiKey} rate={conversionRate} response={resultOfCall}/>
    </div>
  );
}

export default App;

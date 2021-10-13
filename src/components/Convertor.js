import React, { useRef, useState } from 'react';
import './Convertor.css'

const Convertor = (props) => {
    const [show, setShow] = useState(false);
    const [currentCountry, setCountry] = useState(props.defaultValues.country);
    const [currentAmount, setAmount] = useState(0);
    const [uniqueCode, setCode] = useState(props.defaultValues.code);
    const [searchingText, setSearchingText] = useState('');
    const amountRef = useRef(null);

    const updateCurrency = (event, countryCode) => {
        setCountry(event.target.textContent);
        setCode(countryCode);
        setShow(!show);
    }

    const showCountryCodes = () => {
        setShow(!show);
    }

    const setCurrentCountryHandler = () => {
        return currentCountry;
    }

    const updateAmountHandler = (event) => {
        console.log(event.target.value);
        setAmount(event.target.value);
    }

    const clearValue = () => {
        amountRef.current.value = "";
    }

    const searchForText = (e) => {
        setSearchingText(e.target.value);
        setCountry(e.target.value);
        if(!show) setShow(!show);
        console.log(props.codes
            .filter(code => (searchingText === '' || code[0].includes(searchingText))));
    }

    return (
        <section className="convertor" > 
            <h2>{props.heading}</h2>
            <div className="currency-type-cont"><input className="currency-type" onChange={searchForText} id={props.defaultValues.id} data-code={uniqueCode} value={setCurrentCountryHandler()}/> <span className="arrow" onClick={showCountryCodes}></span>
                {show &&<ul className="country-list">
                    {props.codes
                    .filter(code => (searchingText === '' || `${code[1]} - ${code[0]}`.toLowerCase().includes(searchingText.toLowerCase())))
                    .map((code, index) => (<li key={index} id={uniqueCode} onClick={(e) => updateCurrency(e, code[0])}>{code[1]} - {code[0]}</li>))}
                </ul>}
            </div>
            <input onFocus={clearValue} ref={amountRef} id={props.defaultValues.id === "base" ? "baseamount" : "targetamount"} type="text" value={props.defaultValues.result || currentAmount} onChange={updateAmountHandler}/>
        </section>
    );
}

export default Convertor;


// || code[0].toLowerCase().includes(searchingText.toLowerCase()) || code[1].toLowerCase().includes(searchingText.toLowerCase()) || 
import React from 'react';
import "./Exchange.css";
import tick from "../check.png";
const Exchange = (props) => {
    let base = document.getElementById("base");
    let target = document.getElementById("target");
    let amount = document.getElementById("baseamount");

    const createUrl = () => {
        let url = `https://v6.exchangerate-api.com/v6/${props.apikey}/pair/${base.getAttribute('data-code')}/${target.getAttribute('data-code')}/${amount.value.replace(/[.,\s]/g, '')}`;
        props.calculateExchangeHandler(url)
    }

    return (
        <section className="exchange">
            <div>
                <h2>Current exchange rate</h2>
                <p>{props.rate || 0} {props.response === "success" && <img src={tick} alt="tick icon" />}</p>
            </div>
            <button onClick={createUrl}>Exchange</button>
        </section>
    );
}

export default Exchange;


// 
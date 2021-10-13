import React from 'react';
import Convertor from './Convertor';
import './ConvertorContainer.css';

const convertorContainer = (props) => {
    return (
        <div className="convt-cont">
            <Convertor heading="You change" defaultValues={{id: "base", code: "INR", country: "Indian Rupee - INR", amount: "10 000"}} codes={props.codes}/>
            <Convertor heading="You get" defaultValues={{id: "target", code: "USD", country: "United States Dollar - USD", result: props.result}} codes={props.codes}/>
        </div>
    );
}


export default convertorContainer;
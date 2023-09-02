import React from 'react';
import { ACTIONS } from './Calculator.jsx';

function DigitButton({ dispatch, digit, className }) {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })} className={className}>
            {digit}
        </button>
    );
}

export default DigitButton;

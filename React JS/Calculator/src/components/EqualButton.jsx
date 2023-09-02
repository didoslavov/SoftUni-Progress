import React from 'react';
import { ACTIONS } from './Calculator.jsx';

function EqualButton({ dispatch, operation, className }) {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.EVALUATE })} className={className}>
            {operation}
        </button>
    );
}

export default EqualButton;

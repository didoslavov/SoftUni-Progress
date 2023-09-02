import React from 'react';
import { ACTIONS } from './Calculator.jsx';

function ClearButton({ dispatch, operation, className }) {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.CLEAR })} className={className}>
            {operation}
        </button>
    );
}

export default ClearButton;

import React from 'react';
import { ACTIONS } from './Calculator.jsx';

function OperationButton({ dispatch, operation, className }) {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })} className={className}>
            {operation}
        </button>
    );
}

export default OperationButton;

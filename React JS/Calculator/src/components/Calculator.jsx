import React from 'react';
import DigitButton from './DigitButton.jsx';
import OperationButton from './OperationButton.jsx';
import Display from './Display.jsx';
import ClearButton from './ClearButton.jsx';
import { useReducer } from 'react';

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    EVALUATE: 'evaluate',
};

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            return { ...state, currentOperand: `${state.currentOperand || ''}${payload.digit}` };
        case ACTIONS.CHOOSE_OPERATION:
            return { ...state, currentOperand: `${state.currentOperand || ''}${payload.operation}` };
        case ACTIONS.CLEAR:
            return { currentOperand: 0, previousOperand: '', operation: null };
        default:
            return state;
    }
}

function Calculator() {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, { currentOperand: 0 });

    return (
        <div className="calculator">
            <div className="display">
                <Display currentOperand={currentOperand} previousOperand={previousOperand} operation={operation} />
            </div>

            <div className="buttons">
                <ClearButton dispatch={dispatch} className="operator" operation="C" />
                <OperationButton dispatch={dispatch} className="operator" operation="÷" />
                <OperationButton dispatch={dispatch} className="operator" operation="*" />
                <OperationButton dispatch={dispatch} className="operator" operation="-" />
                <DigitButton dispatch={dispatch} digit="1" />
                <DigitButton dispatch={dispatch} digit="2" />
                <DigitButton dispatch={dispatch} digit="3" />
                <OperationButton dispatch={dispatch} className="operator" operation="+" />
                <DigitButton dispatch={dispatch} digit="4" />
                <DigitButton dispatch={dispatch} digit="5" />
                <DigitButton dispatch={dispatch} digit="6" />
                <OperationButton dispatch={dispatch} className="operator" operation="=" />
                <DigitButton dispatch={dispatch} digit="7" />
                <DigitButton dispatch={dispatch} digit="8" />
                <DigitButton dispatch={dispatch} digit="9" />
                <DigitButton dispatch={dispatch} digit="." />
                <DigitButton dispatch={dispatch} className="zero" digit="0" />
            </div>
        </div>
    );
}

export default Calculator;

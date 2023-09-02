import React from 'react';
import DigitButton from './DigitButton.jsx';
import OperationButton from './OperationButton.jsx';
import Display from './Display.jsx';
import ClearButton from './ClearButton.jsx';
import EqualButton from './EqualButton.jsx';
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
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                };
            }

            if (payload.digit === '0' && state.currentOperand === '0') {
                return state;
            }

            if (payload.digit === '.' && state.currentOperand.includes('.')) {
                return state;
            }

            return { ...state, currentOperand: `${state.currentOperand || ''}${payload.digit}` };
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state;
            }

            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                };
            }

            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                };
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null,
            };
        case ACTIONS.CLEAR:
            return {};
        case ACTIONS.EVALUATE:
            if (state.operation == null || state.currentOperand == null || state.previousOperand == null) {
                return state;
            }

            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state),
            };
        default:
            return state;
    }
}

const FORMAT_INTEGER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
});

function formatOperand(operand) {
    if (operand == null) {
        return;
    }

    const [integer, decimal] = operand.split('.');

    if (decimal == null) {
        return FORMAT_INTEGER.format(integer);
    }

    return `${FORMAT_INTEGER.format(integer)}.${decimal}`;
}

function evaluate({ currentOperand, previousOperand, operation }) {
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    const operations = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '÷': (num1, num2) => num1 / num2,
    };

    if (isNaN(previous) || isNaN(current)) {
        return '';
    }

    return operations[operation](previous, current).toString();
}

function Calculator() {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

    return (
        <div className="calculator">
            <div className="display">
                <Display
                    currentOperand={formatOperand(currentOperand)}
                    previousOperand={formatOperand(previousOperand)}
                    operation={operation}
                />
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
                <EqualButton dispatch={dispatch} className="operator" operation="=" />
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

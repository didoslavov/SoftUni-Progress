import React from 'react';

function Display({ currentOperand, previousOperand, operation }) {
    return (
        <>
            <div id="previous">
                {previousOperand} {operation}
            </div>
            <div id="display">{currentOperand}</div>
        </>
    );
}

export default Display;

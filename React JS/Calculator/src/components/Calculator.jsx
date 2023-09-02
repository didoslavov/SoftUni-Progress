import React from 'react';
import Button from './Button.jsx';
import Display from './Display.jsx';
import { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState(0);

    return (
        <div className="calculator">
            <div className="display">
                <Display setInput={setInput} input={input} />
            </div>

            <div className="buttons">
                <Button className="operator" content="C" />
                <Button className="operator" content="/" />
                <Button className="operator" content="*" />
                <Button className="operator" content="-" />
                <Button className="operator" content="+" />
                <Button className="operator" content="=" />
                <Button content="1" />
                <Button content="2" />
                <Button content="3" />
                <Button content="4" />
                <Button content="5" />
                <Button content="6" />
                <Button content="7" />
                <Button content="8" />
                <Button content="9" />
                <Button className="zero" content="0" />
                <Button content="." />
            </div>
        </div>
    );
}

export default Calculator;

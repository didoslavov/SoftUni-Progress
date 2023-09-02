import React from 'react';

function Display({ input, setInput }) {
    return <input type="text" id="display" value={input} disabled />;
}

export default Display;

import React, { useState } from 'react';
import beautify from 'js-beautify';

function Beautifier() {
  const [inputCode, setInputCode] = useState('');
  const [beautifiedCode, setBeautifiedCode] = useState('');

  const beautifyCode = () => {
    try {
      const beautified = beautify(inputCode);
      setBeautifiedCode(beautified);
    } catch (error) {
      console.error('Error beautifying code:', error);
      setBeautifiedCode('Error beautifying code');
    }
  };

  return (
    <div>
      <textarea
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        rows={10}
        cols={80}
        placeholder="Enter your JS code or JSON here..."
      />
      <br />
      <button onClick={beautifyCode}>Beautify</button>
      <br />
      <textarea
        value={beautifiedCode}
        readOnly
        rows={10}
        cols={80}
        placeholder="Beautified code will appear here..."
      />
    </div>
  );
}

export default Beautifier;

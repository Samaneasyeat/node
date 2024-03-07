import React, { useState } from 'react';
import beautify from 'js-beautify';

function Beautifier() {
  const [code, setCode] = useState('');

  const beautifyCode = () => {
    try {
      const beautified = beautify(code);
      setCode(beautified);
    } catch (error) {
      console.error('Error beautifying code:', error);
      setCode('Error beautifying code');
    }
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={40}
        placeholder="Enter your JS code or JSON here..."
        style={{ width: '100%' }}
      />
      <br />
      <button onClick={beautifyCode}>Beautify</button>
    </div>
  );
}

export default Beautifier;

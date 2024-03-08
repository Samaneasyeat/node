import React, { useState } from 'react';
import beautify from 'js-beautify';

function Beautifier() {
  const [code, setCode] = useState('');
  const [indentSize, setIndentSize] = useState(2); // Default indent size

  const beautifyCode = () => {
    try {
      const beautified = beautify(code, { indent_size: indentSize });
      setCode(beautified);
    } catch (error) {
      console.error('Error beautifying code:', error);
      setCode('Error beautifying code');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  const selectAll = () => {
    const textarea = document.getElementById('codeTextArea');
    textarea.select();
  };

  const clearTextarea = () => {
    setCode('');
  };

  return (
    <div>
      <textarea
        id="codeTextArea"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={40}
        placeholder="Enter your JS code or JSON here..."
        style={{ width: '100%' }}
      />
      <br />
      <div style={{ marginTop: '10px' }}>
        <label>Indent Size:</label>
        <select value={indentSize} onChange={(e) => setIndentSize(parseInt(e.target.value))}>
          <option value={2}>2</option>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
        </select>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button style={{ marginRight: '10px', backgroundColor:"yellow" }} onClick={beautifyCode}>Beautify</button>
        <button style={{ marginRight: '10px',backgroundColor:"yellow" }} onClick={copyToClipboard}>Copy to Clipboard</button>
        <button style={{ marginRight: '10px',backgroundColor:"yellow" }} onClick={selectAll}>Select All</button>
        <button style={{backgroundColor:"yellow"}} onClick={clearTextarea}>Clear</button>
      </div>
    </div>
  );
}

export default Beautifier;

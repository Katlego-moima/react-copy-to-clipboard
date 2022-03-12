import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


function App() {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  return (
    <>
    <center>
    <input
    value = {value}
     onChange ={({ target: {value}}) => setValue(value)}
    />

    <CopyToClipboard text = {value}
        onCopy= {()=> setCopied(true)}>
      <button >Copy to clipboard</button>
      
      </CopyToClipboard>

      {copied ? <span style={{color: 'green'}}> Copied </span>: null}

    </center>

    </>
  );
}

export default App;

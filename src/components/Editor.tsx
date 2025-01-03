import {useState} from 'react'
const CodeEditor: React.FC = () => {
    const [code, setCode] = useState<any>(''); 
    const [output, setOutput] = useState<any>(''); 
  
    const runCode = async () => {
      const response = await fetch('/api/runCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
  
      const result = await response.json();
      setOutput(result.output);
    };
  
    return (
      <div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={runCode}>Run Code</button>
        <pre>{output}</pre>
      </div>
    );
  };
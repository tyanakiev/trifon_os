import React, { useState } from 'react';

const TerminalWindow = ({ windowDetails, onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    'Welcome to Trifon OS Terminal',
    'Type "help" for available commands'
  ]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let newOutput = [...output, `> ${cmd}`];

    switch(trimmedCmd) {
      case 'help':
        newOutput.push(
          'Available commands:',
          '- about: Show system information',
          '- resume: Display resume details',
          '- clear: Clear terminal screen'
        );
        break;
      case 'about':
        newOutput.push(
          'Trifon OS v1.0',
          'Custom Portfolio Operating System',
          'Created using React and Tailwind CSS'
        );
        break;
      case 'resume':
        newOutput.push(
          'Name: Trifon Trifonov',
          'Role: Software Engineer',
          'Skills: React, TypeScript, Node.js'
        );
        break;
      case 'clear':
        newOutput = ['Terminal cleared'];
        break;
      default:
        newOutput.push(`Command not found: ${cmd}`);
    }

    setOutput(newOutput);
    setInput('');
  };

  return (
    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-black text-green-500 rounded-lg shadow-xl p-4 font-mono">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Terminal</h2>
        <button 
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
        >
          Close
        </button>
      </div>
      
      <div className="overflow-y-auto h-4/5 mb-4">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      
      <div className="flex">
        <span className="mr-2">{'>'}</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleCommand(input);
            }
          }}
          className="bg-transparent text-green-500 outline-none flex-grow"
        />
      </div>
    </div>
  );
};

export default TerminalWindow;
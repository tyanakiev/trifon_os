import React, { useState } from 'react';

const TextEditorWindow = ({ windowDetails, onClose }) => {
  const [content, setContent] = useState('Welcome to Ubuntu Text Editor\n\nStart typing your document here...');
  const [fileName, setFileName] = useState('Untitled Document');

  const handleSave = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <div className="absolute top-1/4 left-1/4 w-1/2 h-2/3 bg-gray-900 text-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-gray-800 p-2 flex justify-between items-center">
        <input 
          type="text" 
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="bg-transparent text-white outline-none w-full"
        />
        <div>
          <button 
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded mr-2"
          >
            Save
          </button>
          <button 
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Close
          </button>
        </div>
      </div>
      <textarea 
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-full p-4 bg-gray-900 text-white outline-none resize-none"
      />
    </div>
  );
};

export default TextEditorWindow;
import React, { useState } from 'react';
import { Folder, File, ArrowLeft, ArrowRight } from 'lucide-react';

const FileExplorerWindow = ({ windowDetails, onClose }) => {
  const [currentPath, setCurrentPath] = useState('/home/user');
  const [files, setFiles] = useState([
    { name: 'Documents', type: 'folder' },
    { name: 'Pictures', type: 'folder' },
    { name: 'resume.pdf', type: 'file' },
    { name: 'notes.txt', type: 'file' }
  ]);

  const navigateFolder = (folderName) => {
    if (folderName === 'Documents' || folderName === 'Pictures') {
      setCurrentPath(`${currentPath}/${folderName}`);
      setFiles([
        { name: 'sample_doc.txt', type: 'file' },
        { name: 'project_plan.docx', type: 'file' }
      ]);
    }
  };

  return (
    <div className="absolute top-1/4 left-1/4 w-3/4 h-2/3 bg-gray-900 text-white rounded-lg shadow-xl">
      <div className="bg-gray-800 p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button className="hover:bg-gray-700 p-1 rounded">
            <ArrowLeft />
          </button>
          <button className="hover:bg-gray-700 p-1 rounded">
            <ArrowRight />
          </button>
          <span>{currentPath}</span>
        </div>
        <button 
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        >
          Close
        </button>
      </div>
      
      <div className="p-4 grid grid-cols-4 gap-4">
        {files.map((file) => (
          <div 
            key={file.name}
            className="flex flex-col items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
            onDoubleClick={() => file.type === 'folder' && navigateFolder(file.name)}
          >
            {file.type === 'folder' ? (
              <Folder className="w-16 h-16 text-blue-400" />
            ) : (
              <File className="w-16 h-16 text-gray-400" />
            )}
            <span className="text-sm mt-2">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorerWindow;
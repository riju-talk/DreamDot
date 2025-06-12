import React, { useState, useRef } from 'react';
import { Send, Paperclip, X, Image, File } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string, media?: File[]) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<{ file: File; preview: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() || files.length) {
      onSendMessage(content, files);
      setContent('');
      setFiles([]);
      setPreviews([]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles([...files, ...selectedFiles]);

    // Create previews for images
    const newPreviews = selectedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setPreviews([...previews, ...newPreviews]);
  };

  const removeFile = (fileToRemove: File) => {
    const newFiles = files.filter(file => file !== fileToRemove);
    setFiles(newFiles);

    const newPreviews = previews.filter(item => item.file !== fileToRemove);

    // Revoke the URL to avoid memory leaks
    const previewToRemove = previews.find(p => p.file === fileToRemove);
    if (previewToRemove) {
      URL.revokeObjectURL(previewToRemove.preview);
    }

    setPreviews(newPreviews);
  };

  const isImage = (file: File) => file.type.startsWith('image/');

  return (
    <form onSubmit={handleSubmit} className="border-t p-3 bg-white">
      {/* File Previews */}
      {previews.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {previews.map(({ file, preview }) => (
            <div key={preview} className="relative group bg-gray-100 p-1 rounded-md">
              {isImage(file) ? (
                <div className="relative w-20 h-20">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeFile(file)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div className="relative w-20 h-20 flex flex-col items-center justify-center bg-gray-200 rounded-md">
                  <File className="w-8 h-8 text-gray-500" />
                  <span className="text-xs truncate max-w-full px-1">
                    {file.name.length > 10 ? `${file.name.substring(0, 7)}...` : file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(file)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Input and File Upload */}
      <div className="flex items-center gap-3">
        <label className="cursor-pointer">
          <Paperclip className="w-6 h-6 text-gray-600" />
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 p-2 border rounded-lg outline-none"
          placeholder="Type a message..."
        />

        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
          <Send className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
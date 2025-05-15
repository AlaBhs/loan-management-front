// src/app/components/DocumentUploader.jsx
"use client";

import { useDropzone } from "react-dropzone";

export default function DocumentUploader({ onFilesSelected, className }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles) => onFilesSelected(acceptedFiles),
  });
  function UploadIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
      </svg>
    );
  }
  return (
    <div className={`space-y-2 ${className} m-2`}>
      <label className="block text-sm font-medium text-gray-700">
        Required Documents
      </label>
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
          ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-blue-400"
          }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-2">
          <UploadIcon className="h-10 w-10 text-gray-400" />
          <p className="text-gray-600">
            {isDragActive
              ? "Drop documents here"
              : "Drag & drop files here, or click to select"}
          </p>
          <p className="text-xs text-gray-500">
            Supported formats: PDF, PNG, JPG (max 10MB each)
          </p>
        </div>
      </div>
    </div>
  );
}

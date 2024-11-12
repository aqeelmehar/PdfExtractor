// components/PDFClassifier.js
import React, { useState } from 'react';
import { extractTextFromPDF } from '../utils/pdfParser';
import { classifyDocument } from '../utils/documentClassifier';
import './PDFclassifier.css';

function PDFClassifier() {
  const [classification, setClassification] = useState('');
  const [text, setText] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      try {
        // Extract text from PDF file
        const extractedText = await extractTextFromPDF(file);
        setText(extractedText);

        // Classify document based on extracted text
        const documentClassification = classifyDocument(extractedText);
        setClassification(documentClassification);
      } catch (error) {
        console.error('Error extracting text from PDF:', error);
      }
    } else {
      alert('Please upload a PDF file');
    }
  };

  return (
    <div className="pdf-container">
      <h2>Upload a PDF Document</h2>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
      
      <div className="pdf-card">
        <h3>Classification: {classification}</h3>
      </div>

      {/* Display extracted text inside a card */}
      <div className="pdf-card">
        <h4>Extracted Text:</h4>
        <p className="pdf-text">{text}</p>
      </div>
    </div>
  );
}

export default PDFClassifier;

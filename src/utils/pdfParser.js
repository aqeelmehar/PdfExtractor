
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';

// Set up the PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

// Function to extract text from a PDF file
export async function extractTextFromPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  let textContent = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const text = await page.getTextContent();
    const pageText = text.items.map((item) => item.str).join(' ');
    textContent += pageText + ' ';
  }
  return textContent;
}

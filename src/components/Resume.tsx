import { saveAs } from 'file-saver'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from 'react'
import resumeMain from '@/assets/resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  const resumeUrl = resumeMain // Use the imported PDF file

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  function downloadResume() {
    saveAs(resumeUrl, 'MD_Suweb_Reza_Resume.pdf')
  }

  return (
    <div className='p-6 bg-black  flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-4'>MD Suweb Reza - Resume</h1>

      {/* PDF viewer container */}
      <div className='w-full max-w-4xl bg-white shadow-lg p-4 rounded-lg'>
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className='flex justify-center'
        >
          <Page pageNumber={pageNumber} className='flex justify-center' />
        </Document>

        <div className='mt-4 flex justify-between'>
          <p className='text-sm'>
            Page {pageNumber} of {numPages}
          </p>
          <div className='space-x-4'>
            <button
              className='px-3 py-1 bg-gray-300 text-black rounded-lg'
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Previous
            </button>
            <button
              className='px-3 py-1 bg-gray-300 text-black rounded-lg'
              disabled={pageNumber >= numPages!}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Download button */}
      <button
        onClick={downloadResume}
        className='mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg'
      >
        Download PDF
      </button>
    </div>
  )
}

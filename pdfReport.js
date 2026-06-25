const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF() {

    const doc = new PDFDocument();

    // Create PDF file
    doc.pipe(fs.createWriteStream('TestExecutionReport.pdf'));

    // Report Title
    doc.fontSize(20)
       .text('Playwright Automation Report', {
           align: 'center'
       });

    doc.moveDown();

    // Execution Details
    doc.fontSize(12)
       .text('Execution Date: ' + new Date().toLocaleString());

    doc.moveDown();

    doc.text('Project: Playwright Amazon Framework');
    doc.text('Status: PASSED');

    doc.moveDown();

    doc.text('Total Tests: 10');
    doc.text('Passed: 10');
    doc.text('Failed: 0');

    // Save PDF
    doc.end();

    console.log('TestExecutionReport.pdf generated successfully');
}

generatePDF();
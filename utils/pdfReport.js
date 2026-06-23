const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF() {
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream('TestExecutionReport.pdf'));

    doc.fontSize(20)
       .text('Playwright Automation Report', {
           align: 'center'
       });

    doc.moveDown();

    doc.fontSize(12)
       .text(`Execution Date: ${new Date()}`);

    doc.moveDown();

    doc.text('Project: Playwright Amazon Framework');
    doc.text('Status: PASSED');

    doc.end();
}

generatePDF();
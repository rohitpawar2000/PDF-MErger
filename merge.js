const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const addPdf= async (p1,p2) => {

  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2);  //merge all pages. parameter is the path to file and filename.

 
  await merger.save('public/merged.pdf'); //save under given name and reset the internal document
  
  
}

module.exports={addPdf}
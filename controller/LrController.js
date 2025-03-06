/**
 * LR COPIES
 * Add
 * get
 * update
 * delete
 */

const path = require('path');
const puppeteer = require('puppeteer');
const companyModel = require("../models/company_model");
const LRModel = require("../models/Lr_model.js");

const { fetch_company_copy } = require("./utils");
const findUser = async (id) => {
  const userFound = await companyModel.find({ _id: id });
  if (userFound) return userFound;
  else return false;
};

// GET LR
const getLrs = async (req, res) => {
  const { companyId } = req.params;
  console.log(companyId);

  // const id = req.user;
  // const userFound = findUser(id);
  // if(userFound){
  const lrsFetched = await fetch_company_copy(companyId, "lr");
  console.log(lrsFetched);

  if (lrsFetched)
    return res
      .status(200)
      .json({ message: "LR fetched", content: lrsFetched });
  else return res.status(400).json({ message: "Couldn't fetch LR's" });
  // }
};

// ADD LR
const addLr = async (req, res) => {
  const { companyId } = req.params;
  console.log(companyId);
  
  let lrDetails = req.body;
  lrDetails = { ...lrDetails, under_company: companyId };


  try {
    const lr_Added = new LRModel(lrDetails);

    
    await lr_Added.save();
    
    return res.status(200).json({ message: "LR ADDED", content: lr_Added });
  } catch (error) {
    console.log(error);
    
    return res.status(400).json({ error });
  }
};

const updateLr = async (req, res) => {
  const { lrid } = req.params;

  
  const updates = req.body;

  try {
    const updatedRecord = await LRModel.findByIdAndUpdate(
      lrid,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    
    res.status(200).json({data: updatedRecord});
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Error updating record", error });
  }
};

const deleteLr = async (req, res) => {
  const { lrid, companyId } = req.params;
  try {
    const deletedLr = await LRModel.findByIdAndDelete(lrid);
    if (!deletedLr) return res.status(404).json({ message: "Lr Not found" });
    const lrsFetched = await fetch_company_copy(companyId, "lr");
    console.log(lrsFetched);
    return res.status(200).json({ message: "Lr Deleted", content:lrsFetched });
  } catch (error) {
    console.log(error);
  }
};

const Lrtemplate = require('../pdf_templates/Lrtemplate')

// const generateLr = async (req, res) => {
//   const { lrid } = req.params; 

//   try {
//     // Fetch LR data from DB
//     const content = await LRModel.findById(lrid);
//     console.log('Content:', content);
//     const outputPath = path.resolve(__dirname, '../../../frontend/src/assets/', `${new Date().getMonth()}_${new Date().getFullYear()}_${new Date().getTime()}_LR.pdf`);
   
//     pdf.create(Lrtemplate(content), {}).toFile(outputPath, (err) => {
//         if(err) {
//             return console.log('error');
//         }
//           fs.readFile(outputPath, (err,file ) => {
//             if(err) {
//               console.log(err);
//             }

//             res.setHeader('Content-Type', 'application/pdf')
//             res.setHeader('Content-Disposition', `attachment;filename=${new Date().getMonth()}_${new Date().getFullYear()}_${new Date().getTime()}_LR.pdf`)
//             res.send(file)
//           })
//       });

//   } catch (error) {
//     console.error('Error generating LR:', error);
//     res.status(500).send('Error generating LR');
//   }
// };

const PDFDocument = require('pdfkit');


const jsdom = require('jsdom')
const { JSDOM } = jsdom;
const fs = require('fs')

const generateLr = async (req, res) => {
try {
  const { lrid } = req.params; 
  const content = await LRModel.findById(lrid);
 
    // Generate HTML
    const html = Lrtemplate(content); 

    // Create a Puppeteer browser instance
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set content and render
    await page.setContent(html);
    await page.emulateMediaType('print'); 

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      landscape: true,
      printBackground: true,
    });

    // Close the browser
    await browser.close();

    // Save and download (replace with your desired path)
    const outputPath = path.resolve(__dirname, '../../../arc/akashrc-main/src/assets/', `${new Date().getMonth()}_${new Date().getFullYear()}_${new Date().getTime()}_LR.pdf`);
   
    const filePath = path.resolve(__dirname, '../../../arc/akashrc-main/src/assets/', `./tmp/lr_${lrid}.pdf`);
    fs.writeFileSync(filePath, pdfBuffer); 
    res.download(filePath); 

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating PDF' });
  }

}



const getLr =async (req, res) => {
  const {lrid} = req.body;
  try {
    const { lrid } = req.params; 
    const content = await LRModel.findById(lrid);
    return res.status(200).json({data: content})
  } catch (error) {
    console.log(error);
    
    res.status(400).json(error);
  }

}
module.exports = { addLr, getLrs, updateLr, deleteLr, generateLr, getLr};

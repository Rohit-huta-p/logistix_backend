/**
 * LR COPIES
 * add_billcopy
 * get_billcopy 
 * update_billcopy 
 * delete_billcopy
 */

const companyModel = require("../models/company_model");
const billCopy_model = require('../models/billCopy_model')
const { fetch_company_copy } = require("./utils");

// PDF RELATED
const BillCopyTemplate = require("../pdf_templates/BillCopyTemplate");

const puppeteer = require("puppeteer-core");
const path = require('path');
const fs = require('fs');
const billCopyModel = require("../models/billCopy_model");

// FIND USER
const findUser = async (id) =>{ 
    const userFound = await companyModel.find({_id: id});
    if(userFound) return userFound
    else return false;
}

// GET Copy
const get_billcopy = async (req, res) => {
    const {comapnyId} = req.params;
    console.log(comapnyId);
    
    // const id = req.user;
    // const userFound = findUser(id);
    // if(userFound){
        const billCopy_Fetched = await  fetch_company_copy(comapnyId, "billCopy");
        
        if(billCopy_Fetched) return res.status(200).json({message: "Bill Copy fetched", content: billCopy_Fetched});
        else return res.status(400).json({message: "Couldn't fetch Bill Copies"});
    // }
}


// ADD Bill Copy
const add_billcopy = async (req, res) => {
  console.log("ehllo");
  
    const {comapnyId} = req.params;
    let billcopyDetails = req.body;
    billcopyDetails = {...billcopyDetails, under_company: comapnyId}
    console.log(billcopyDetails);
    
    try{
        const billcopy_added = new billCopy_model(billcopyDetails);
        await billcopy_added.save();
        console.log("INDISED");
        return res.status(200).json({message: "Bill Copy ADDED",  success: true, content:billcopy_added })
    }catch(error){
      console.log(error);
      
        return res.status(400).json({error})
    }
} 


// UPDATE BILL COPY
const update_billcopy = async (req, res) => {
  
    const {billcopyId} = req.params;
    const updates = req.body;
    try {
        const updatedRecord = await billCopy_model.findByIdAndUpdate(
            billcopyId,
          { $set: updates },
          { new: true, runValidators: true } 
        );
    
        if (!updatedRecord) {
          return res.status(404).json({ message: "Bill Copy not found" });
        }
    
        return res.status(200).json({message: "Updated Bill copy",content: updatedRecord});
      } catch (error) {
        res.status(500).json({ message: "Error updating record", error });
      }
}

// DELETE BILL COPY
const delete_billcopy = async (req, res) => {
    const {billcopyId, comapnyId} = req.params;
    try {
        console.log(billcopyId);
        const deleted_billCopy = await billCopy_model.findByIdAndDelete(billcopyId) 
        if(!deleted_billCopy) return res.status(404).json({message: "Lr Not found"})
        const billCopy_Fetched =await fetch_company_copy(comapnyId, "billcopy");
        console.log(billCopy_Fetched);
        return res.status(200).json({message: "Bill Copy Deleted",content: billCopy_Fetched })
        

        
    } catch (error) {
        console.log(error);
        
    }
}


const generateBillCopy = async (req, res) => {
    try {
        const { billId } = req.params; 
        const content = await billCopy_model.findById(billId);
        // console.log(content.name);
        console.log("fdsfsdfsdfs", content);
        
        // Generate HTML
        const html = BillCopyTemplate(content); 
   
        const browser = await puppeteer.connect({
          browserWSEndpoint: "wss://chrome.browserless.io?token=YOUR_API_KEY"
        });
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

        const filePath = path.join(os.tmpdir(), `billCopy_${billId}.pdf`);
        fs.writeFileSync(filePath, pdfBuffer); 

        res.download(filePath, (err) => {
            if (err) console.error("Error sending file:", err);
            fs.unlinkSync(filePath); // Delete file after sending
        });
    
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error generating PDF' });
      }
    
}


const get_billcopy_specific = async (req, res) =>{ 

  try {
    const { billCopyId } = req.params; 
    const content = await billCopyModel.findById(billCopyId);
    return res.status(200).json({data: content})
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

module.exports = {add_billcopy, get_billcopy, update_billcopy, delete_billcopy, generateBillCopy, get_billcopy_specific}

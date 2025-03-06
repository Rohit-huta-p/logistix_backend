/**
 * Booking Register 
 * 
 * ADD - add_bookingRegister - DONE
 * GET - get_bookingRegister - DONE
 * UPDATE - update_bookingRegister - DONE
 * DELETE - delete_bookingRegister - DONE
 */

const companyModel = require("../models/company_model");
const bookingRegister_model = require('../models/bookingRegister_model')
const { fetch_company_copy } = require("./utils");

// FIND USER
const findUser = async (id) =>{ 
    const userFound = await companyModel.find({_id: id});
    if(userFound) return userFound
    else return false;
}



// GET 
const get_bookingRegister= async (req, res) => {
    const {comapnyId} = req.params;

    // const id = req.user;
    // const userFound = findUser(id);
    // if(userFound){
        const bookingRegister_fetched = await  fetch_company_copy(comapnyId, "bookingRegister");
        console.log(bookingRegister_fetched);
            
        if(bookingRegister_fetched) return res.status(200).json({message: "Bill Copy fetched", content:bookingRegister_fetched});
        else return res.status(400).json({message: "Couldn't fetch Bill Copies"});
    // }
}

// ADD 
const add_bookingRegister= async (req, res) => {
    const {comapnyId} = req.params;
    let bookingRegisterDetails = req.body;
    bookingRegisterDetails = {...bookingRegisterDetails, under_company: comapnyId}
    console.log();
    
    try{
        console.log("hello");
        
        let bookingRegister_added = new bookingRegister_model(bookingRegisterDetails);
        bookingRegisterDetails.registerData.forEach(data => {
            bookingRegister_added.registerData.push(data);
          });
        console.log(bookingRegister_added);
        await bookingRegister_added.save();
        console.log("hello");
        return res.status(200).json({message: "Bill Copy ADDED",content: bookingRegister_added })
    }catch(error){
        console.log(error);
        
        return res.status(400).json({error})
    }
} 

// UPDATE
const update_bookingRegister= async (req, res) => {
    const {bookingRegisterId} = req.params;
    const updates = req.body;
    try {
        const updatedRecord = await bookingRegister_model.findByIdAndUpdate(
            bookingRegisterId,
          { $set: updates },
          { new: true, runValidators: true } 
        );
    
        if (!updatedRecord) {
          return res.status(404).json({ message: "Bill Copy not found" });
        }
    
        return res.status(200).json({message: "Updated Bill copy",content:updatedRecord});
      } catch (error) {
        res.status(500).json({ message: "Error updating record", error });
      }
}

// DELETE BILL COPY
const delete_bookingRegister= async (req, res) => {
    const {bookingRegisterId, comapnyId} = req.params;
    try {
        console.log(bookingRegisterId);
        const deletedLr = await bookingRegister_model.findByIdAndDelete(bookingRegisterId) 
        if(!deletedLr) return res.status(404).json({message: "Lr Not found"})
        const bookingRegister_fetched =await fetch_company_copy(comapnyId, "bookingRegister");
        console.log(bookingRegister_fetched);
        return res.status(200).json({message: "Booking Register Deleted",content: bookingRegister_fetched })
        

        
    } catch (error) {
        console.log(error);
        
    }
}

const get_bookingregister_specific = async(req, res) => {
    const {bookingregisterId} = req.params;


    try {
      const content = await bookingRegister_model.findById(bookingregisterId);
      return res.status(200).json({data: content})
    } catch (error) {
      console.log(error);
      
    }
}
const bookingregesterTemplate = require('../pdf_templates/bookingRegisterTemplate');
const { default: puppeteer } = require("puppeteer");
const path = require("path");
const fs = require('fs');
const generatepdf = async (req, res) => {
  try {
    const { bookingRegisterId } = req.params; 
    const content = await bookingRegister_model.findById(bookingRegisterId);
    // console.log(content.name);
    
    // // Generate HTML
    const html = bookingregesterTemplate(content); 

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

    const filePath = path.resolve(__dirname, '../../../arc/akashrc-main/src/assets/', `./tmp/bookingRegister__${bookingRegisterId}.pdf`);
    fs.writeFileSync(filePath, pdfBuffer); 
    res.download(filePath); 

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating PDF' });
  }
}

module.exports = {get_bookingregister_specific,add_bookingRegister, get_bookingRegister, update_bookingRegister, delete_bookingRegister, generatepdf}

const letterPad_model = require("../models/letterPad_model");
const letterPadTemplate = require("../pdf_templates/letterPadTemplate");
const { fetch_company_copy } = require("./utils");

const getLetterPads = async (req, res) => {
  const { companyId } = req.params;
  // const id = req.user;
  // const userFound = findUser(id);
  // if(userFound){
  const letterPadFetched = await fetch_company_copy(companyId, "letterPad");
  if (letterPadFetched)
    return res
      .status(200)
      .json({
        success: true,
        message: "All Letter Pad fetched",
        content: letterPadFetched,
      });
  else return res.status(400).json({ message: "Couldn't fetch LR's" });
  // }
};

const addLetterPad = async (req, res) => {
  const { companyId } = req.params;
  let letterPadDetails = req.body;

  letterPadDetails = { ...letterPadDetails, under_company: companyId };
  console.log(letterPadDetails);

  try {
    const letterPad_added = new letterPad_model(letterPadDetails);
    await letterPad_added.save();
    return res
      .status(200)
      .json({
        success: true,
        message: "Letter Pad ADDED",
        content: letterPad_added,
      });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const updateLetterPad = async (req, res) => {
  const { letterPadId } = req.params;
  const updates = req.body;
  try {
    const updatedRecord = await letterPad_model.findByIdAndUpdate(
      letterPadId,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res
      .status(200)
      .json({ message: "Letter Pad Updated", content: updatedRecord });
  } catch (error) {
    res.status(500).json({ message: "Error updating record", error });
  }
};

const deleteletterPad = async (req, res) => {
  const { companyId, letterPadId } = req.params;
  try {
    console.log("DELETE CONTROLLER");

    const deleted_letterPad = await letterPad_model.findByIdAndDelete(
      letterPadId
    );
    if (!deleted_letterPad)
      return res.status(404).json({ message: "Letter Pad Not found" });
    const letterPad_fetched = await fetch_company_copy(companyId, "letterPad");

    return res
      .status(200)
      .json({ message: "Lr Deleted", content: letterPad_fetched });
  } catch (error) {
    console.log(error);
  }
};

const puppeteer  = require("puppeteer-core");
const os = require("os");
const path = require("path");
const fs = require("fs");
const generateLetterPad = async (req, res) => {
  try {
    const { lpid } = req.params;
    const content = await letterPad_model.findById(lpid);

    // // Generate HTML
    const html = letterPadTemplate(content);
    const browser = await puppeteer.connect({
      browserWSEndpoint:
        "wss://chrome.browserless.io?token=RvNKTn2Y0pCljd565a4e8a2f62eddcdd08b7c1b5b5",
    });
    const page = await browser.newPage();

    // Set content and render
    await page.setContent(html);
    await page.emulateMediaType("print");

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      landscape: true,
      printBackground: true,
    });

    // Close the browser
    await browser.close();

    // Save and download (replace with your desired path)

    const filePath = path.join(os.tmpdir(), `letterPad_${lpid}.pdf`);
    fs.writeFileSync(filePath, pdfBuffer);

    res.download(filePath, (err) => {
      if (err) console.error("Error sending file:", err);
      fs.unlinkSync(filePath); // Delete file after sending
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating PDF" });
  }
};

const getLetterPad = async (req, res) => {
  const { letterPadId } = req.params;

  try {
    const content = await letterPad_model.findById(letterPadId);
    return res.status(200).json({ data: content });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getLetterPads,
  getLetterPad,
  addLetterPad,
  updateLetterPad,
  deleteletterPad,
  generateLetterPad,
};

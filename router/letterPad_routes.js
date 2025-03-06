/**
 * Letter Pad ROUTES
 * ___________________________
 * FETCH - /:companyId  
 * ADD - /add/:companyId
 * UPDATE - /update/:letterPadId
 * DELTE - /delete/:companyId/:letterPadId
 * 
 * NOTE: 
 * 1. Use data.content to see the info of the docs
 * 2. Use data.message to see what has happened
 */

const {getLetterPads,getLetterPad, addLetterPad, updateLetterPad, deleteletterPad, generateLetterPad } = require('../controller/LetterPadController');


const router = require('express').Router();


// GET
router.get("/:companyId", getLetterPads)
router.get("/specific/:letterPadId", getLetterPad)

// ADD
router.post("/add/:companyId", addLetterPad)


// UPDATE 
router.patch("/update/:letterPadId", updateLetterPad)


// DELTE
router.delete("/delete/:companyId/:letterPadId", deleteletterPad)


router.get("/generateletterpad/:lpid", generateLetterPad)



module.exports = router
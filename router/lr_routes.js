/**
 * LR ROUTES
 * FETCH - /:companyId  
 * ADD - /add/:companyId
 * UPDATE - /update/:lrId
 * DELTE - /delete/:companyId/:lrId
 * 
 * * NOTE: 
 * 1. Use data.content to see the info of the docs
 * 2. Use data.message to see what has happened
 */

const authenticate = require('../authenticate');
const { addLr, getLrs, updateLr, deleteLr, generateLr, downloadLr, getLr } = require('../controller/LrController');

const router = require('express').Router();


router.get("/:companyId", getLrs)
router.get("/specific/:lrid", getLr)

router.post("/add/:companyId", addLr)
router.patch("/update/:lrid", updateLr)
router.delete("/delete/:comapnyId/:lrid", deleteLr)

router.get("/generatelr/:lrid", generateLr)



 
module.exports = router
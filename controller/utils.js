const LRModel = require("../models/lr_model");
const billCopy_model = require("../models/billCopy_model");
const bookingRegister_model = require("../models/bookingRegister_model");
const companyModel = require("../models/company_model");
const letterPad_model = require('../models/letterPad_model');
const models = {
    "lr": LRModel,
    "billCopy": billCopy_model,
    "bookingRegister": bookingRegister_model,
    "letterPad": letterPad_model
    
}

const fetch_company_copy = async (companyId, copy) => {
    console.log(copy);
    
    
    for (const [copyName, model] of Object.entries(models)) {
        console.log(copyName === copy);
        if (copyName === copy) {
            return await model.find({ under_company: companyId });
        }
    }
    if(copy === 'company')
        return await companyModel.find();
    
    return null;

};

module.exports = { fetch_company_copy };
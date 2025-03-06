const mongoose = require('mongoose')


const billCopy_Schema = mongoose.Schema({
    under_company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies',
        required: true,
      },
    name: String,
    billno: String,
    date: String,
    billDetails: [
        {
            cn_number: String, 
            invoice_number: String,
            date: Date,
            from: String,
            to: String,
            weight: String,
            charged: String, 
            rate: Number,
            freight: String,
            st: String,
            st_charges: Number,
            others: Number,
            amount: Number,
        }
    ],
    total: Number,
    gst_payable_by: {
        type: String,
        enum: ['consignor', 'consignee']
    }
})


const billCopyModel = mongoose.model("billCopies", billCopy_Schema);

module.exports = billCopyModel;


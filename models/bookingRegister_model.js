const mongoose = require('mongoose')


const bookingRegisterSchema =new  mongoose.Schema({
    under_company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies',
        required: true,
    },
    bookingRegister_number: String, 
   registerData: [
    {
        cn_number: String,
        date: {
            type: Date,
            default: new Date()
        },
        number_of_packages: String,
        consignor: String,
        consignee: String,
        destination: String, 
        weight: String,
        bill_amount: String, 
        to_pay_tbb: String, 
        bill_number: String, 
        mr_number: String, 
        broker_name: String,
        challan_number: String, 
        lorry_number: String, 
        hire: String, 
        advance: {
            type: String,
            default: 0
        },
        balance: String, 
        remark: String,
    }
   ]
}, {timestamps: true}
)


const BookingRegisterModel = mongoose.model("bookingRegister", bookingRegisterSchema)

module.exports  = BookingRegisterModel;
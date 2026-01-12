const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    position: {
         type: String, 
         required: true
         },
  salary: { 
    type: Number,
     required: true
     }
})
const product = mongoose.model("product",productschema)
module.exports=product
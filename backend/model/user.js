const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
email: {
         type: String, 
         required: true
         },
  password: { 
    type: Number,
     required: true
     }
})
const user = mongoose.model("user",productschema)
module.exports=user
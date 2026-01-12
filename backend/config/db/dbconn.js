const mongoose = require("mongoose")

const dbconn =async ()=>{
    try {
       await mongoose.connect(process.env.DATABASE_URL)
       console.log("Database connection succsefully") ;
    
    } catch (error) {
        
        console.log(error)
    }
}
module.exports =dbconn

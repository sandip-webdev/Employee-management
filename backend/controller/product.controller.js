const product = require("../model/product")


const AddData=async(req,res)=>{
    try {
        if(req.body){
            const{name,position,salary}=req.body
            if(name && position && salary){
                const Myproduct = new product ({name,position,salary})
                await Myproduct.save()
                return res.status(200).json({msg:"Data Added sussesfully"})
            }
        }
        
    } catch (error) {

       return res.status(500).json({msg:"Data Added failed"})  
    }
}
const GetAllData=async(req,res)=>{
    try {
        if(req){
            const Myproduct = await product.find();
            
                return res.status(200).json({msg:"Data Fetched sussesfully",data:Myproduct})
            }
        }
        
     catch (error) {

       return res.status(500).json({msg:"Data Fetched failed"})  
    }
}
const UpdateData=async(req,res)=>{
    try {
        if(req.body && req.params.id){
            const id=req.params.id
                const Myproduct = await product.findByIdAndUpdate(id,req.body,{new:true})
                
                return res.status(200).json({msg:"Data update sussesfully"})
            }
        }
        
     catch (error) {

       return res.status(500).json({msg:"Data Added failed"})  
    }
}
const DelateData=async(req,res)=>{
     try {
        if(req.params.id){
            const id=req.params.id
                const Myproduct = await product.findByIdAndDelete(id)
                
                return res.status(200).json({msg:"Data delete sussesfully"})
            }
        }
        
     catch (error) {

       return res.status(500).json({msg:"Data delete   failed"})  
    }
    
}
const GetByidData=async(req,res)=>{

     try {
        if(req.params.id){
            const id= req.params.id
            
                const Myproduct = await product.findById(id)
                
                return res.status(200).json({msg:"Data fetched sussesfully"})
            }
        }
        
     catch (error) {

       return res.status(500).json({msg:"Data fetched failed"})  
    }
};
module.exports={
     
    AddData, 
    GetAllData,
    GetByidData,
    UpdateData,
    DelateData
}
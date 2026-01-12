const express = require("express")
const productcontroller = require("../controller/product.controller")
const router = express.Router()
router.post("/add-data",productcontroller.AddData)
router.get("/get-data",productcontroller.GetAllData)
router.put("/update-data/:id",productcontroller.UpdateData)
router.delete("/delete-data/:id",productcontroller.DelateData)
router.get("/getbyid-data/:id",productcontroller.GetByidData)


module.exports=router

 
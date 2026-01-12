import React, { useEffect, useState } from 'react';
import { AddData,GetDataByID,UpdateData } from '../../Api/api';
import { useNavigate, useParams } from 'react-router-dom';
import { set } from 'mongoose';

const Myupdate = () => {
  const {id}=useParams();
  
  const navigate= useNavigate()
    const [name,setname]=useState("");
     const [position,setposition]=useState("");
      const [salary,setsalary]=useState("");
const GetDataId=async()=>{
  try {
    const res= await GetDataByID(id)
    setname(res.data.name)
    setposition(res.data.position)
    setsalary(res.data.salary)
  } catch (error) {
    console.log(error);
    
  }
}

      const handlesubmit =async(e)=>{
        e.preventDefault();
        const res =await UpdateData (id,{name,position,salary});
        if(res.status===200){
          navigate("/admin")
        } 
      };
      useEffect(()=>{
        GetDataId();
      } ,[name,position,salary]);
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend" >Enter Detailes</legend>
<form onSubmit={handlesubmit}>
  <label className="label">Name</label>
  <input type="name" className="input" placeholder="enter your name" onChange={(e)=>setname(e.target.value)}defaultValue={predata.name} />

  <label className="label">position</label>
  <input type="position" className="input" placeholder="Position" onChange={(e)=>setposition(e.target.value)} defaultValue={predata.position}/>
  <label className="label">salary</label>
  <input type="number" className="input" placeholder="salary" onChange={(e)=>setsalary(e.target.value)} defaultValue={predata.salary}/>


  <button type='submit' className="btn btn-neutral mt-4">update</button>
  </form>
</fieldset>
  )
}

export default Myupdate;
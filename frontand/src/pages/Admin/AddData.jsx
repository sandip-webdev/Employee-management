import React, { useState } from 'react';
import { AddData } from '../../Api/api';
import { useNavigate } from 'react-router-dom';

const MyAddData = () => {
  const navigate= useNavigate()
    const [name,setname]=useState("");
     const [position,setposition]=useState("");
      const [salary,setsalary]=useState("");
      const handlesubmit =async(e)=>{
        e.preventDefault();
        const res =await AddData ({name,position,salary});
        if(res.status===200){
          navigate("/admin")
        }
        
        
      };
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend" >Enter Detailes</legend>
<form onSubmit={handlesubmit}>
  <label className="label">Name</label>
  <input type="name" className="input" placeholder="enter your name" onChange={(e)=>setname(e.target.value)} />

  <label className="label">position</label>
  <input type="position" className="input" placeholder="Position" onChange={(e)=>setposition(e.target.value)}/>
  <label className="label">salary</label>
  <input type="number" className="input" placeholder="salary" onChange={(e)=>setsalary(e.target.value)}/>


  <button type='submit' className="btn btn-neutral mt-4">Add</button>
  </form>
</fieldset>
  )
}

export default MyAddData;
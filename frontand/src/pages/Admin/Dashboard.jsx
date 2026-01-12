import React, { use, useEffect, useState, } from 'react'
import { GetData } from '../../Api/api'
import { DeleteDataById } from '../../Api/api'
import { Link, useNavigate } from 'react-router-dom'







const Dashboard = () => {
  
  const navigate=useNavigate()

  const [data, setData] = useState([])
  

  const GetAllData = async () => {
    const res = await GetData()
    console.log(res)
    if (res.status === 200) {
      setData(res.data.data)
    }
  };
  const handleDelete = async (id) => {
    const res = await DeleteDataById(id)
    console.log(id);
  }
  
  useEffect(() => {
    GetAllData()
  },[] );
  return (
    <div >
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>position</th>
            <th>salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.length > 0 && data.map((item, index) => (
            <tr>
              <th>1</th>
              <td>{item.name}</td>
              <td>{item.position}</td>
              <td>{item.salary}</td>
              <td>
                <div className="dropdown">
                  <button onClick={() => setID(item._id)} tabIndex={0} role="button" className="btn m-1">Click</button>
                  <ul tabIndex="5" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

                    

                    <li><button onclick={()=>navigate(`/edit-data/${item._id}`)}>Edit</button></li>
                    <li><button onclick={()=>handleDelete(item._id)} style={{ color: "red" }}>Delete</button></li>
                  </ul>
                </div>

              </td>

            </tr>
          ))}

        </tbody>
      </table>
      <Link to={"/add-data"}><button className="btn btn-success">Add Data</button></Link>

    </div>
  )
}

export default Dashboard
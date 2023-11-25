import React, { useState, useEffect} from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';


const Home = () => {

  const [datas, setDatas] = useState([])

  useEffect(() => {

    setDatas([
      { id: 1, name: "Saif", category: "Nothing", quantity: 5 },
      { id: 2, name: "Akif", category: "Nothing", quantity: 10 }
    ])

  },[])

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mt-2">
        <h3>CRUD Application</h3>
        <Link to="/add"><button className="btn btn-danger">Add Data</button></Link>
      </div>
      <table class="table table-bordered table-dark table-striped  mt-2">
        <thead>
          <tr>
            <th scope="col">Sr. no</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => {
            return(
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.category}</td>
                <td>
                  <Link to={`edit/${data.id}`}><button className="custom-btn edit mx-2"><MdEdit /></button></Link>
                  <button className="custom-btn delete mx-2"><RiDeleteBin5Fill /></button>
                </td>
              </tr>
            )
          })}
        </tbody>
    </table>
  </div>
  )
}

export default Home

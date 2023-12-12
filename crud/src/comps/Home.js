import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import Modal from './Modal.js';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

// localStorage.clear()

const Home = () => {

  const [datas, setDatas] = useState([])
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    let getData = localStorage.getItem('data')
    if(getData){
      console.log(getData);
    } else {
      let addData = '';
    }
    setShowModal(true);
  };

  return (
    <div className="container">

    <Modal showModal={showModal} setShowModal={setShowModal} setDatas={setDatas}/>

      <div className="heading mx-2 my-2 d-flex justify-content-between align-items-center">
        <h3>CRUD Lists</h3>
        <button type="button" className="custom-btn-add" onClick={handleShowModal}>
          <FaPlus/>
        </button>
      </div>



      <div className="d-flex flex-wrap">

{
  (datas[0]) ? 
     
      datas.map((ele) => {
      return(

        <div className="card mx-2 my-2" key={ele.id} style={{width: "16em"}}>
          <div className="card-body">
            <h5 className="card-title">{ele.title}</h5>
            <p className="card-text">{ele.desc}</p>
            <button className="custom-edit me-2"><MdEdit /></button>
            <button className="custom-delete"><MdDelete /></button>
          </div>
        </div> 
        )
     })
    
      
    : <div>Empty</div>
}

        

      </div>
    </div>
  )
}

export default Home

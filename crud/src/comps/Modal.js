import React , { useState  } from 'react';

const emptyObj = {
    id: null,
    title: "",
    desc: "",
}

const Modal = ({showModal, setShowModal, setDatas}) => {

    const [dataToSend, setDataToSend] = useState(emptyObj)

    const handleCloseModal = () => {
      setShowModal(false);
    };

    const handleChange = (e) => {
        setDataToSend({
            ...dataToSend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        let chckLocal = localStorage.getItem('data')
        if(chckLocal){
            if(dataToSend.title === ""){
                alert("Title is Required")
            } else if(dataToSend.desc === ""){
                alert("Description is Required")
            } else {
                let localData = JSON.parse(chckLocal)
                let newObj = {...dataToSend, id: localData.at(-1).id + 1}
                localData.push(newObj)

                let addDataToLocal = JSON.stringify(localData);
                localStorage.setItem('data', addDataToLocal);
                setDatas(localData)
            }
        } else {

            if(dataToSend.title === ""){
                alert("Title is Required")
            } else if(dataToSend.desc === ""){
                alert("Description is Required")
            } else {
                let addDataToLocal = JSON.stringify([{...dataToSend, id:1}]);
                localStorage.setItem('data', addDataToLocal);
                setDatas([{...dataToSend, id:1}])
            }

        }
    }
  
    return (
      <div>

  
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!showModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{borderBottom: "none"}}>
                <h1 className="modal-title fs-5" id="exampleModalLabel">Add List</h1>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                    <div className="col-12">
                        <label>Title :</label>
                        <input type="text" name="title" onChange={handleChange} className="form-control" placeholder="Enter Title" value={dataToSend.title} />
                    </div>
                    <div className="col-12 mt-2">
                        <label>Description :</label>
                        <textarea name="desc" className="form-control" onChange={handleChange} rows="5" placeholder="Enter Description" >{dataToSend.desc}</textarea>
                    </div>
                </div>
              </div>
              <div className="modal-footer" style={{borderTop: "none"}}>
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
      </div>
      
    );
  };
  

export default Modal
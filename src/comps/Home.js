import React, {useState} from 'react';


const Home = () => {

  const [datas, setDatas] = useState([{
    code: 1,
    name: "Saif",
    category: "Nothing",
    quantity: 5
  },{
    code: 2,
    name: "Akif",
    category: "Nothing",
    quantity: 10
  }])


  return (
        <div className="container mt-2">

        </div>
  )
}

export default Home

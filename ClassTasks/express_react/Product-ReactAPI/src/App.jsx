import {useState, useEffect} from 'react'

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState(" ");
  const [price, setPrice] = useState(" ");
  // get products
  const getProducts = async () => {
    const response = await fetch("http://localhost:5000/api/products");
    const data = await response.json();
    setProducts(data);
  };
  //add product
  const addProduct=async(e)=>{
    e.preventDefault();
    const product={
      name : name,
      price : price,
      category : "category"
    };
    await fetch("http://localhost:500/api/products",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:json.stringly(product)
    })
  }
  return (
    <div>
      
    </div>
  )
}

export default App

// import React, {useState} from 'react';
// function Example() {
//   //Declare new state variable called "count"
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// export default Example;
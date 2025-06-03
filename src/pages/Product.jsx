import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const fetchProd = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    } catch(err) {
      console.log(err, 'products not found')
    }
  };
  
  useEffect(() => {
    fetchProd();
  },[])

  return (
    <div>
      <h1>Prodcuts</h1>

<div className="flex justify-between gap-4">
  <div className='flex justify-around flex-wrap'>
     {products.map((prod) => (
    <div key={prod.id} className="border bg-amber-100 p-4 rounded max-w-80 ">
      <h2 className="text-2xl font-bold mb-2">{prod.title}</h2>
      <img src={prod.thumbnail} alt={prod.title} className="w-full object-cover" />
      <div className='flex justify-around text-2xl'>
        <p className="">💲{prod.price}</p>
      <p className="">Rating: ⭐ {prod.rating}</p>
      </div>
      <button onClick={() => navigate(`/product/${prod.id}`)}>click for details</button>

    </div>
  ))}
  </div>
 
</div>

      
    </div>
  )
}

export default Product
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState('');

  const fetchDetails = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.log(err, 'error in getting details');
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);


  return (
    <div>
      {/* <h1>{product.title}</h1> */}
      <p>{product.description}</p>
      {/* You can add more product details here */}
    </div>
  );
};

export default ProductDetails;

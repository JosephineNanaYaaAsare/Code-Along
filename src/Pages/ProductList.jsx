import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import useAxios from "../hooks/useAxios";

function ProductList() {
  const { data, isLoading, error } = useAxios(
    "https://api.escuelajs.co/api/v1/products"
  );

  /*useEffect(() => {
        const getProduct = async () => {
            const results = await axios.get("https://api.escuelajs.co/api/v1/products")
            
            setProducts(results.data)
        }
         getProduct()
  },[]);*/

  if (isLoading) return <Spinner />;

  if (error) return <p>{error}</p>;

  console.log(data);

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
      <Spinner />
      {data.map((data) => (
        <Product product={data} />
      ))}
    </div>
  );
}

export default ProductList;

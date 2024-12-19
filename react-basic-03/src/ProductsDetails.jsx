import React from 'react'

const ProductsDetails = () => {
    const product = {
        name : "Computer",
        price : 13334,
        availablity : true,
    }
  return (
    <div><h1>Product Details</h1>
    <h2>{product.name}</h2>
    <h2>{product.price}</h2>
    <h2>{product.availablity ? "Available" : "Not available"}</h2>
    </div>
  )
}

export default ProductsDetails;
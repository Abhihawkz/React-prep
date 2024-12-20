import React from "react";

const ProductInfo = () => {
  const products = [
    {
      id: 1,
      name: "Mobile",
      Price: "$4959",
    },
    {
      id: 2,
      name: "Tablet",
      Price: "$847459",
    },
    {
      id: 1,
      name: "Computer",
      Price: "$4959fajf",
    },
  ];
  return <div>
    {products.map(({id,name,Price}) =>(
        <div key={id}>
            <h1>{name}</h1>
            <h1>{Price}</h1>
        </div>
    ))}
  </div>;
};

export default ProductInfo;

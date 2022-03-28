import React from "react";
import { CardGroup } from "react-bootstrap";
import Card2 from "../Card2/Card2";

const CradGroup2 = () => {
  const products = [
    { name: "Laptop", id: 1, price: 12500 },
    { name: "Mobile", id: 2, price: 12500 },
    { name: "Tablet", id: 3, price: 12500 },
  ];
  return (
    <div>
      <CardGroup>
        {products.map((product) => (
          <Card2 product={product}></Card2>
        ))}
      </CardGroup>
    </div>
  );
};

export default CradGroup2;

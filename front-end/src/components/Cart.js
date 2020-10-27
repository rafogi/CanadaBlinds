import React from "react";
import CartItem from "./CartItem"

export default function Cart(props) {

  const price = () => {
    let total = 0;
    for (let price of props.cart) {
      total += price.price;
    }
    return total;
  }

  let products = [];
  for (let product of props.products) {
    for (let cartItem of props.cart) {
      if (product.id === cartItem.product_id) {
        products.push(product)
      }
    }
  }

  let match = products.map((product) => {
    return (
      <CartItem 
        name={product.name}
        description={product.description}
        image={product.thumbnail}
      />
    )
  })

  return (
    <div>
      {match}
      {price()}
    </div>
  );
}
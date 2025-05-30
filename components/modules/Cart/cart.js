import Link from "next/link";
import React from "react";

function Cart({ price, image, description, id, name }) {
  return (
    <div key={id} className="row align-items-center mb-5">
      <div className="col-4 col-sm-3">
        <img className="w-100 rounded-circle mb-3 mb-sm-0" src={image} alt="" />

        <h5 className="menu-price">${price}</h5>
      </div>
      <div className="col-8 col-sm-9">
        <Link href={`/product/${id}`}>
          <h4>{name}</h4>
        </Link>
        <p className="m-0">{description}</p>
      </div>
    </div>
  );
}

export default Cart;

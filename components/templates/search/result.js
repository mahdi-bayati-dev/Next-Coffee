import React from 'react'
import Cart from '@/components/modules/Cart/cart'

function Result({ searchResult }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {searchResult
              .filter((item) => item.type === "hot")
              .slice(0, 3)
              .map((item) => (
                <Cart key={item.id} {...item} />
              ))}
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {searchResult
              .filter((item) => item.type === "cold")
              .slice(0, 3)
              .map((item) => (
                <Cart key={item.id} {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;

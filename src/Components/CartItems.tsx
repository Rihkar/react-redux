import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const CartItems = () => {
  const wantedItem = useSelector((state:RootState) => state.product.value);

  return (
    <div className="product-container">
      {wantedItem && wantedItem.map((item:any) => (
        <div className="product-box">
          <div>{item.product}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;

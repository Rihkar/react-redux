import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  decrementByOne, incrementByOne,
} from '../CounterSlice';
import { add, remove } from '../ProductsSlice';
import { RootState, AppDispatch } from '../store';
import ProductList from '../ProductList';

const ProductsPage = () => {
  const count = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [visible, setVisible] = useState(4);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <div>

      <div className="product-container">
        {ProductList.slice(0, visible).map((el) => (
          <div key={Math.random()} className="product-box">
            <div>
              {el.product}
            </div>
            <div>
              {el.price}
            </div>
            <button
              onClick={() => dispatch(decrementByOne(1))}
            >
              -
            </button>
            <span style={{ fontSize: '25px' }}>{count}</span>
            <button
              onClick={() => dispatch(incrementByOne(1))}
            >
              +
            </button>
            <button onClick={() => {
              dispatch(add(el));
            }}
            >
              add to cart
            </button>

          </div>
        ))}

      </div>
      <button onClick={showMoreItems} style={{ width: '100%' }}>load more</button>

    </div>
  );
};

export default ProductsPage;

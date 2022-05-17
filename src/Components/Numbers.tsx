import { useSelector, useDispatch } from 'react-redux';
import {
  decrementByOne, incrementByOne, incrementByFive, divideByTwo, mulitplyBySeven, backToZero,
} from '../CounterSlice';
import { RootState, AppDispatch } from '../store';

const Numbers = () => {
  const count = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>

      <div className="container">
        <button
          onClick={() => dispatch(incrementByOne(1))}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrementByOne(1))}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByFive(5))}
        >
          incrementByAmount
        </button>
        <button
          onClick={() => dispatch(divideByTwo(2))}
        >
          divideByTwo
        </button>
        <button
          onClick={() => dispatch(mulitplyBySeven(7))}
        >
          mulitplyBySeven
        </button>
        <button
          onClick={() => dispatch(backToZero(0))}
        >
          backToZero
        </button>
        <br />
        <span style={{ fontSize: '50px' }}>{count}</span>

      </div>

    </div>
  );
};

export default Numbers;

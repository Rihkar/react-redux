import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { RootState, AppDispatch } from '../store';
import { create, Delete } from '../toDosReducer';

const Input = () => {
  const toDos = useSelector((state:RootState) => state.toDos.value);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<null | HTMLInputElement>(null);
  // @ts-ignore
  const focus = () => inputRef.current.focus();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            if (inputValue) {
              dispatch(create(inputValue));
            }
            focus();
            setInputValue('');
          }}
        >
          add
        </button>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <ul>
          {toDos.map((toDo:string, index:number) => (
            <li key={Math.round(index)}>
              {toDo}
              <button onClick={() => dispatch(Delete(index))}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Input;

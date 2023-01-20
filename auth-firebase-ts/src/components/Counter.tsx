import { useEffect } from "react";
import { increment, decrement } from "../app/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import { getUsers } from '../app/features/counter/thunks';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

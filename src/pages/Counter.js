import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import Button from "../components/Button/Button";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-flex align-items-center gap-4">
        <Button
          aria-label="Increment value"
          variant="secondary"
          size="sm"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          variant="secondary"
          size="sm"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </>
  );
};

export default Counter;

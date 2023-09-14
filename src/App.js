import { useDispatch, useSelector } from "react-redux";
import { interest, charges, withdraw, deposit } from "./redux/counter";
import "./App.css";
import React, { useState } from "react";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(0);

  const depositAmount = (e) => {
    e.preventDefault();
    dispatch(deposit(Number(userInput)));
    setUserInput(0);
  };

  return (
    <Provider store={store}>
    <div className="App">
      <h1>this is the current amount {count}</h1>
      <div>
        <form className="Form" onClick={depositAmount}>
          <label>
            <input
              type="number"
              name="value"
              placeholder="enter an amount"
              onChange={(e) => setUserInput(e.target.value)}
            />
          </label>
          <button type="submit">deposit</button>
        </form>
      </div>
      <div>
        <button onClick={() => dispatch(interest())}>Add interest</button>
        <button onClick={() => dispatch(charges())}>Charges</button>
        <button onClick={() => dispatch(withdraw())}>Withdraw</button>
      </div>
    </div>
    </Provider>

  );
}

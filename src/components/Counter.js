import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="container mt-5" data-bs-theme="dark">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">Counter App</h1>
          <div className="my-5">
            <h2>{count}</h2>
            <button
              className="btn btn-success mx-3"
              onClick={() => setCount(count + step)}
            >
              Increment
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={() => setCount(count - step)}
              disabled={count <= 0}
            >
              Decrement
            </button>
            <button
              className="btn btn-secondary mx-3"
              onClick={() => {
                setCount(0);
                setStep(1);
                const input = document.getElementsByTagName("input")[0];
                input.value = 1;
              }}
              disabled={count === 0}
            >
              Reset
            </button>
            <div class="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Counter Step"
                aria-label="Counter Step"
                aria-describedby="button-addon2"
              ></input>
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => {
                  const input = document.getElementsByTagName("input")[0];
                  if (input.value === "") {
                    setStep(1);
                  } else {
                    setStep(Number(input.value));
                  }
                }}
              >
                Set Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;

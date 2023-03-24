import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    operation: null,
    next: null,
  });

  const newOperation = (event) => {
    const targetButton = event.target.innerText;
    const getResult = calculate(state, targetButton);
    setState(getResult);
  };

  const { total, operation, next } = state;
  return (
    <>
      <div className="calculator">
        <div className="display-section">
          <p className="display-value">
            {`${total || ''} ${operation || ''} ${next || ''}`}
            {' '}
          </p>
        </div>

        <button type="button" onClick={newOperation}>
          AC
        </button>
        <button type="button" onClick={newOperation}>
          +/-
        </button>
        <button type="button" onClick={newOperation}>
          %
        </button>
        <button type="button" onClick={newOperation} className="operator">
          ÷
        </button>

        <button type="button" onClick={newOperation}>
          7
        </button>
        <button type="button" onClick={newOperation}>
          8
        </button>
        <button type="button" onClick={newOperation}>
          9
        </button>
        <button type="button" onClick={newOperation} className="operator">
          x
        </button>

        <button type="button" onClick={newOperation}>
          4
        </button>
        <button type="button" onClick={newOperation}>
          5
        </button>
        <button type="button" onClick={newOperation}>
          6
        </button>
        <button type="button" onClick={newOperation} className="operator">
          -
        </button>

        <button type="button" onClick={newOperation}>
          1
        </button>
        <button type="button" onClick={newOperation}>
          2
        </button>
        <button type="button" onClick={newOperation}>
          3
        </button>
        <button type="button" onClick={newOperation} className="operator">
          +
        </button>

        <button type="button" onClick={newOperation} className="zero">
          0
        </button>
        <button type="button" onClick={newOperation}>
          .
        </button>
        <button type="button" onClick={newOperation} className="operator">
          =
        </button>
      </div>
    </>
  );
};

export default Calculator;

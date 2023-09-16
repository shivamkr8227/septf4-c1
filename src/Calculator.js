import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event, inputType) => {
    const value = event.target.value;
    if (inputType === "num1") {
      setNum1(value);
    } else if (inputType === "num2") {
      setNum2(value);
    }
  };

  const validateInputs = () => {
    setErrorMessage("");

    if (!num1) {
      setErrorMessage("Num1 cannot be empty.");
      return false;
    } else if (!num2) {
      setErrorMessage("Num2 cannot be empty.");
      return false;
    }

    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      setErrorMessage("Please enter valid numbers.");
      return false;
    }

    return true;
  };

  const performOperation = (signValue) => {
    if (validateInputs()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      let resultValue = 0;

      switch (signValue) {
        case "+":
          resultValue = number1 + number2;
          break;
        case "-":
          resultValue = number1 - number2;
          break;
        case "*":
          resultValue = number1 * number2;
          break;
        case "/":
          resultValue = number1 / number2;
          break;
        default:
          break;
      }

      setResult(`Result: ${resultValue}`);
    }
  };

  return (
    <div className="main-div">
      <h3>React Calculator</h3>
      <div className="input">
        <input
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => handleInputChange(e, "num1")}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => handleInputChange(e, "num2")}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="button">
        <button
          onClick={() => {
            performOperation("+");
          }}
        >
          +
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            performOperation("-");
          }}
        >
          -
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            performOperation("*");
          }}
        >
          *
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            performOperation("/");
          }}
        >
          /
        </button>
      </div>
      {errorMessage && (
        <div className="error">
          <div style={{ color: "red" }}>Error!</div> {errorMessage}
        </div>
      )}
      {result && (
        <div className="success">
          <div className="success-flex" style={{ color: "green" }}>
            Success!
          </div>{" "}
          {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;

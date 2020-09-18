import React, { useState } from "react";
import words from "lodash.words";
import Button from "../button";
import PropTypes from "prop-types";
import safeEval from "safe-eval";
import "./Buttons.css";

const Buttons = ({ setResult }) => {
  const [stack, setStack] = useState("");
  const mathOperations = ['+', '-', '*', '/'];

  const setStackAndResult = (value) => {
    const items = words(value, /[^-^+^*^/]+/g);
    const result = items.length ? items[items.length - 1] : '0';
    setStack(value);
    setResult(result);
  };

  const handlerMathOperationOnClick = (operation) => {
    let value = `${stack}${operation}`;
    if (stack.length) {
      const lastChar = stack.slice(-1);      
      if(mathOperations.includes(lastChar)){
        const newStack = stack.slice(0, -1);
        value = `${newStack}${operation}`;
      }      
    }    
    setStackAndResult(value);
  };

  const handleEqualOnClick = () => {
    const result = String(safeEval(stack));
    setStackAndResult(result);
  };

  const handlerNumberOnClick = (number) => {
    const value = `${stack}${number}`;
    setStackAndResult(value);
  };

  const handlerCommaOnClick = () => {
    if (!stack.includes(",")) {
      const value = `${stack},`;
      setStackAndResult(value);
    }
  };

  const handlerClearOnClick = () => {
    setStackAndResult("");
  };

  const handlerDeleteOnClick = () => {
    if (stack.length) {
      const value = stack.slice(0, -1);
      setStackAndResult(value);
    }
  };

  const buttons = [
    { text: "C", type: "primary", onClick: handlerClearOnClick },
    { text: "DEL", type: "primary", onClick: handlerDeleteOnClick },
    {
      text: "XD",
      type: "primary",
      onClick: () => {
        alert("Soy un botón que no hace nada XD");
      },
    },
    { text: "/", type: "secondary", onClick: handlerMathOperationOnClick },
    { text: "7", type: "primary", onClick: handlerNumberOnClick },
    { text: "8", type: "primary", onClick: handlerNumberOnClick },
    { text: "9", type: "primary", onClick: handlerNumberOnClick },
    { text: "*", type: "secondary", onClick: handlerMathOperationOnClick },
    { text: "4", type: "primary", onClick: handlerNumberOnClick },
    { text: "5", type: "primary", onClick: handlerNumberOnClick },
    { text: "6", type: "primary", onClick: handlerNumberOnClick },
    { text: "-", type: "secondary", onClick: handlerMathOperationOnClick },
    { text: "1", type: "primary", onClick: handlerNumberOnClick },
    { text: "2", type: "primary", onClick: handlerNumberOnClick },
    { text: "3", type: "primary", onClick: handlerNumberOnClick },
    { text: "+", type: "secondary", onClick: handlerMathOperationOnClick },
    { text: "0", type: "primary", onClick: handlerNumberOnClick },
    { text: ".", type: "primary", onClick: handlerCommaOnClick },
    { text: "=", type: "equal", onClick: handleEqualOnClick },
  ];

  return (
    <div className="buttons-wrapper">
      {buttons.map((button) => (
        <Button
          key={button.text}
          text={button.text}
          type={button.type}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
};

Buttons.propTypes = {
  setResult: PropTypes.func.isRequired,
};

export default Buttons;

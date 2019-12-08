import React from "react";
import { ButtonContainer } from "./ButtonStyle";

const Button = props => {
  return (
    <ButtonContainer
      className={props.className}
      onClick={props.action}
      value={props.value}
    >
      {props.value}
    </ButtonContainer>
  );
};

export default Button;

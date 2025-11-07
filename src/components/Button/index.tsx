"use client";
import React from "react";
import { StyledButton } from "@/components/Button/styles";

type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      $disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

import styled from "styled-components";
import { HAHOW_COLOR } from "@/constant/index";

export const StyledButton = styled.button<{ $disabled?: boolean }>`
  padding: 8px 12px;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${HAHOW_COLOR};
  background-color: white;
  border: 1px solid ${HAHOW_COLOR};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${HAHOW_COLOR};
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(30, 159, 210, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(30, 159, 210, 0.2);
  }

  ${({ $disabled }) =>
    $disabled &&
    `
    background-color: #f0f0f0;
    color: #aaa;
    border-color: #ccc;
    cursor: not-allowed;
    box-shadow: none;

    &:hover {
      background-color: #f0f0f0;
      color: #aaa;
      transform: none;
      box-shadow: none;
    }
  `}
`;

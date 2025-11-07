import styled from "styled-components";
import { HAHOW_COLOR } from "@/constant/index";

export const StyledCard = styled.div<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;

  background-color: ${({ $isSelected }) => ($isSelected ? "#e3f2fd" : "#fff")};

  border: 2px solid
    ${({ $isSelected }) => ($isSelected ? HAHOW_COLOR : "#e0e0e0")};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledHeroImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`;

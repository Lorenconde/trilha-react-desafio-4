
import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

export const ButtonContainer = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  width: 100%;
  height: 42px;
  background-color: #81259D;
  color: #FFF;

  border: 1px solid #81259D;
  border-radius: 21px;

  &:hover:not(:disabled) {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

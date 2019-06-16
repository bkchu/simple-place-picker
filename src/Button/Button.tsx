import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

interface ButtonProps {
  children: ReactNode;
  cta?: boolean;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return <StyledButton {...props} onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  height: 10rem;
  width: 15rem;
  font-size: 2rem;
  appearance: none;
  background: #7bed9f;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: black;
  transition: all 200ms ease;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 4px 0 rgba(14, 30, 37, 0.12);

  &:hover {
    background: #2ed573;
    cursor: pointer;
  }

  ${(props: any) => props.cta === true && css`
    width: 100%;
    margin-bottom: 2rem;
  `}
`;

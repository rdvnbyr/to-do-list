import React from "react";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledContainer>
      <StyledHeader>REACT TO DO APP</StyledHeader>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 80px;
  background: #334756;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledHeader = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: white;
`;

import React, { ReactNode } from 'react';
import styled from 'styled-components';

type RowProps = {
  children: ReactNode;
};

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const Row = ({ children }: RowProps) => {
  return <StyledRow>{children}</StyledRow>;
};

Row.defaultProps = {};

export default Row;

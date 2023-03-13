import React, { ReactNode } from 'react';
import styled from 'styled-components';

type GridProps = {
  children: ReactNode;
};

const StyledGrid = styled.div``;

const Grid = ({ children }: GridProps) => {
  return <StyledGrid>{children}</StyledGrid>;
};

Grid.defaultProps = {};

export default Grid;

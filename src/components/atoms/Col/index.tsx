import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ColProps = {
  backgroundColor: string;
  textAlign: string;
  sm: number;
  md: number;
  xl: number;
  children: ReactNode;
};

const StyledCol = styled.div<ColProps>`
  text-align: ${(props) => props.textAlign};
  background-color: ${(props) => props.backgroundColor};
  grid-column: span 12;

  @media (min-width: 320px) {
    grid-column: ${(props) => `span ${props.sm}`};
  }
  @media (min-width: 481px) {
    grid-column: ${(props) => `span ${props.sm}`};
  }
  @media (min-width: 641px) {
    grid-column: ${(props) => `span ${props.md}`};
  }
  @media (min-width: 961px) {
    grid-column: ${(props) => `span ${props.md}`};
  }
  @media (min-width: 1025px) {
    grid-column: ${(props) => `span ${props.xl}`};
  }
  @media (min-width: 1281px) {
    grid-column: ${(props) => `span ${props.xl}`};
  }
`;

const Col = ({
  backgroundColor,
  children,
  textAlign,
  sm,
  md,
  xl,
}: ColProps) => {
  return (
    <StyledCol
      backgroundColor={backgroundColor}
      sm={sm}
      md={md}
      xl={xl}
      textAlign={textAlign}
    >
      {children}
    </StyledCol>
  );
};

Col.defaultProps = {
  backgroundColor: 'white',
  textAlign: 'left',
  sm: 12,
  md: 12,
  xl: 12,
};

export default Col;

import { devices } from './../../../../consts/devices';
import { colors } from './../../../../consts/colors';
import styled from 'styled-components';

const { white, gray } = colors;

export const ToolTipStyle = styled.div<{
  t?: number;
  l?: number;
  b?: number;
  r?: number;
}>`
  opacity: 0;
  position: absolute;
  max-width: 150px;
  text-align: center;
  min-width: 97px;
  top: ${({ t }) => t && `${t}px`};
  right: ${({ r }) => r && `${r}px`};
  bottom: ${({ b }) => b && `${b}px`};
  left: ${({ l }) => l && `${l}px`};
  pointer-events: none;
  transition: opacity 0.5s ease;

  div {
    border-radius: 8px;
    background-color: ${white};
    filter: drop-shadow(0px 1px 2px rgba(91, 81, 73, 0.2));
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: ${gray.shade5};

    ::before {
      content: '';
      width: 10px;
      height: 10px;
      background-color: ${white};
      position: absolute;
      top: -5px;
      right: 20px;
      transform: rotate(45deg) skew(10deg, 10deg);
    }
  }

  @media screen and (max-width: ${devices.desktop}) {
    display: none;
  }
`;

import styled from 'styled-components';

import { colors } from '../../../consts/colors';
import { devices } from '../../../consts/devices';

const { black, white } = colors;

export const ContainerHeader = styled.header`
  background-color: ${black.shade1};
  color: ${white};
  height: 115px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 113px 0 19px;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  min-width: 375px;

  & > svg {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  & > section {
    padding-left: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    cursor: pointer;

    @media screen and (min-width: ${devices.desktop}) {
      display: none;
    }
  }

  @media screen and (max-width: ${devices.desktop}) {
    padding: 15px 18px;
    height: min-content;
  }

  @media screen and (max-width: ${devices.tablet}) {
    & > section {
      padding-left: 14px;
    }
    & > svg {
      width: 32px;
      height: 32px;
    }
    & > section svg {
      width: 22px;
      height: 22px;
    }
  }
`;

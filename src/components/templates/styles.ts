import styled from 'styled-components';
import { devices } from '../../consts/devices';
import { colors } from '../../consts/colors';

const { neutral, black } = colors;

export const ContainerMasterTemplate = styled.div`
  & > section {
    display: flex;

    @media screen and (max-width: ${devices.desktop}) {
      flex-direction: row-reverse;
      & > nav {
        position: absolute;
      }
    }
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  min-height: calc(100vh - 80px);
  background-color: ${neutral.shade1};
`;

export const BackgroundModal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: ${black.shade3};
  opacity: 0.75;

  @media screen and (min-width: ${devices.desktop}) {
    background-color: transparent;
  }
`;

export const ContainerMessage = styled.div`
  display: flex;
  position: absolute;
  top: 146px;
  left: 30%;
  justify-content: center;
  align-items: unset;
  width: 560px;
  & > div {
    width: 100%;
  }
  @media screen and (max-width: ${devices.desktop}) {
    top: 96px;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
  }
  @media screen and (max-width: ${devices.tablet}) {
    top: 96px;
    left: 50%;
    transform: translate(-50%);
    width: 95%;
  }
`;

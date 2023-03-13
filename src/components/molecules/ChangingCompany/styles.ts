import { colors } from './../../../consts/colors';
import styled, { keyframes } from 'styled-components';
import { devices } from '../../../consts/devices';
const { white, gray, black, orange } = colors;

const Interval = keyframes`
0%{
    border-color:  ${gray.shade6};
}

50%{
    border-color:  ${orange.shade2};

}

100%{
    border-color:  ${gray.shade6};
}
`;

export const ContainerModalStyles = styled.div<{ $display: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100%;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${({ $display }) => ($display ? 'flex' : 'none')};

  @media screen and (max-width: ${devices.desktop}) {
    align-items: flex-start;
    padding-top: 77px;
  }

  @media screen and (max-width: ${devices.tablet}) {
    padding-top: 40px;
  }
`;

export const Modal = styled.div`
  background-color: ${white};
  border: 1px solid ${gray.shade6};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16), 0px 2px 6px rgba(0, 0, 0, 0.18);
  border-radius: 16px;
  width: 588px;
  padding: 60px 37px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  & > :first-child {
    text-align: center;

    h3 {
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      color: ${black.shade3};
      font-family: Itau6;
    }

    p {
      font-weight: 400;
      font-family: Itau2;
      font-size: 16px;
      line-height: 22px;
      color: ${gray.shade5};
    }
  }

  & > :last-child {
    display: flex;
    justify-content: space-around;
    align-items: start;
  }

  @media screen and (max-width: ${devices.tablet}) {
    width: 288px;

    & > :nth-child(1) {
      h3 {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 8px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
    & > :nth-child(2) {
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      height: 400px;
      & > :nth-child(2) {
        transform: rotate(90deg);
      }
    }
  }
`;

export const Arrows = styled.div`
  display: flex;
  align-self: center;

  div {
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    border-style: solid;
    border-width: 3px 3px 0 0;
    border-radius: 2px;
    animation: ${Interval} 1.6s infinite;
    border-color: ${gray.shade6};
  }

  & > :nth-child(1) {
    animation-delay: 0.2s;
  }

  & > :nth-child(2) {
    position: relative;
    left: -5px;
    animation-delay: 0.6s;
  }

  & > :nth-child(3) {
    position: relative;
    left: -10px;
    animation-delay: 1s;
  }
`;

export const BoxFromTo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 196px;

  svg {
    margin-bottom: 8px;
  }

  div {
    margin-bottom: 18px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: ${gray.shade5};
  }

  & > :last-child {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
`;

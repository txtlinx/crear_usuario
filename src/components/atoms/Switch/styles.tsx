import styled from 'styled-components';
import { colors } from '../../../consts/colors';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const SwitchStyle = styled.div`
  position: relative;
  width: 36px;
  height: 20px;
  background: ${colors.gray.shade9};
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 1px;
    background: ${colors.white};
    transform: translate(0, -50%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;
export const Input = styled.input`
  opacity: 0;
  position: absolute;
  display: none;

  &:checked + ${SwitchStyle} {
    background: ${colors.blue.shade2};
    &:before {
      transform: translate(15px, -50%);
    }
  }
`;

import styled from 'styled-components';
import { colors } from '../../../consts/colors';

const { gray } = colors;

export const ContainerIconButton = styled.div`
  display: flex;
  align-items: center;
  color: ${gray.shade8};
  cursor: pointer;
  gap: 8px;
  & > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  & > span {
    font-size: 10px;
    cursor: pointer;
  }
`;

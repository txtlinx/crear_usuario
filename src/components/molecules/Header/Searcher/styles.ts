import { colors } from './../../../../consts/colors';
import styled from 'styled-components';
const { gray } = colors;
export const SearcherStyle = styled.div`
  padding: 16px;
  & > div {
    padding: 8px;
    gap: 12px;
    border: 1px solid ${gray.shade6};
    border-radius: 2px;
    display: flex;

    input {
      flex-grow: 1;
      border: none;
      outline: none;
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

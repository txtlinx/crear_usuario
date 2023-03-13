import styled from 'styled-components';
import { colors } from '../../../../consts/colors';

const { orange, gray, neutral, white } = colors;

export const SaveCompanyStyle = styled.div<{
  saveFav: boolean;
  selectedCompany: boolean;
}>`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > div {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${({ selectedCompany }) =>
      selectedCompany ? gray.shade5 : gray.shade2};
    display: flex;
    gap: 8px;

    & > div {
      border: 1px solid
        ${({ saveFav }) => (saveFav ? orange.shade2 : gray.shade2)};
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background-color: ${({ saveFav }) =>
        saveFav ? orange.shade2 : neutral.shade2};
      transition: background-color 0.5s ease;
      position: relative;
      z-index: 1;
      cursor: pointer;

      ::before {
        content: '';
        width: 5px;
        height: 10px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 2;
        border: solid ${({ saveFav }) => (saveFav ? white : neutral.shade2)};
        border-left-width: 0;
        border-top-width: 0;
        transform: rotate(45deg);
      }
    }
  }

  button {
    background-color: ${({ selectedCompany }) =>
      selectedCompany ? orange.shade2 : gray.shade2};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid
      ${({ selectedCompany }) => (selectedCompany ? '#cc4400' : gray.shade2)};
    border-radius: 8px;
    cursor: pointer;
    height: 48px;
    font-size: 18px;
    line-height: 24px;

    :disabled {
      cursor: not-allowed;
    }
  }
`;

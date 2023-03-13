import styled from 'styled-components';
import { colors } from '../../../../consts/colors';
import scrollCustom from '../../../../consts/scrollCustom';

const { gray, orange } = colors;

export const MyCompaniesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 8px 16px;
  color: ${gray.shade5};
  max-height: 290px;
  overflow-y: scroll;

  ${scrollCustom}
`;

type CompanyTextProps = {
  marquee: boolean;
  selected: boolean;
};

export const Company = styled.div<CompanyTextProps>`
  display: flex;
  position: relative;
  opacity: ${({ selected }) => (selected ? 0.5 : 1)};
  pointer-events: ${({ selected }) => selected && 'none'};

  & > :first-child {
    width: 20px;
    height: 20px;
    margin-right: 8px;

    input {
      opacity: 0;
      position: absolute;
      left: 0;
      width: 20px;
      height: 20px;
      z-index: 2;
    }

    i {
      display: inline-block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      border: 1px solid ${gray.shade1};
      position: absolute;
      left: 0;
      z-index: 1;
    }
  }

  section {
    overflow: hidden;
    width: 273px;
    margin-right: auto;
    div {
      appearance: none;
      font-size: 14px;
      line-height: 20px;
      flex-grow: 1;
      font-weight: 400;
      min-width: 260px;
      text-overflow: ${({ marquee }: CompanyTextProps) =>
        marquee ? 'ellipsis' : 'clip'};
      overflow: hidden;
      white-space: nowrap;

      span {
        font-weight: 700;
      }

      :hover {
        text-overflow: clip;
        overflow: visible;
        white-space: nowrap;
        will-change: transform;
        animation: ${({ marquee }: CompanyTextProps) =>
          marquee ? '6s linear infinite alternate marquee;' : 'none'};
      }
    }
  }

  & > :last-child {
    margin-right: 11px;
  }

  input[type='radio']:checked + i {
    border: 5px solid ${orange.shade1};
  }
`;

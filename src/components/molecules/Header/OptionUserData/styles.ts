import styled from 'styled-components';
import { colors } from '../../../../consts/colors';

const { gray, black } = colors;

export const OptionUserDataStyles = styled.div<{ expand?: boolean }>`
  & > div {
    display: flex;
    gap: 11px;
    align-items: center;
    margin-bottom: 10px;

    i {
      width: 9px;
      height: 9px;
      border: 1px solid ${({ expand }) => (expand ? black.shade1 : gray.shade1)};
      border-width: ${({ expand }) => (expand ? '0 2px 2px 0' : '0 1px 1px 0')};
      transform: rotate(${({ expand }) => (expand ? '-135deg' : '45deg')})
        skew(-10deg, -10deg);
      transition: transform 0.5s ease, border 0.5s ease;
    }
  }
  p {
    margin-right: auto;
    color: ${gray.shade5};
    white-space: nowrap;
    overflow: hidden;
  }

  section {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    gap: 10px;

    a {
      color: ${gray.shade1};
      text-decoration: none;
    }

    i {
      width: 9px;
      height: 9px;
      border: 1px solid ${gray.shade1};
      border-width: 0 1px 1px 0;
      transform: rotate(-45deg);
      transition: transform 0.5s ease;
    }

    div {
      display: flex;
      padding: 3px 3px 0 36px;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

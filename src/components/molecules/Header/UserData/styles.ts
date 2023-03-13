import { devices } from './../../../../consts/devices';
import { colors } from './../../../../consts/colors';
import styled from 'styled-components';

const { orange, blue, gray, black } = colors;

export const MyData = styled.p`
  color: ${orange.shade2};
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  margin-bottom: 4px;
  span {
    color: ${gray.shade7};
    font-weight: 400;
  }
`;

export const Section = styled.section<{ company?: boolean; marquee: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: ${({ company }) => (company ? 0 : '24px')};

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: ${black.shade3};
    white-space: nowrap;
    text-overflow: ${({ marquee }) => (marquee ? 'ellipsis' : 'clip')};
    overflow: hidden;

    :hover {
      animation: ${({ marquee }) =>
        marquee ? '6s linear infinite alternate marquee' : 'none'};
      overflow: visible;
    }
  }

  h2 {
    color: ${blue.shade1};
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
  }
  h3 {
    color: ${orange.shade2};
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    margin-bottom: 4px;
    span {
      color: ${gray.shade7};
      font-weight: 400;
    }
  }
  h4 {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${gray.shade5};
  }

  & > section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & > :first-child {
    width: 227px;
    overflow: hidden;
  }
`;

export const ContSignOut = styled.div`
  display: none;
  border-top: 1px solid ${gray.shade5};
  color: ${gray.shade5};
  padding-top: 16px;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

  @media screen and (max-width: ${devices.desktop}) {
    display: flex;
  }
`;

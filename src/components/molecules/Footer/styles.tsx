import styled from 'styled-components';
import { devices } from '../../../consts/devices';
import { colors } from '../../../consts/colors';

const { neutral, gray, black } = colors;

export const FooterStyled = styled.footer`
  background: ${neutral.shade2};
  bottom: 0;
  flex-flow: row wrap;
  width: 100%;
  display: flex;
  padding-top: 30px;
  padding-bottom: 24px;

  @media screen and (min-width: ${devices.tablet}) and (max-width: ${devices.desktop}) {
    padding: 49px 52px 24px;
  }

  @media screen and (max-width: ${devices.tablet}) {
    padding: 31px 12px 16px;
  }

  @media screen and (min-width: ${devices.desktop}) and (max-width: 1307px) {
    padding: 31px 12px 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ContentContainer = styled.div`
  display: flex;
  border-top: 1px solid ${black.shade1};
  font-size: 13px;
  padding: 16px 8px 0;
  justify-content: space-between;
  width: 1016px;

  section {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    p {
      color: ${gray.shade5};
      @media screen and (max-width: ${devices.mobile}) {
        padding-bottom: 8px;
      }
    }

    @media screen and (max-width: ${devices.desktop}) {
      margin-right: unset;
    }
  }

  @media screen and (min-width: ${devices.desktop}) and (max-width: 1307px) {
    width: auto;
  }

  @media screen and (max-width: ${devices.desktop}) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 8px;
    width: 100%;
  }
`;

export const Offset = styled.div`
  flex-grow: ${({ left }: { left?: boolean }) => (left ? 1 : 2)};
  flex-shrink: ${({ left }: { left?: boolean }) => (left ? 1 : 2)};
`;

export const Icon = styled.a`
  height: 32px;
  width: 32px;
  cursor: pointer;

  @media screen and (max-width: ${devices.tablet}) {
    :has(.hide) {
      display: none;
    }
  }
`;

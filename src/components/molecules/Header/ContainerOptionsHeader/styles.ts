import { devices } from './../../../../consts/devices';
import styled from 'styled-components';
import { colors } from '../../../../consts/colors';

const { white, orange } = colors;

export const ContainerOptionsHeaderStyle = styled.div<{
  showChangeCompany: boolean;
  showUserData: boolean;
}>`
  display: flex;
  height: 44px;
  position: relative;

  hr {
    width: 1px;
    height: auto;
    background-color: ${white};
    margin: 0 24px;
  }

  & > :last-child {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  svg {
    cursor: pointer;
  }

  & > section {
    :hover {
      .tooltip-company {
        opacity: ${({ showChangeCompany, showUserData }) =>
          showChangeCompany || showUserData ? 0 : 1};
      }
    }
  }

  @media screen and (max-width: ${devices.desktop}) {
    margin-left: auto;
  }

  @media screen and (max-width: ${devices.tablet}) {
    & > section {
      width: 190px;
    }

    hr {
      margin: 0 14px;
    }

    & > :first-child {
      div {
        width: 190px;
      }
    }
  }

  .tooltip-usuario,
  .tooltip- {
    display: ${({ showChangeCompany, showUserData }) =>
      (showChangeCompany || showUserData) && 'none'};
  }
`;

export const Profile = styled.div<{ showUserData: boolean }>`
  border-radius: 50%;
  border: 2px solid
    ${({ showUserData }) => (showUserData ? orange.shade2 : white)};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.5s ease;
  position: relative;
  cursor: pointer;
  :hover {
    .tooltip-usuario {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${devices.tablet}) {
    width: 32px;
    height: 32px;
    font-size: 13px;
    line-height: 19px;
  }
`;

type ChangeEnterpriseTextProps = {
  showChangeCompany: boolean;
  marquee: boolean;
};

export const ChangeEnterprise = styled.div<ChangeEnterpriseTextProps>`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 203px;
  overflow: hidden;

  & > :first-child {
    font-size: 16px;
    line-height: 21px;
    text-overflow: ${({ marquee }: ChangeEnterpriseTextProps) =>
      marquee ? 'ellipsis' : 'clip'};
    overflow: hidden;
    cursor: pointer;
    :hover {
      text-overflow: clip;
      overflow: visible;
      white-space: nowrap;
      will-change: transform;
      animation: ${({ marquee }: ChangeEnterpriseTextProps) =>
        marquee ? '6s linear infinite alternate marquee;' : 'none'};
    }
  }

  & > :last-child {
    text-decoration: underline;
    font-size: 14px;
    line-height: 20px;
    position: relative;
    width: fit-content;
    cursor: pointer;
    span {
      position: absolute;
      right: -16px;
      top: 4px;
      bottom: 0;
      margin: auto;
      width: 8px;
      height: 8px;
      border-bottom: 1px solid ${white};
      border-right: 1px solid ${white};
      display: inline-block;
      transform: ${({ showChangeCompany }) =>
        showChangeCompany ? 'rotate(45deg)' : 'rotate(-45deg)'};
      margin-left: 6px;
      transition: transform 0.5s ease;
    }
  }

  @media screen and (max-width: ${devices.tablet}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ContIconToolTip = styled.section<{ last?: boolean }>`
  position: relative;

  :hover {
    .tooltip- {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${devices.desktop}) {
    display: ${({ last }) => last && 'none'};
  }
  @media screen and (max-width: ${devices.tablet}) {
    display: none;
  }
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../consts/colors';
import { devices } from '../../../../consts/devices';

const { gray, blue, orange, white } = colors;

export const ContainerOptionNav = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 64px;
  padding: 12px 24px;
  align-items: center;
  justify-content: space-between;
  gap: 21px;
  text-decoration: none;
  color: initial;
  border-bottom: 1px solid ${gray.shade2};

  @media screen and (min-width: ${devices.desktop}) {
    &:hover {
      background-color: ${blue.shade1};
      border-bottom: 1px solid ${white};
      color: ${white};

      svg {
        path {
          fill: ${white};
        }
      }

      .notification-circle {
        background-color: ${white};
        color: ${blue.shade1};
      }
    }
  }

  transition: background 0.5s ease;

  & > section {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    overflow: hidden;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  & > svg {
    min-height: 40px;
    min-width: 40px;
  }
`;

type OptionTextProps = {
  marquee: boolean;
};

export const OptionText = styled.p<OptionTextProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-right: auto;
  white-space: nowrap;
  text-overflow: ${({ marquee }: OptionTextProps) =>
    marquee ? 'ellipsis' : 'clip'};
  overflow: hidden;
  white-space: nowrap;

  :hover {
    text-overflow: clip;
    overflow: visible;
    white-space: nowrap;
    will-change: transform;
    animation: ${({ marquee }: OptionTextProps) =>
      marquee ? '6s linear infinite alternate marquee;' : 'none'};
  }
`;

export const NotificationCircle = styled.div`
  background-color: ${gray.shade5};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-weight: 700;
  color: ${gray.shade4};
`;

export const NotificationDot = styled.span`
  position: absolute;
  right: 4px;
  top: 6px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${orange.shade2};
`;

export const IconContainer = styled.div`
  position: relative;
  display: block;
`;

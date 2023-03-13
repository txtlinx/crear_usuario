import { devices } from './../../../../consts/devices';
import { colors } from '../../../../consts/colors';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const { white } = colors;

export const ContainerChangeCompanyStyle = styled(motion.div)`
  width: 386px;
  background-color: ${white};
  position: absolute;
  top: 72px;
  left: -69px;
  user-select: none;
  overflow: hidden;
  filter: drop-shadow(0px 1px 7px rgba(91, 81, 73, 0.3));
  z-index: 3;

  @media screen and (max-width: ${devices.tablet}) {
    min-width: 375px;
    top: 58px;
    left: -74px;
  }
`;

export const TopTriangle = styled(motion.div)<{ $userData?: boolean }>`
  width: 38px;
  height: 38px;
  transform: rotate(45deg)
    ${({ $userData }) => $userData && 'skew(10deg, 10deg)'};
  position: absolute;
  top: ${({ $userData }) => ($userData ? '64px' : '59px')};
  left: ${({ $userData }) => ($userData ? '255px' : '104px')};
  background-color: ${white};
  z-index: ${({ $userData }) => ($userData ? '3' : '2')};

  @media screen and (max-width: ${devices.tablet}) {
    top: ${({ $userData }) => ($userData ? '58px' : '54px')};
    left: ${({ $userData }) => ($userData ? '218px' : '104px')};
  }
`;

export const StylesMotion = (showChangeCompany: boolean) => ({
  TopTriangle: {
    animate: {
      opacity: showChangeCompany ? 1 : 0,
    },
    exit: { opacity: 0 },
  },
  ContainerChangeCompanyStyle: {
    animate: {
      height: !showChangeCompany ? 0 : 'auto',
    },
    initialAndExit: { height: 0 },
    transition: { type: 'tween' },
  },
});

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../../consts/colors';
import { screenType } from '../../../utils/screenType';
const { black, blue, gray, white } = colors;

const widthOptionNav = (openMenu: boolean) => {
  return {
    desktop: openMenu ? '292px' : '88px',
    tablet: openMenu ? '292px' : '0',
    mobile: openMenu ? '332px' : '0',
  };
};

export const showMenu = (open: boolean) => ({
  opacity: 1,
  display: 'block',
  width: widthOptionNav(open)[screenType()],
});

export const hideMenu = (open: boolean) => ({
  width: widthOptionNav(open)[screenType()],
  opacity: screenType() === 'desktop' ? 1 : 0,
  transitionEnd: {
    display: screenType() === 'desktop' ? 'block' : 'none',
  },
});

export const ContainerSideBar = styled(motion.nav)`
  min-height: calc(100vh - 80px);
  background-color: ${gray.shade4};
  z-index: 9999;
  svg {
    path {
      fill: ${gray.shade5};
    }
  }

  & > .active {
    background-color: ${black.shade1};
    color: ${white};
    transition: background 0.5s ease;

    svg,
    svg * {
      fill: ${white};
    }

    .notification-circle {
      background-color: ${white};
      color: ${blue.shade1};
    }
  }
  div > .active {
    background-color: ${black.shade1};
    color: ${white};
    transition: background 0.5s ease;
  }
`;

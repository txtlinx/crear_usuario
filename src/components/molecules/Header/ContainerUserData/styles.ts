import { devices } from './../../../../consts/devices';
import { colors } from './../../../../consts/colors';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const { gray, white } = colors;

export const ContainerUserDataStyle = styled(motion.div)`
  position: absolute;
  background-color: ${white};
  top: 72px;
  left: 30px;
  background: ${white};
  border-radius: 8px;
  width: 291px;
  filter: drop-shadow(0px 1px 7px rgba(91, 81, 73, 0.3));
  padding: 40px 32px 42px;
  overflow: hidden;
  z-index: 2;

  svg {
    fill: ${gray.shade5};
  }

  @media screen and (max-width: ${devices.tablet}) {
    min-width: 375px;
    top: 58px;
    left: -69px;
    border-radius: 0;
  }
`;

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from '../../../../consts/colors';
import { devices } from '../../../../consts/devices';

const { gray, white, blue } = colors;

const SwitchBtnStyle = styled(motion.div)`
  padding: 16px 24px;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${gray.shade2};
  cursor: pointer;
  @media screen and (max-width: ${devices.tablet}) {
    display: none;
  }

  &:hover {
    background-color: ${blue.shade1};
    svg {
      path {
        fill: ${white};
      }
    }
  }

  div {
    width: min-content;
  }

  svg {
    width: 40px;
    object-fit: cover;
    height: 40px;
  }
`;
export default SwitchBtnStyle;

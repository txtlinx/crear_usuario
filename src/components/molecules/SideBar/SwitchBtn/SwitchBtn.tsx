import { motion } from 'framer-motion';
import SwitchBtnStyle from './styles';
import { ReactComponent as DropdwonIcon } from '../../../../assets/img/dropdown.svg';
import { colors } from '../../../../consts/colors';
import { Dispatch, SetStateAction } from 'react';
import { definedScreen } from './helpers';

const { black } = colors;

const SwitchBtn = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const rotate = definedScreen(open);
  return (
    <SwitchBtnStyle
      onClick={() => setOpen(!open)}
      data-testid="switch-button-menu-sidebar"
    >
      <motion.div
        animate={{
          rotate: rotate,
          display: 'flex',
          justifyContent: 'center',
        }}
        whileTap={{ scale: 0.9 }}
      >
        <DropdwonIcon width="40px" height="40px" fill={black.shade2} />
      </motion.div>
    </SwitchBtnStyle>
  );
};

export default SwitchBtn;

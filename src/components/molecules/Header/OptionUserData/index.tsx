import { Link } from 'react-router-dom';
import { OptionUserDataStyles } from './styles';
import { ReactComponent as User } from '../../../../assets/img/usuario.svg';
import { ReactComponent as Download } from '../../../../assets/img/descargar.svg';
import { ReactComponent as Config } from '../../../../assets/img/configuration_dark.svg';
import { motion } from 'framer-motion';
import { ReactElement, useState } from 'react';

type OptionType = {
  text: string;
  to: string;
};

type IconType = {
  download: ReactElement;
  user: ReactElement;
  config: ReactElement;
};

const Icons: IconType = {
  download: <Download />,
  user: <User />,
  config: <Config />,
};

const OptionUserData = ({
  options,
  text,
  icon,
}: {
  options?: OptionType[];
  text: string;
  icon: 'download' | 'user' | 'config';
}) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <OptionUserDataStyles expand={expand}>
      <div onClick={() => setExpand(!expand)} aria-label="option-user">
        {Icons[icon]}
        <p>{text}</p>
        {options && <i />}
      </div>
      <motion.section
        initial={{ height: 0 }}
        animate={{ height: expand ? 'fit-content' : 0 }}
      >
        {options?.map((op) => (
          <div key={op.text}>
            <Link to="">{op.text}</Link>
            <i />
          </div>
        ))}
      </motion.section>
    </OptionUserDataStyles>
  );
};

export default OptionUserData;

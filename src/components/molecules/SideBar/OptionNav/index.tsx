import { Dispatch, Fragment, ReactNode, SetStateAction, useRef } from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as Home } from '../../../../assets/img/home.svg';
import { ReactComponent as Account } from '../../../../assets/img/cuentas.svg';
import { ReactComponent as Outside } from '../../../../assets/img/exterior.svg';
import { ReactComponent as Financing } from '../../../../assets/img/financiamiento.svg';
import { ReactComponent as Signatures } from '../../../../assets/img/firmas.svg';
import { ReactComponent as Investments } from '../../../../assets/img/inversiones.svg';
import { ReactComponent as Fundraising } from '../../../../assets/img/recaudacion.svg';
import { ReactComponent as Salary } from '../../../../assets/img/sueldo.svg';
import { ReactComponent as DropdownIcon } from '../../../../assets/img/dropdown.svg';
import {
  ContainerOptionNav,
  IconContainer,
  NotificationCircle,
  NotificationDot,
  OptionText,
} from './styles';
import { elementRequireMarquee } from '../../../../utils/styles';

type Props = {
  title: string;
  icon?: string;
  open?: boolean;
  route: string;
  notifications?: number;
  children?: ReactNode;
  validateCollapsedItem?: Function;
  collapsed?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

const OptionNav = ({
  title,
  icon,
  open,
  route,
  notifications,
  children,
  validateCollapsedItem,
  collapsed,
  setOpen,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const icons: any = {
    home: <Home width="40px" height="40px" />,
    account: <Account width="40px" height="40px" />,
    outside: <Outside width="40px" height="40px" />,
    financing: <Financing width="40px" height="40px" />,
    signatures: <Signatures width="40px" height="40px" />,
    investments: <Investments width="40px" height="40px" />,
    fundraising: <Fundraising width="40px" height="40px" />,
    salary: <Salary width="40px" height="40px" />,
    none: <svg width="40px" height="40px" />,
  };

  const collapseItem = (): void => {
    if (validateCollapsedItem) validateCollapsedItem(title);
    if (setOpen) setOpen(!open);
  };

  return (
    <Fragment>
      <ContainerOptionNav to={route}>
        <IconContainer aria-label="icon-label" onClick={collapseItem}>
          {icon && icons[icon]}
          {!open && notifications && <NotificationDot />}
        </IconContainer>
        {open && (
          <section data-testid={`section-submenu-dropdown-${route}-option`}>
            <OptionText ref={ref} marquee={elementRequireMarquee(ref)}>
              {title}
            </OptionText>
            {notifications && (
              <NotificationCircle className="notification-circle">
                {notifications}
              </NotificationCircle>
            )}
            {icon !== 'none' && children && (
              <motion.div
                animate={{ rotate: collapsed ? '0deg' : '180deg' }}
                transition={{ type: 'tween' }}
              >
                <DropdownIcon
                  data-testid={`submenu-dropdown-${route}-option`}
                  width="24px"
                  height="24px"
                  onClick={() => {
                    if (validateCollapsedItem) validateCollapsedItem(title);
                  }}
                />
              </motion.div>
            )}
          </section>
        )}
      </ContainerOptionNav>
      <motion.div
        initial={{ height: 0, overflow: 'hidden' }}
        transition={{ type: 'tween' }}
        animate={{ height: collapsed ? 0 : 'min-content' }}
      >
        {open && children}
      </motion.div>
    </Fragment>
  );
};

export default OptionNav;

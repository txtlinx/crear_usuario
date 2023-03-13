import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import OptionNav from '../../molecules/SideBar/OptionNav';
import SwitchBtn from '../../molecules/SideBar/SwitchBtn/SwitchBtn';
import navigationItems from './navigation';
import { ContainerSideBar, hideMenu, showMenu } from './styles';

type NavigationItemType = {
  title: string;
  icon?: string;
  route: string;
  notifications?: number;
  collapsed?: boolean;
  childrens?: Array<NavigationItemType>;
};

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SideBar = (
  { open, setOpen }: Props,
  ref: ForwardedRef<HTMLElement | null>
) => {
  const [navigationMenu, setNavigationMenu] =
    useState<Array<NavigationItemType>>(navigationItems);

  const validateStateCollapsedItemMenu = (id: string): void => {
    setNavigationMenu((prevValue): Array<NavigationItemType> => {
      const newStateMenu = prevValue.map((item: NavigationItemType) => {
        if (item.title === id) {
          return {
            ...item,
            collapsed: !item.collapsed,
          };
        } else {
          return {
            ...item,
            collapsed: true,
          };
        }
      });
      return newStateMenu;
    });
  };

  useEffect(() => {
    validateStateCollapsedItemMenu('');
  }, [open]);

  return (
    <ContainerSideBar
      ref={ref}
      transition={{ type: 'tween' }}
      animate={open ? showMenu(open) : hideMenu(open)}
    >
      <SwitchBtn open={open} setOpen={setOpen} />
      {navigationMenu.map((item: NavigationItemType, key: number) => (
        <OptionNav
          key={item.route + key}
          route={item.route}
          title={item.title}
          notifications={item.notifications}
          icon={item.icon}
          open={open}
          setOpen={setOpen}
          collapsed={item.collapsed}
          validateCollapsedItem={validateStateCollapsedItemMenu}
        >
          {item.childrens &&
            item.childrens.map(
              (children: NavigationItemType, childrenKey: number) => (
                <OptionNav
                  key={children.route + childrenKey}
                  route={children.route}
                  title={children.title}
                  icon="none"
                  open={open}
                />
              )
            )}
        </OptionNav>
      ))}
    </ContainerSideBar>
  );
};

export default forwardRef(SideBar);

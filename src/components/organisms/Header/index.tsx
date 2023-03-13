import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  Fragment,
  SetStateAction,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/img/logo_itau_rgb_ligth.svg';
import { ReactComponent as HamburgerMenuIcon } from '../../../assets/img/mas.svg';
import { applicationPaths } from '../../../config/path';
import useStore from '../../../hooks/useStore';
import ContainerChangeCompany from '../../molecules/Header/ContainerChangeCompany';
import ContainerOptionsHeader from '../../molecules/Header/ContainerOptionsHeader';
import ContainerUserData from '../../molecules/Header/ContainerUserData';
import MyCompanies from '../../molecules/Header/MyCompanies';
import SaveCompany from '../../molecules/Header/SaveChanges';
import Searcher from '../../molecules/Header/Searcher';
import UserData from '../../molecules/Header/UserData';
import { ContainerHeader } from './styles';

type Props = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<string>>;
  showModal: string;
};

const Header = (
  { openMenu, setOpenMenu, setShowModal, showModal }: Props,
  ref: ForwardedRef<HTMLElement | null>
) => {
  const navigate = useNavigate();
  const [{ dashboard }] = useStore();
  const [enterpriseToSearch, setEnterpriseToSearch] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>(
    dashboard?.dashboardInformation?.customerInformation?.idCompany
  );
  const [showChangeCompany, setShowChangeCompany] = useState<boolean>(false);
  const [showUserData, setShowUserData] = useState<boolean>(false);
  const onClickLogo = (): void => navigate(applicationPaths.home);

  return (
    <ContainerHeader data-testid="header-component">
      <Logo
        name="logo-itau-mayorista"
        data-testid="logo-itau-mayorista"
        onClick={onClickLogo}
      />
      <ContainerOptionsHeader
        showChangeCompany={showChangeCompany}
        setShowChangeCompany={setShowChangeCompany}
        setSelectedCompany={setSelectedCompany}
        setShowUserData={setShowUserData}
        showUserData={showUserData}
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <Fragment>
          <ContainerChangeCompany showChangeCompany={showChangeCompany}>
            <Fragment>
              <Searcher
                enterpriseToSearch={enterpriseToSearch}
                setEnterpriseToSearch={setEnterpriseToSearch}
              />
              <MyCompanies
                enterpriseToSearch={enterpriseToSearch}
                setSelectedCompany={setSelectedCompany}
              />
              <SaveCompany
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
              />
            </Fragment>
          </ContainerChangeCompany>
          <ContainerUserData showUserData={showUserData}>
            <UserData />
          </ContainerUserData>
        </Fragment>
      </ContainerOptionsHeader>
      <section ref={ref} data-testid="button-menu-header">
        <HamburgerMenuIcon
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          width="32px"
          height="32px"
          data-testid="btn-hamburger"
        />
      </section>
    </ContainerHeader>
  );
};

export default forwardRef(Header);

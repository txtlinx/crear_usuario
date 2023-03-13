import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import withdProtectedRoute from '../../hooks/protectedRoute';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import useStore from '../../hooks/useStore';
import { dashboardActions } from '../../reducers/actions/dashboardActions';
import { getDashboardInformation } from '../../services/dashboard.services';
import Alert from '../atoms/Alert';
import ChangingCompany from '../molecules/ChangingCompany';
import Footer from '../molecules/Footer';
import Header from '../organisms/Header';
import SideBar from '../organisms/SideBar';
import {
  BackgroundModal,
  ContainerMain,
  ContainerMasterTemplate,
  ContainerMessage,
} from './styles';

export const closeMenu = (setState: Function) => () => setState(false);

const MasterTemplate = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<string>('');
  const refSideBar = useRef<HTMLElement | null>(null);
  const refHamburgerMenuIcon = useRef<HTMLElement | null>(null);
  const [{ alerts }, dispatch] = useStore();

  const { INIT_DASHBOARD, FINISH_DASHBOARD } = dashboardActions;

  useOnClickOutside(refSideBar, closeMenu(setOpenMenu), refHamburgerMenuIcon);

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      dispatch({ type: 'alertsOff' });
    }, 5000);

    return () => clearTimeout(idTimeOut);
  }, [alerts.display]);

  useEffect(() => {
    const fetchDashboardInformation = async () => {
      dispatch({
        type: INIT_DASHBOARD,
      });
      /*     const data = await getDashboardInformation();
      dispatch({
        type: FINISH_DASHBOARD,
        payload: { dashboardInformation: data },
      });*/
    };
    fetchDashboardInformation();
  }, []);

  return (
    <ContainerMasterTemplate>
      {alerts.display && (
        <ContainerMessage>
          <Alert
            id={alerts.id}
            type={alerts.type}
            open={alerts.display}
            children={alerts.text}
            onClose={alerts.onClose}
          />
        </ContainerMessage>
      )}
      <ChangingCompany />
      <Header
        ref={refHamburgerMenuIcon}
        setShowModal={setShowModal}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        showModal={showModal}
      />
      <section>
        {showModal === 'open' && (
          <BackgroundModal
            data-testid="background-modal"
            onClick={() => setShowModal('closeByOutSide')}
          />
        )}
        <SideBar ref={refSideBar} open={openMenu} setOpen={setOpenMenu} />
        <ContainerMain>
          <Outlet />
          <Footer />
        </ContainerMain>
      </section>
    </ContainerMasterTemplate>
  );
};
export default MasterTemplate;

//export default withdProtectedRoute(MasterTemplate);

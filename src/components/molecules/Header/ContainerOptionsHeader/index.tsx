import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  ChangeEnterprise,
  ContainerOptionsHeaderStyle,
  ContIconToolTip,
  Profile,
} from './styles';
import { ReactComponent as Notification } from '../../../../assets/img/notification.svg';
import { ReactComponent as Help } from '../../../../assets/img/ayuda.svg';
import { ReactComponent as SignOut } from '../../../../assets/img/cerrarSesion.svg';
import ToolTip from '../ToolTip';
import { elementRequireMarquee } from '../../../../utils/styles';
import { closeSession } from '../../../../utils/session';
import useStore from '../../../../hooks/useStore';
import { CompanyType } from '../MyCompanies/types';
const ContainerOptionsHeader = ({
  children,
  setShowChangeCompany,
  showChangeCompany,
  setSelectedCompany,
  setShowUserData,
  showUserData,
  setShowModal,
  showModal,
}: {
  children: ReactElement;
  setShowChangeCompany: Dispatch<SetStateAction<boolean>>;
  setSelectedCompany: Dispatch<SetStateAction<string>>;
  showChangeCompany: boolean;
  setShowUserData: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<string>>;
  showUserData: boolean;
  showModal: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [longer, setLonger] = useState<boolean>(false);
  const [{ dashboard }] = useStore();

  const selectedCompany =
    dashboard?.dashboardInformation?.customerInformation?.companies?.filter(
      (com: CompanyType) =>
        com.id ===
        dashboard?.dashboardInformation?.customerInformation?.idCompany
    )[0];

  const handlerShowModals = (from: string) => {
    if (from === 'company') {
      setShowChangeCompany(!showChangeCompany);
      setShowUserData(false);
    } else {
      setShowChangeCompany(false);
      setShowUserData(!showUserData);
    }

    setSelectedCompany('');
  };

  useEffect(() => {
    if (showChangeCompany || showUserData) {
      setShowModal('open');
    } else {
      setShowModal('');
    }
  }, [showChangeCompany, showUserData, setShowModal]);

  useEffect(() => {
    if (showModal === 'closeByOutSide') {
      setShowChangeCompany(false);
      setShowUserData(false);
    }
  }, [showModal]);

  useEffect(() => {
    setLonger(elementRequireMarquee(ref));
  }, []);

  return (
    <ContainerOptionsHeaderStyle
      showChangeCompany={showChangeCompany}
      showUserData={showUserData}
    >
      <section>
        <ChangeEnterprise
          showChangeCompany={showChangeCompany}
          data-testid="enterprise"
          marquee={longer}
        >
          <p ref={ref}>{selectedCompany?.name}</p>

          <p onClick={() => handlerShowModals('company')}>
            Cambiar empresa
            <span />
          </p>
        </ChangeEnterprise>
        <ToolTip
          className="company"
          text="Haz click para cambiar de empresa"
          t={51}
          l={-3}
        />
      </section>
      {children}
      <hr />
      <div>
        <Profile
          showUserData={showUserData}
          onClick={() => handlerShowModals('profile')}
          aria-label="profile"
        >
          <p data-testid="avatar">
            {dashboard?.dashboardInformation?.customerInformation?.avatar}
          </p>
          <ToolTip className="usuario" text="Usuario" t={48} r={-7} />
        </Profile>
        <ContIconToolTip>
          <Notification />
          <ToolTip className="" text="Notificaciones" t={48} l={-56} />
        </ContIconToolTip>
        <ContIconToolTip>
          <Help />
          <ToolTip className="" text="Centro de ayuda" t={48} l={-56} />
        </ContIconToolTip>
        <ContIconToolTip last>
          <SignOut onClick={closeSession} data-testid="close-session" />
          <ToolTip className="" text="Cerrar sesión" t={48} r={-14} />
        </ContIconToolTip>
      </div>
    </ContainerOptionsHeaderStyle>
  );
};

export default ContainerOptionsHeader;

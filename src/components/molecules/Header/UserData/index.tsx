import OptionUserData from '../OptionUserData';
import { ContSignOut, Section } from './styles';
import { ReactComponent as SignOut } from '../../../../assets/img/cerrar_sesion_black.svg';
import { closeSession } from '../../../../utils/session';
import useStore from '../../../../hooks/useStore';
import { elementRequireMarquee } from '../../../../utils/styles';
import { useEffect, useRef, useState } from 'react';

const UserData = () => {
  const [{ dashboard }] = useStore();
  const refName = useRef<HTMLDivElement | null>(null);
  const refCompany = useRef<HTMLDivElement | null>(null);
  const [longerName, setLongerName] = useState<boolean>(false);
  const [longerCompany, setLongerCompany] = useState<boolean>(false);

  const selectedCompany =
    dashboard?.dashboardInformation?.customerInformation?.companies?.filter(
      (com: any) =>
        com.id ===
        dashboard?.dashboardInformation?.customerInformation?.idCompany
    )[0];

  useEffect(() => {
    setLongerName(elementRequireMarquee(refName));
    setLongerCompany(elementRequireMarquee(refCompany));
  }, []);

  return (
    <div>
      <Section marquee={longerName}>
        <div>
          <h3>
            Mis Datos - <span>{selectedCompany?.rolUser}</span>
          </h3>
          <h1 ref={refName}>
            Hola,{' '}
            {dashboard?.dashboardInformation?.customerInformation?.firstName +
              ' ' +
              dashboard?.dashboardInformation?.customerInformation?.lastName}
          </h1>
          <h4>Última sesión: 30/03/2022 12:26:13</h4>
        </div>
        <section>
          <OptionUserData
            icon="user"
            text="Administrar cuenta"
            options={[
              { text: 'Cambio de clave', to: '/' },
              { text: 'Dispositivos de seguridad', to: '' },
            ]}
          />
          <OptionUserData icon="download" text="Zona de  descarga" />
        </section>
      </Section>
      <Section marquee={longerCompany} company>
        <div>
          <h2>Datos de mi empresa</h2>
          <h1>{selectedCompany?.name}</h1>
        </div>
        <section>
          <OptionUserData
            icon="user"
            text="Configurar usuarios"
            options={[
              { text: 'Notificaciones', to: '/' },
              { text: 'Dispositivos de seguridad', to: '' },
              { text: 'Conoce tu empresa', to: '' },
            ]}
          />
          <OptionUserData
            icon="config"
            text="Otras configuraciones"
            options={[
              { text: 'Notificaciones', to: '/' },
              { text: 'Dispositivos de seguridad', to: '' },
              { text: 'Conoce tu empresa', to: '' },
            ]}
          />
        </section>
      </Section>
      <ContSignOut onClick={closeSession} data-testid="close-session-userdata">
        <SignOut />
        <h3>Cerrar Sesión</h3>
      </ContSignOut>
    </div>
  );
};

export default UserData;

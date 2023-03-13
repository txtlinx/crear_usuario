import { Dispatch, SetStateAction, useState } from 'react';
import useStore from '../../../../hooks/useStore';
import { saveFavoriteCompany } from '../../../../services/changeCompany.services';
import { getDashboardInformation } from '../../../../services/dashboard.services';
import { SaveCompanyStyle } from './styles';
import { dashboardActions } from '../../../../reducers/actions/dashboardActions';
import { BffCompanyType } from '../MyCompanies/types';
import { setCookie } from '../../../../utils/cookies';
import { cookies } from '../../../../consts/cookies';
const { INIT_DASHBOARD, FINISH_DASHBOARD } = dashboardActions;

const SaveCompany = ({
  setSelectedCompany,
  selectedCompany,
}: {
  setSelectedCompany: Dispatch<SetStateAction<string>>;
  selectedCompany: string;
}) => {
  const [{ dashboard }, dispatch] = useStore();
  const [saveFav, setSaveFav] = useState<boolean>(false);
  const getNameCompany = (
    companies: Array<BffCompanyType>,
    idCompany: string
  ) => {
    const comp = companies.find(
      (company: BffCompanyType) => company.id === idCompany
    );
    return `${comp?.name}`;
  };

  const changeCompany = async () => {
    const from = getNameCompany(
      dashboard.dashboardInformation.customerInformation.companies,
      dashboard.dashboardInformation.customerInformation.idCompany
    );
    const to = getNameCompany(
      dashboard.dashboardInformation.customerInformation.companies,
      selectedCompany
    );
    dispatch({
      type: 'on',
      payload: {
        from: from,
        to: to,
        display: true,
      },
    });
    setCookie(cookies.selectedCompany, selectedCompany, true);
    if (saveFav)
      await saveFavoriteCompany({
        idCompany: selectedCompany,
        isFavorite: saveFav,
      });

    dispatch({
      type: INIT_DASHBOARD,
    });

    const data = await getDashboardInformation();

    dispatch({
      type: FINISH_DASHBOARD,
      payload: { dashboardInformation: data },
    });

    dispatch({
      type: 'off',
      payload: {
        from: '',
        to: '',
        display: false,
      },
    });
    setSaveFav(false);
    setSelectedCompany('');
  };

  return (
    <SaveCompanyStyle
      saveFav={saveFav}
      selectedCompany={selectedCompany !== '' ? true : false}
    >
      <div>
        <div
          onClick={() => selectedCompany && setSaveFav(!saveFav)}
          id="favorite-company-checkbox"
          data-testid="favorite-company-checkbox"
        />
        <p>Guardar esta empresa como favorita</p>
      </div>

      <button
        onClick={changeCompany}
        id="favorite-company-save-button"
        data-testid="favorite-company-save-button"
        disabled={selectedCompany !== '' ? false : true}
      >
        Cambiar empresa
      </button>
    </SaveCompanyStyle>
  );
};

export default SaveCompany;

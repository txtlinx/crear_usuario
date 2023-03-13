import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Company, MyCompaniesStyle } from './styles';
import { ReactComponent as Star } from '../../../../assets/img/star.svg';
import { elementRequireMarquee } from '../../../../utils/styles';
import { BffCompanyType } from './types';
import useStore from '../../../../hooks/useStore';
import Alert from '../../../atoms/Alert';

const MyCompany = ({
  setSelectedCompany,
  comp,
}: {
  setSelectedCompany: Dispatch<SetStateAction<string>>;
  comp: BffCompanyType;
}) => {
  const [{ dashboard }] = useStore();
  const handlerSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedCompany(e.target.value);
  };
  const [longer, setLonger] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLonger(elementRequireMarquee(ref));
  }, []);

  const selected =
    dashboard?.dashboardInformation?.customerInformation?.idCompany === comp.id;

  return (
    <Company
      data-testid="result-companies"
      selected={selected}
      key={comp.id}
      marquee={longer}
    >
      <div>
        <input
          type="radio"
          name="company"
          data-testid={`enterprise-option-${comp.id}`}
          id={`enterprise-option-${comp.id}`}
          value={comp.id}
          onChange={handlerSelected}
        />
        <i />
      </div>
      <section>
        <div data-marquee="true" ref={ref}>
          <label htmlFor={`enterprise-option-${comp.id}`}>
            <span>{comp.id}</span> - {comp.name}
          </label>
        </div>
      </section>
      {comp.isFavorite && <Star />}
    </Company>
  );
};

const MyCompanies = ({
  enterpriseToSearch,
  setSelectedCompany,
}: {
  enterpriseToSearch: string;
  setSelectedCompany: Dispatch<SetStateAction<string>>;
}) => {
  const [{ dashboard }] = useStore();
  const [companies, setCompanies] = useState<BffCompanyType[]>(
    dashboard?.dashboardInformation?.customerInformation?.companies || []
  );
  useEffect(() => {
    if (dashboard.loading === false) {
      setCompanies(
        dashboard?.dashboardInformation?.customerInformation?.companies || []
      );
    }
  }, [dashboard]);

  useEffect(() => {
    if (dashboard.loading === false) {
      if (enterpriseToSearch.length > 0) {
        const dataFiltered: BffCompanyType[] = companies.filter(
          (comp: BffCompanyType) =>
            comp.name
              .toLowerCase()
              .includes(enterpriseToSearch.toLowerCase()) ||
            comp.id
              .toString()
              .toLowerCase()
              .includes(enterpriseToSearch.toLowerCase())
        );
        setCompanies(dataFiltered);
      } else {
        setCompanies(
          dashboard.dashboardInformation.customerInformation.companies
        );
      }
    }
  }, [enterpriseToSearch]);

  return (
    <MyCompaniesStyle>
      {companies?.length > 0 ? (
        companies.map((comp: BffCompanyType, index: number) => (
          <MyCompany
            key={index}
            setSelectedCompany={setSelectedCompany}
            comp={comp}
          />
        ))
      ) : (
        <Alert type="danger" open={true}>
          No se encontraron coincidencias
        </Alert>
      )}
    </MyCompaniesStyle>
  );
};

export default MyCompanies;

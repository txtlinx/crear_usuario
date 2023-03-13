import { SearcherStyle } from './styles';
import { ReactComponent as Frame } from '../../../../assets/img/Frame.svg';
import { Dispatch, SetStateAction } from 'react';

const Searcher = ({
  enterpriseToSearch,
  setEnterpriseToSearch,
}: {
  enterpriseToSearch: string;
  setEnterpriseToSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <SearcherStyle>
      <div>
        <input
          type="text"
          placeholder="Buscar por el nombre o RUT de la empresa"
          id="input-enterprise-search"
          data-testid="input-enterprise-search"
          value={enterpriseToSearch}
          onChange={(e) => setEnterpriseToSearch(e.target.value)}
        />
        <Frame />
      </div>
    </SearcherStyle>
  );
};

export default Searcher;

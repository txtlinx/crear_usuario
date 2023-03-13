import { PayloadUpdateAlias } from '../components/molecules/Dashboard/SetupAccounts/types';
import { postFromApi } from '../utils/api';
import { getCookie } from '../utils/cookies';
import { parseResponseBody } from '../utils/responseParser';
import { cookies } from '../consts/cookies';

//TODO: change any for response type when response is ready
export const putAliasAccounts = async (
  data: PayloadUpdateAlias
): Promise<any> => {
  try {
    let companyId = getCookie(cookies.selectedCompany);
    const response = await postFromApi({
      url: `/home/company/${companyId}/accountAlias`,
      data: data,
    });
    const res = parseResponseBody(response);
    return res;
  } catch (error) {
    return { hasError: true };
  }
};

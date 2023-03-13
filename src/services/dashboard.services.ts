import { cookies } from '../consts/cookies';
import { getFromApi } from '../utils/api';
import { getCookie } from '../utils/cookies';
import { parseResponseBody } from '../utils/responseParser';
import { closeSession } from '../utils/session';

//TODO: change any for response type when response is ready
export const getDashboardInformation = async (): Promise<any> => {
  try {
    const companyId = getCookie(cookies.selectedCompany);
    const response = await getFromApi({
      url: `/home/company/${companyId}`,
    });
    const { data, hasError } = parseResponseBody(response);
    if (hasError) {
      closeSession();
    }
    return data;
  } catch (error) {
    closeSession();
  }
};

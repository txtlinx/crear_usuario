import { cookies } from '../consts/cookies';
import { postFromApi } from '../utils/api';
import { getCookie } from '../utils/cookies';
import { parseResponseBody } from '../utils/responseParser';

//TODO: change any for response type when response is ready
export const saveFavoriteShortcuts = async (payload: {
  listShortcuts: Array<string>;
}): Promise<any> => {
  try {
    const companyId = getCookie(cookies.selectedCompany);
    const response = await postFromApi({
      url: `/home/company/${companyId}/shortcuts`,
      data: payload,
    });
    return parseResponseBody(response);
  } catch (error) {
    return { hasError: true };
  }
};

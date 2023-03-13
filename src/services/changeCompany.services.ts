import { patchFromApi } from '../utils/api';
import { parseResponseBody } from '../utils/responseParser';

const saveFavoriteCompany = async (payload: {
  idCompany: string;
  isFavorite: boolean;
}): Promise<any> => {
  try {
    const response = await patchFromApi({
      url: `${process.env.REACT_APP_BFF_ACCESS_URL}/auth/companySelect`,
      data: payload,
    });
    const data = parseResponseBody(response);
    return data;
  } catch (error) {
    return { error: true, code: 'GENERIC_ERROR' };
  }
};

export { saveFavoriteCompany };

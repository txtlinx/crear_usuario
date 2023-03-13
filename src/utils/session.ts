import { cookies } from '../consts/cookies';
import { deleteCookie } from './cookies';

export const closeSession = (): void => {
  deleteCookie(cookies.sessionCookie, true);
  deleteCookie(cookies.refreshToken, true);
  deleteCookie(cookies.selectedCompany, true);
  window.location.href = process.env.REACT_APP_ACCESS_MF_URL || '';
};

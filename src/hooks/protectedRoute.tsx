import { Fragment, FunctionComponent } from 'react';
import { cookies } from '../consts/cookies';
import { getCookie } from '../utils/cookies';

const withdProtectedRoute = (Component: FunctionComponent) => {
  const WrappedComponent = (props: Record<string, unknown>) => {
    const sessionCookie = getCookie(cookies.sessionCookie);
    if (!sessionCookie) {
      window.location.assign(process.env.REACT_APP_ACCESS_MF_URL || '');
    }
    return !sessionCookie ? <Fragment></Fragment> : <Component {...props} />;
  };

  return WrappedComponent;
};

export default withdProtectedRoute;

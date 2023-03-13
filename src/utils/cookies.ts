type CookiesProps = { [key: string]: string };

export const getCookie = (name: string): string => {
  const cookies: CookiesProps = document.cookie
    .split(';')
    .reduce((acc: CookiesProps, cookie: string) => {
      const [key, value] = cookie.trim().split('=');
      return { ...acc, [key]: value };
    }, {});
  return cookies[name] || '';
};

export const setCookie = (
  name: string,
  value: string,
  isGlobal: boolean,
  maxAge: number = 600
): void => {
  document.cookie = `${name}=${value};domain=${
    isGlobal ? process.env.REACT_APP_DOMAIN_NAME || '' : ''
  };path=/;max-age=${maxAge};`;
};

export const deleteCookie = (name: string, isGlobal: boolean) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=${
    isGlobal ? process.env.REACT_APP_DOMAIN_NAME || '' : ''
  };path=/`;
};

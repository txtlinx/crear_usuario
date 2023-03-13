import { screenType } from '../../../../utils/screenType';

export const definedScreen = (open: boolean) => {
  const screen = screenType();
  switch (screen) {
    case 'desktop':
      return open ? '90deg' : '270deg';
    case 'tablet':
      return open ? '270deg' : '90deg';
    default:
      return undefined;
  }
};

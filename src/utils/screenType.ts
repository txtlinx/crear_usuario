import { devices } from '../consts/devices';

export const screenType = () => {
  if (window.matchMedia(`(max-width:767px)`).matches) return 'mobile';
  if (
    window.matchMedia(`(min-width: 768px) and (max-width: ${devices.desktop})`)
      .matches
  )
    return 'tablet';
  return 'desktop';
};

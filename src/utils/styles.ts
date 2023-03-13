import { RefObject } from 'react';

export const elementRequireMarquee = (
  ref: RefObject<HTMLDivElement>
): boolean => ref?.current?.offsetWidth !== ref?.current?.scrollWidth;

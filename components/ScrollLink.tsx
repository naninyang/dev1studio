import { createRef, RefObject } from 'react';

export interface ScrollRefs {
  [key: string]: RefObject<HTMLDivElement>;
}

export type ScrollRefKeys = keyof ScrollRefs;

export const scrollRefs: ScrollRefs = {
  summary: createRef() as RefObject<HTMLDivElement>,
  preview: createRef() as RefObject<HTMLDivElement>,
  profile: createRef() as RefObject<HTMLDivElement>,
};

export const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

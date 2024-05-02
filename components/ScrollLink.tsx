import { createRef, RefObject } from 'react';

export interface ScrollRefs {
  [key: string]: RefObject<HTMLDivElement>;
}

export type ScrollRefKeys = keyof ScrollRefs;

export const scrollRefs: ScrollRefs = {
  summary: createRef<HTMLDivElement>(),
  preview: createRef<HTMLDivElement>(),
  profile: createRef<HTMLDivElement>(),
};

export const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

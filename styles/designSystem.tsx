function hexToRgb(hex: string): string {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return `${r}, ${g}, ${b}`;
}

export const hex: { [key: string]: string } = {
  black: '#000000',
  white: '#FFFFFF',
  dark: '#171717',
  light: '#E5C3C3',
  deep: '#050042',
  accent: '#DA3555',
  night: '#212121',
  deepnight: '#221F20',
  gloomy: '#290853',
  rise: '#BD9295',
  daylight: '#A1999A',
  dayrise: '#958378',
};
export const rgba: { [key: string]: string } = {
  black20: `${hexToRgb(hex.black)}, .2`,
  black70: `${hexToRgb(hex.black)}, .7`,
  white20: `${hexToRgb(hex.white)}, .2`,
  white70: `${hexToRgb(hex.white)}, .7`,
};

export const mq = {
  maxExtraSmall: `@media screen and (max-width: ${rem(575)})`,
  minSmall: `@media screen and (min-width: ${rem(576)})`,
  maxSmall: `@media screen and (max-width: ${rem(767)})`,
  minMedium: `@media screen and (min-width: ${rem(768)})`,
  maxMedium: `@media screen and (max-width: ${rem(991)})`,
  minLarge: `@media screen and (min-width: ${rem(992)})`,
  maxLarge: `@media screen and (max-width: ${rem(1199)})`,
  minExtraLarge: `@media screen and (min-width: ${rem(1200)})`,
  maxExtraLarge: `@media screen and (max-width: ${rem(1399)})`,
};

export const ar: { support: string } = {
  support: `@supports not (aspect-ratio: 1)`,
};

export const mixIn: { [key: string]: any } = {
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      flexShrink: 0,
      width: '100%',
      maxWidth: '100%',
    },
  },
  col: {
    flex: '1 0 0%',
  },
  coln: {
    flex: '0 0 auto',
  },
  colAuto: {
    flex: '0 0 auto',
    width: 'auto',
  },
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  screenReaderOnly: {
    position: 'absolute',
    overflow: 'hidden',
    margin: 0,
    width: '1px',
    height: '1px',
    clip: 'rect(1px, 1px, 1px, 1px)',
  },
  visuallyHiddenFocuable: {
    overflow: 'visible',
    zIndex: 20,
    width: 'auto',
    height: 'auto',
    clip: 'auto',
  },
  imageRendering: {
    imageRendering: '-webkit-optimize-contrast',
    backfaceVisibility: 'hidden',
  },
};

export function lineAbbr(clamp: number, height: number, lineheight: number): string {
  return `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${clamp};
  max-height: ${height / 16}rem;
  line-height: ${lineheight};
  `;
}

export function rem(px: number): string {
  const result = px / 16;
  return `${result}rem`;
}

export function vw(px: number, width: number): string {
  const result = (px * 100) / width;
  return `${result}vw`;
}

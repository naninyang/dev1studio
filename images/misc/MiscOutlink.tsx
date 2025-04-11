import { CSSProperties } from 'react';

interface Props {
  style: CSSProperties;
}

export default function MiscOutlink({ style }: Props) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M41.3913 8C39.8953 8 39.1451 9.80858 40.2038 10.8646L44.7819 15.4479L6.11523 54.1146L9.88607 57.8854L48.5527 19.2188L53.1361 23.7969C54.1921 24.8555 56.0007 24.1054 56.0007 22.6094V10.6667C56.0007 9.19467 54.806 8 53.334 8H41.3913Z"
        fill="#A1999A"
      />
    </svg>
  );
}

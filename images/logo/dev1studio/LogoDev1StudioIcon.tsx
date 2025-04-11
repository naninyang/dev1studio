import { CSSProperties } from 'react';

interface Props {
  style: CSSProperties;
}

export default function LogoDev1StudioIcon({ style }: Props) {
  return (
    <svg width="141" height="70" viewBox="0 0 141 70" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M80.123 69.9999V59.9999H70.123V30H80.123V20H130.123V30H140.123V59.9999H130.123V69.9999H80.123Z"
          fill="#89DDFF"
        />
        <path
          d="M20.123 9.99998V0H40.123V9.99998H20.123ZM0.123047 69.9999V59.9999H20.123V30H10.123V20H40.123V59.9999H60.123V69.9999H0.123047Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

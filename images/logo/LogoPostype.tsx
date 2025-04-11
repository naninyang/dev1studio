import { CSSProperties } from 'react';

interface Props {
  style: CSSProperties;
}

export default function LogoPostype({ style }: Props) {
  return (
    <svg width="142" height="142" viewBox="0 0 142 142" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M142 0V142H0V0H142ZM83.1777 31.0625H32.5712V42.9933H41.8638V110.937H52.5301V42.9933H61.8195V110.937H72.4823V89.6249L83.1777 89.6077C99.3422 89.6077 112.446 76.5019 112.446 60.335C112.446 44.1683 99.3422 31.0625 83.1777 31.0625ZM84.2681 43.0436C93.7525 43.0436 101.441 50.7323 101.441 60.2169C101.441 69.7013 93.7525 77.39 84.2681 77.39H72.6862V43.0436H84.2681Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

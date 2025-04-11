import { CSSProperties } from 'react';

interface Props {
  style: CSSProperties;
}

export default function LogoDevelogIcon({ style }: Props) {
  return (
    <svg width="71" height="71" viewBox="0 0 71 71" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M56.6465 56.946V70.9461H42.6465V42.9461H28.6465V70.9461H14.6465V56.9461L0.646484 56.9403V0.946106H70.6465V56.9461L56.6465 56.946ZM56.6465 14.9461H14.6465V28.9461H56.6465V14.9461Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

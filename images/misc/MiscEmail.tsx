import { CSSProperties } from 'react';

interface Props {
  style: CSSProperties;
}

export default function MiscEmail({ style }: Props) {
  return (
    <svg width="33" height="32" viewBox="0 0 33 32" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.83366 5.3335C4.46833 5.3335 3.35424 6.36366 3.19824 7.68766L16.5003 16.0002L29.8024 7.68766C29.6464 6.36366 28.5323 5.3335 27.167 5.3335H5.83366ZM3.16699 10.3361V24.0002C3.16699 25.4735 4.36033 26.6668 5.83366 26.6668H27.167C28.6403 26.6668 29.8337 25.4735 29.8337 24.0002V10.3361L17.2061 18.2267C16.7741 18.4961 16.2266 18.4961 15.7946 18.2267L3.16699 10.3361Z"
        fill="white"
      />
    </svg>
  );
}

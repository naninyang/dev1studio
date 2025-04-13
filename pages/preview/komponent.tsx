import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Anchor from '@/components/Anchor';
import { ScrollRefKeys, scrollRefs, scrollToRef } from '@/components/ScrollLink';
import PreviewDev1studio from './dev1studio';
import MiscOutlink from '@/images/misc/MiscOutlink';
import styles from '@/styles/preview.module.sass';

export function useDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({ query: `(min-width: ${992 / 16}rem)` });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}

const PreviewKomponent = () => {
  const isDesktop = useDesktop();
  const handleScroll = useCallback((section: ScrollRefKeys) => {
    const ref = scrollRefs[section];
    if (ref) {
      scrollToRef(ref);
    }
  }, []);
  return (
    <>
      <div className={styles.preview} ref={scrollRefs.preview} id="preview">
        <div className={styles.content}>
          <h2>
            <span>
              komponent
              <Anchor href="https://komponent.dev1stud.io">
                <MiscOutlink style={{ width: `${64 / 16}rem`, height: `${64 / 16}rem` }} />
              </Anchor>
            </span>
          </h2>
          <p>미리보기 Preview</p>
          <div className={styles.images}>
            {isDesktop ? (
              <>
                <Image src="/images/komponent1.webp" alt="" width="768" height="1080" />
                <Image src="/images/komponent2.webp" alt="" width="768" height="1080" />
                <Image src="/images/komponent3.webp" alt="" width="768" height="1080" />
              </>
            ) : (
              <>
                <Image src="/images/komponent1a.webp" alt="" width="375" height="667" />
                <Image src="/images/komponent2a.webp" alt="" width="375" height="667" />
                <Image src="/images/komponent3a.webp" alt="" width="375" height="667" />
              </>
            )}
          </div>
        </div>
        <button className="scroll-button" type="button" onClick={() => handleScroll('profile')}>
          <span>스크롤을 이동하세요</span>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M43.75 23.1438C43.75 20.375 40.6646 18.7229 38.3604 20.2583L25 29.1667L11.6396 20.2604C9.33542 18.725 6.25 20.375 6.25 23.1438C6.25 24.3021 6.82917 25.3854 7.79375 26.0292L22.6896 35.9583C24.0896 36.8917 25.9125 36.8917 27.3125 35.9583L42.2083 26.0292C43.1708 25.3854 43.75 24.3042 43.75 23.1438Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <PreviewDev1studio />
    </>
  );
};

export default PreviewKomponent;

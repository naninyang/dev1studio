import { useCallback, useEffect, useState } from 'react';
import { isSafari } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';
import Anchor from '@/components/Anchor';
import { ScrollRefKeys, scrollRefs, scrollToRef } from '@/components/ScrollLink';
import LogoKomponentLogo from '@/images/logo/komponent/LogoKomponentLogo';
import styles from '@/styles/summary.module.sass';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: `(max-width: ${991 / 16}rem` });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}

const SummaryKomponent = () => {
  const isMobile = useMobile();
  const handleScroll = useCallback((section: ScrollRefKeys) => {
    const ref = scrollRefs[section];
    if (ref) {
      scrollToRef(ref);
    }
  }, []);
  return (
    <div
      className={styles.summary}
      ref={scrollRefs.summary}
      id="summary"
      style={isSafari ? { backgroundAttachment: 'scroll' } : {}}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.pager} ${styles.prev}`}>
            <Anchor href="/semoview#summary">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8333 39.7298L23.9583 36.6048L14.4368 27.0833L43.75 27.0833L43.75 22.9166L14.4368 22.9166L23.9583 13.3952L20.8333 10.2702L6.10352 25L20.8333 39.7298Z"
                  fill="black"
                />
              </svg>
              <span>세모뷰 요약 보기</span>
            </Anchor>
          </div>
          <div className={styles.item}>
            <div className={styles.thumbnail}>
              <div className={styles['thumbnail-content']}>
                <LogoKomponentLogo
                  style={{
                    width: `${270 / 16}rem`,
                    height: isMobile ? `${34 / 16}rem` : `${270 / 16}rem`,
                    aspectRatio: isMobile ? '270 / 34' : undefined,
                  }}
                />
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles['info-content']}>
                <header>
                  <h2>komponent</h2>
                  <span>
                    <Anchor href="https://komponent.dev1stud.io">https://komponent.dev1stud.io</Anchor>
                  </span>
                </header>
                <ul>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>emotion</li>
                  <li>SASS</li>
                  <li>date-fns</li>
                  <li>Prism.js</li>
                  <li>vercel serverless</li>
                  <li>AWS EC2</li>
                  <li>MariaDB</li>
                  <li>PM2</li>
                  <li>Sentry</li>
                  <li>Github Actions</li>
                </ul>
                <div className={styles.description}>
                  <p>K-components</p>
                  <p>컴포넌트를 국문, 영문으로 코드 작성하고 사용하는 방법을 보여드립니다.</p>
                  <p>현재는 1인 체제로 등록하고 있고, 추후에 초대 방식의 서비스로 업데이트할 계획이 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.pager} ${styles.next}`}>
            <Anchor href="/condition#summary">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.1667 10.2702L26.0417 13.3952L35.5631 22.9167L6.25 22.9167V27.0834L35.5631 27.0834L26.0417 36.6048L29.1667 39.7298L43.8965 25L29.1667 10.2702Z"
                  fill="black"
                />
              </svg>
              <span>컨디션스튜디오 요약 보기</span>
            </Anchor>
          </div>
        </div>
      </div>
      <button className="scroll-button" type="button" onClick={() => handleScroll('preview')}>
        <span>스크롤을 이동하세요</span>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M43.75 23.1438C43.75 20.375 40.6646 18.7229 38.3604 20.2583L25 29.1667L11.6396 20.2604C9.33542 18.725 6.25 20.375 6.25 23.1438C6.25 24.3021 6.82917 25.3854 7.79375 26.0292L22.6896 35.9583C24.0896 36.8917 25.9125 36.8917 27.3125 35.9583L42.2083 26.0292C43.1708 25.3854 43.75 24.3042 43.75 23.1438Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default SummaryKomponent;

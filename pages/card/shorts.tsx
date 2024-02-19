import { useCallback, useState } from 'react';
import { isSafari } from 'react-device-detect';
import styled from '@emotion/styled';
import { images } from '@/images';
import AnchorLink from '@/components/AnchorLink';
import { ScrollRefKeys, scrollRefs, scrollToRef } from '@/components/ScrollLink';
import { rem } from '@/styles/designSystem';
import styles from '@/styles/card.module.sass';

const Icon = styled.i({
  background: `url(${images.logo.shorts.icon}) no-repeat 50% 50%/contain`,
  width: rem(60),
  height: rem(70),
});

const Typo = styled.i({
  background: `url(${images.logo.shorts.typo}) no-repeat 50% 50%/contain`,
  width: rem(127),
  height: rem(15),
});

const CardShorts = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleScroll = useCallback((section: ScrollRefKeys) => {
    const ref = scrollRefs[section];
    if (ref) {
      scrollToRef(ref);
    }
  }, []);

  return (
    <div className={styles.card} style={isSafari ? { backgroundAttachment: 'scroll' } : {}}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.pager} ${styles.prev}`}>
            <AnchorLink href="/develog">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8333 39.7298L23.9583 36.6048L14.4368 27.0833L43.75 27.0833L43.75 22.9166L14.4368 22.9166L23.9583 13.3952L20.8333 10.2702L6.10352 25L20.8333 39.7298Z"
                  fill="black"
                />
              </svg>
              <span>디벨로그 카드보기</span>
            </AnchorLink>
          </div>
          <div className={styles.item}>
            <div className={`${styles['item-front']} ${isActive ? styles.active : ''}`}>
              <header>
                <span>DEV1L</span>
                <strong>short.view.news</strong>
              </header>
              <div className={styles.logo}>
                <div className={styles['logo-img']}>
                  <Icon />
                </div>
                <div className={styles['logo-btn']}>
                  <button type="button" onClick={toggleActive} disabled={!isActive}>
                    <span>뒷면 보기</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.7">
                        <path
                          d="M4.58333 2.25006L2.25 4.58339L4.58333 6.91673V5.16673H8.66667C10.2846 5.16673 11.5833 6.46542 11.5833 8.0834C11.5833 9.70137 10.2846 11.0001 8.66667 11.0001H2.83333V12.1667H8.66667C10.915 12.1667 12.75 10.3318 12.75 8.0834C12.75 5.83503 10.915 4.00006 8.66667 4.00006H4.58333V2.25006Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <footer>https://shorts.dev1stud.io</footer>
            </div>
            <div className={`${styles['item-back']} ${!isActive ? styles.active : ''}`}>
              <header>
                <div className={styles.primary}>
                  <span>DEV1L</span>
                  <strong>short.view.news</strong>
                </div>
                <div className={styles.secondary}>데브런닷스튜디오 숏뷰뉴스</div>
              </header>
              <div className={styles.logo}>
                <div className={styles['logo-img']}>
                  <Typo />
                </div>
                <div className={styles['logo-btn']}>
                  <button type="button" onClick={toggleActive} disabled={isActive}>
                    <span>앞면 보기</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.7">
                        <path
                          d="M4.58333 2.25006L2.25 4.58339L4.58333 6.91673V5.16673H8.66667C10.2846 5.16673 11.5833 6.46542 11.5833 8.0834C11.5833 9.70137 10.2846 11.0001 8.66667 11.0001H2.83333V12.1667H8.66667C10.915 12.1667 12.75 10.3318 12.75 8.0834C12.75 5.83503 10.915 4.00006 8.66667 4.00006H4.58333V2.25006Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <footer>
                <div className={styles.primary}>https://shorts.dev1stud.io</div>
                <div className={styles.secondary}>쇼츠닷데브원스튜드닷아이오</div>
              </footer>
            </div>
          </div>
          <div className={`${styles.pager} ${styles.next}`}>
            <AnchorLink href="/memorial">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.1667 10.2702L26.0417 13.3952L35.5631 22.9167L6.25 22.9167V27.0834L35.5631 27.0834L26.0417 36.6048L29.1667 39.7298L43.8965 25L29.1667 10.2702Z"
                  fill="black"
                />
              </svg>
              <span>기억뉴스상자 카드보기</span>
            </AnchorLink>
          </div>
        </div>
      </div>
      <button className="scroll-button" type="button" onClick={() => handleScroll('summary')}>
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

export default CardShorts;

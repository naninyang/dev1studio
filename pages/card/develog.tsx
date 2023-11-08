import { useState } from 'react';
import styled from '@emotion/styled';
import { images } from '@/images';
import AnchorLink from '@/components/AnchorLink';
import { rem } from '@/styles/designSystem';
import styles from '@/styles/card.module.sass';

const Icon = styled.i({
  background: `url(${images.logo.develog.icon}) no-repeat 50% 50%/contain`,
  width: rem(126),
  height: rem(126),
});

const Typo = styled.i({
  background: `url(${images.logo.develog.typo}) no-repeat 50% 50%/contain`,
  width: rem(154),
  height: rem(47),
});

const CardDevelog = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.pager} ${styles.prev}`}>
            <AnchorLink href="/dev1studio">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8333 39.7298L23.9583 36.6048L14.4368 27.0833L43.75 27.0833L43.75 22.9166L14.4368 22.9166L23.9583 13.3952L20.8333 10.2702L6.10352 25L20.8333 39.7298Z"
                  fill="black"
                />
              </svg>
              <span>데브런닷스튜디오 카드보기</span>
            </AnchorLink>
          </div>
          <div className={styles.item}>
            <div className={`${styles['item-front']} ${isActive ? styles.active : ''}`}>
              <header>
                <span>DEV1L.studio</span>
                <strong>develog</strong>
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
                  I
                </div>
              </div>
              <footer>https://develog.dev1stud.io</footer>
            </div>
            <div className={`${styles['item-back']} ${!isActive ? styles.active : ''}`}>
              <header>
                <div className={styles.primary}>
                  <span>DEV1L.studio</span>
                  <strong>develog</strong>
                </div>
                <div className={styles.secondary}>데브런닷스튜디오 디벨로그</div>
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
                <div className={styles.primary}>https://develog.dev1stud.io</div>
                <div className={styles.secondary}>디벨로그닷데브원스튜드닷아이오</div>
              </footer>
            </div>
          </div>
          <div className={`${styles.pager} ${styles.next}`}>
            <AnchorLink href="/news">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.1667 10.2702L26.0417 13.3952L35.5631 22.9167L6.25 22.9167V27.0834L35.5631 27.0834L26.0417 36.6048L29.1667 39.7298L43.8965 25L29.1667 10.2702Z"
                  fill="black"
                />
              </svg>
              <span>숏뷰뉴스 카드보기</span>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDevelog;

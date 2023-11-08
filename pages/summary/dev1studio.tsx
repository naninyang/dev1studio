import styled from '@emotion/styled';
import { images } from '@/images';
import AnchorLink from '@/components/AnchorLink';
import { mq, rem } from '@/styles/designSystem';
import styles from '@/styles/summary.module.sass';

const Logo = styled.i({
  background: `url(${images.logo.dev1studio.logo}) no-repeat 50% 50%/contain`,
  width: '100%',
  [mq.maxMedium]: {
    aspectRatio: '270 / 34',
    margin: rem(5),
    maxHeight: rem(35),
  },
  [mq.minLarge]: {
    width: rem(270),
    height: rem(34),
  },
});

const SummaryDev1studio = () => {
  return (
    <div className={styles.summary} id="summary">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.pager} ${styles.prev}`}>
            <AnchorLink href="/news#summary">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8333 39.7298L23.9583 36.6048L14.4368 27.0833L43.75 27.0833L43.75 22.9166L14.4368 22.9166L23.9583 13.3952L20.8333 10.2702L6.10352 25L20.8333 39.7298Z"
                  fill="black"
                />
              </svg>
              <span>숏뷰뉴스 써머리보기</span>
            </AnchorLink>
          </div>
          <div className={styles.item}>
            <div className={styles.thumbnail}>
              <div className={styles['thumbnail-content']}>
                <Logo />
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles['info-content']}>
                <header>
                  <h2>DEV1L.studio</h2>
                  <span>https://dev1stud.io</span>
                </header>
                <ul>
                  <li>Next.js</li>
                </ul>
                <div className={styles.description}>
                  <p>
                    DEV1L.studio 도메인에서 관리하는 개인 마이크로 프로젝트 소개하는 웹사이트. O612가 작업했던
                    포트폴리오도 확인할 수 있습니다.
                  </p>
                  <p>
                    <strong>작업물 캡쳐를 유실해서 일부만 올렸습니다.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.pager} ${styles.next}`}>
            <AnchorLink href="/develog#summary">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.1667 10.2702L26.0417 13.3952L35.5631 22.9167L6.25 22.9167V27.0834L35.5631 27.0834L26.0417 36.6048L29.1667 39.7298L43.8965 25L29.1667 10.2702Z"
                  fill="black"
                />
              </svg>
              <span>디벨로그 써머리보기</span>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryDev1studio;

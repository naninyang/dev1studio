import styled from '@emotion/styled';
import { images } from '@/images';
import AnchorLink from '@/components/AnchorLink';
import { rem } from '@/styles/designSystem';
import styles from '@/styles/summary.module.sass';

const Logo = styled.i({
  background: `url(${images.logo.develog.logo}) no-repeat 50% 50%/contain`,
  width: rem(270),
  height: rem(70),
});

const SummaryDevelog = () => {
  return (
    <div className={styles.summary} id="summary">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.pager} ${styles.prev}`}>
            <AnchorLink href="/dev1studio#summary">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8333 39.7298L23.9583 36.6048L14.4368 27.0833L43.75 27.0833L43.75 22.9166L14.4368 22.9166L23.9583 13.3952L20.8333 10.2702L6.10352 25L20.8333 39.7298Z"
                  fill="black"
                />
              </svg>
              <span>데브런닷스튜디오 써머리보기</span>
            </AnchorLink>
          </div>
          <div className={styles.item}>
            <div className={styles.thumbnail}>
              <Logo />
            </div>
            <div className={styles.info}>
              <header>
                <h2>O612 develog</h2>
                <span>
                  <AnchorLink href="https://develog.dev1stud.io">https://develog.dev1stud.io</AnchorLink>
                </span>
              </header>
              <ul>
                <li>react</li>
                <li>gatsby</li>
                <li>netlify-cms-app</li>
                <li>react-helmet</li>
                <li>emotion</li>
                <li>lodash</li>
                <li>prop-types</li>
                <li>highlight-code</li>
                <li>SASS</li>
                <li>UUID</li>
              </ul>
              <div className={styles.description}>
                <p>O612의 개발 블로그.</p>
                <p>웹퍼블리셔로서 프론트엔드 개발하면서 힘들었던 부분들에 대해서 글과 코드로 풀어봅니다.</p>
                <p>현재 포스타입Postype에 올린 글들을 옮기는 작업을 진행하고 있습니다.</p>
              </div>
            </div>
          </div>
          <div className={`${styles.pager} ${styles.next}`}>
            <AnchorLink href="/news#summary">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.1667 10.2702L26.0417 13.3952L35.5631 22.9167L6.25 22.9167V27.0834L35.5631 27.0834L26.0417 36.6048L29.1667 39.7298L43.8965 25L29.1667 10.2702Z"
                  fill="black"
                />
              </svg>
              <span>숏뷰뉴스 써머리보기</span>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryDevelog;

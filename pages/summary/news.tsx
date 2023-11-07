import styled from '@emotion/styled';
import { images } from '@/images';
import AnchorLink from '@/components/AnchorLink';
import { rem } from '@/styles/designSystem';
import styles from '@/styles/summary.module.sass';

const Logo = styled.i({
  background: `url(${images.logo.news.logo}) no-repeat 50% 50%/contain`,
  width: rem(270),
  height: rem(33),
});

const SummaryNews = () => {
  return (
    <div className={styles.summary} id="summary">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.pager} ${styles.prev}`}>
            <AnchorLink href="/develog#summary">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.8333 39.7298L23.9583 36.6048L14.4368 27.0833L43.75 27.0833L43.75 22.9166L14.4368 22.9166L23.9583 13.3952L20.8333 10.2702L6.10352 25L20.8333 39.7298Z"
                  fill="black"
                />
              </svg>
              <span>디벨로그 써머리보기</span>
            </AnchorLink>
          </div>
          <div className={styles.item}>
            <div className={styles.thumbnail}>
              <Logo />
            </div>
            <div className={styles.info}>
              <header>
                <h2>short.view:news</h2>
                <span>
                  <AnchorLink href="https://news.dev1stud.io">https://news.dev1stud.io</AnchorLink>
                </span>
              </header>
              <ul>
                <li>Next.js</li>
                <li>react-device-detect</li>
                <li>react-modal (Route As Modal)</li>
                <li>TypeScript</li>
                <li>Emotion</li>
                <li>SASS</li>
                <li>Google YouTube iframe API</li>
                <li>Masonry (Masonic)</li>
                <li>Perfect Scrollbar</li>
                <li>pull-to-refresh</li>
                <li>PWA</li>
                <li>SWR (useSWRInfinite)</li>
                <li>Vercel serverless</li>
                <li>jsonwebtoken</li>
                <li>Notion Client</li>
                <li>baselime.io</li>
                <li>Github API</li>
              </ul>
              <div className={styles.description}>
                <p>
                  YouTube 및 NAVER 뉴스에 업로드 된 뉴스를 요약하고 큐레이터 본인의 생각을 짧게 보여주는 서비스입니다.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.pager} ${styles.next}`}>
            <AnchorLink href="/dev1studio#summary">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.1667 10.2702L26.0417 13.3952L35.5631 22.9167L6.25 22.9167V27.0834L35.5631 27.0834L26.0417 36.6048L29.1667 39.7298L43.8965 25L29.1667 10.2702Z"
                  fill="black"
                />
              </svg>
              <span>데브런닷스튜디오 써머리보기</span>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryNews;

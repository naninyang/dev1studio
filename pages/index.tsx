import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Seo from '@/components/Seo';
import AnchorLink from '@/components/AnchorLink';
import { images } from '@/images';
import styles from '@/styles/home.module.sass';

const Splash = styled.div({
  '&::before': {
    background: `url(${images.logo.dev1studio.logo}) no-repeat 50% 50%/contain`,
  },
});

const Enterance = styled.i({
  background: `url(${images.misc.right}) no-repeat 50% 50%/contain`,
});

export default function Home() {
  const [splash, setSplash] = useState(true);
  const timestamp = Date.now();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setSplash(false);
    }, 3200);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <>
      <Seo
        pageDescription="UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리의 포트폴리오"
        pageImg={`https://dev1stud.io/images/og-image.png?ts=${timestamp}`}
      />
      <main className={styles.home}>
        {splash ? (
          <Splash className={styles.splash} />
        ) : (
          <div className={styles.enterance}>
            <AnchorLink href="/dev1studio">
              <span>입장하기</span>
              <Enterance />
            </AnchorLink>
          </div>
        )}
      </main>
    </>
  );
}

import { useEffect, useState } from 'react';
import Seo from '@/components/Seo';
import Anchor from '@/components/Anchor';
import { LogoDev1, MiscRight } from '@/components/Svgs';
import styles from '@/styles/home.module.sass';

export default function Home() {
  const [splash, setSplash] = useState(true);
  const timestamp = Date.now();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setSplash(false);
    }, 3700);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <>
      <Seo
        pageDescription="UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리의 포트폴리오"
        pageImg={`https://dev1stud.io/images/og-img.webp?ts=${timestamp}`}
      />
      <p className="seo">UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리의 포트폴리오</p>
      <main className={styles.home}>
        {splash ? (
          <div className={styles.splash} aria-label={'불러오는 중'}>
            <LogoDev1 />
          </div>
        ) : (
          <div className={styles.enterance}>
            <Anchor href="/sites">
              <span>입장하기</span>
              <MiscRight />
            </Anchor>
          </div>
        )}
      </main>
    </>
  );
}

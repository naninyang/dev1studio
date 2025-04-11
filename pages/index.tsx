import { useEffect, useState } from 'react';
import Seo from '@/components/Seo';
import AnchorLink from '@/components/AnchorLink';
import styles from '@/styles/home.module.sass';
import MiscRight from '@/images/misc/MiscRight';
import LogoDev1StudioLogo from '@/images/logo/dev1studio/LogoDev1StudioLogo';

export default function Home() {
  const [splash, setSplash] = useState(true);
  const timestamp = Date.now();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setSplash(false);
    }, 700);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <>
      <Seo
        pageDescription="UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리의 포트폴리오"
        pageImg={`https://dev1stud.io/images/og-image.webp?ts=${timestamp}`}
      />
      <main className={styles.home}>
        {splash ? (
          <div className={styles.splash} aria-label={'불러오는 중'}>
            <LogoDev1StudioLogo
              style={{
                width: `${270 / 16}rem`,
                height: `${34 / 16}rem`,
              }}
            />
          </div>
        ) : (
          <div className={styles.enterance}>
            <AnchorLink href="/dev1studio">
              <span>입장하기</span>
              <MiscRight
                style={{
                  width: `${20 / 16}rem`,
                  height: `${20 / 16}rem`,
                }}
              />
            </AnchorLink>
          </div>
        )}
      </main>
    </>
  );
}

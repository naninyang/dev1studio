import { useEffect, useState } from 'react';
import Image from 'next/image';
import Seo from '@/components/Seo';
import styles from '@/styles/home.module.sass';

export default function Home() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 DEV1.STUDIO"
        pageDescription="UX 디자인 & 웹퍼블리싱 O612 고아리의 포트폴리오"
        pageImg={`https://dev1stud.io/og-image.png?ts=${timestamp}`}
      />
      <main className={styles.home}>
        {splash && (
          <div className={styles.splash}>
            <Image src="/images/splash.webp" alt="" width="1920" height="1080" />
          </div>
        )}
      </main>
    </>
  );
}

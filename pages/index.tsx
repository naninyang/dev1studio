import { useEffect, useState } from 'react';
import Image from 'next/image';
import Seo from '@/components/Seo';
import styles from '@/styles/home.module.sass';
import styled from '@emotion/styled';
import { images } from '@/images';
import { useRouter } from 'next/router';

const Splash = styled.div({
  '&::before': {
    background: `url(${images.logo.dev1studio.logo}) no-repeat 50% 50%/contain`,
  },
});

export default function Home() {
  const router = useRouter();
  const [splash, setSplash] = useState(true);
  const timestamp = Date.now();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setSplash(false);
    }, 3700);

    return () => clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    const cardTimer = setTimeout(() => {
      router.push('/dev1studio');
    }, 3900);

    return () => clearTimeout(cardTimer);
  }, [router]);

  return (
    <>
      <Seo
        pageDescription="UX 디자인 & 웹퍼블리싱 O612 고아리의 포트폴리오"
        pageImg={`https://dev1stud.io/og-image.png?ts=${timestamp}`}
      />
      <main className={styles.home}>{splash && <Splash className={styles.splash} />}</main>
    </>
  );
}

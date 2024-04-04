import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { images } from '@/images';
import AnchorLink from '@/components/AnchorLink';
import { scrollRefs } from '@/components/ScrollLink';
import PreviewDev1studio from './dev1studio';
import styled from '@emotion/styled';
import styles from '@/styles/preview.module.sass';

const Icon = styled.i({
  background: `url(${images.misc.outlink}) no-repeat 50% 50%/contain`,
});

export function useDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({ query: '(min-width: 992px)' });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}

const PreviewJejeup = () => {
  const isDesktop = useDesktop();
  return (
    <>
      <div className={styles.preview} ref={scrollRefs.preview} id="preview">
        <div className={styles.content}>
          <h2>
            <span>
              jejeup
              <AnchorLink href="https://jejeup.dev1stud.io">
                <Icon />
              </AnchorLink>
            </span>
          </h2>
          <p>미리보기 Preview</p>
          <div className={styles.images}>
            {isDesktop ? (
              <>
                <Image src="/images/jejeup1.webp" alt="" width="768" height="1080" />
                <Image src="/images/jejeup2.webp" alt="" width="768" height="1080" />
                <Image src="/images/jejeup3.webp" alt="" width="768" height="1080" />
              </>
            ) : (
              <>
                <Image src="/images/jejeup1a.webp" alt="" width="375" height="667" />
                <Image src="/images/jejeup2a.webp" alt="" width="375" height="667" />
                <Image src="/images/jejeup3a.webp" alt="" width="375" height="667" />
              </>
            )}
          </div>
        </div>
      </div>
      <PreviewDev1studio />
    </>
  );
};

export default PreviewJejeup;

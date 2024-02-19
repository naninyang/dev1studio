import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { images } from '@/images';
import AnchorLink from '@/components/AnchorLink';
import { scrollRefs } from '@/components/ScrollLink';
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

const PreviewWeabur = () => {
  const isDesktop = useDesktop();
  return (
    <div className={styles.preview} ref={scrollRefs.preview} id="preview">
      <div className={styles.content}>
        <h2>
          <span>
            weabur
            <AnchorLink href="https://openmeta.dev1stud.io">
              <Icon />
            </AnchorLink>
          </span>
        </h2>
        <p>미리보기 Preview</p>
        <div className={styles.images}>
          {isDesktop ? (
            <>
              <Image src="/images/weabur1.webp" alt="" width="768" height="1080" />
              <Image src="/images/weabur2.webp" alt="" width="768" height="1080" />
              <Image src="/images/weabur3.webp" alt="" width="768" height="1080" />
            </>
          ) : (
            <>
              <Image src="/images/weabur1a.webp" alt="" width="375" height="667" />
              <Image src="/images/weabur2a.webp" alt="" width="375" height="667" />
              <Image src="/images/weabur3a.webp" alt="" width="375" height="667" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewWeabur;

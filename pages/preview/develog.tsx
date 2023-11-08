import AnchorLink from '@/components/AnchorLink';
import { images } from '@/images';
import styles from '@/styles/preview.module.sass';
import styled from '@emotion/styled';
import Image from 'next/image';

const Icon = styled.i({
  background: `url(${images.misc.outlink}) no-repeat 50% 50%/contain`,
});

const PreviewDevelog = () => {
  return (
    <div className={styles.preview}>
      <div className={styles.content}>
        <h2>
          <span>
            O612 develog
            <AnchorLink href="https://develog.dev1stud.io">
              <Icon />
            </AnchorLink>
          </span>
        </h2>
        <p>미리보기 Preview</p>
        <div className={styles.images}>
          <Image src="/images/develog1.webp" alt="" width="614" height="1030" className={styles.left} />
          <Image src="/images/develog2.webp" alt="" width="740" height="848" className={styles.center} />
          <Image src="/images/develog3.webp" alt="" width="603" height="739" className={styles.right} />
        </div>
      </div>
    </div>
  );
};

export default PreviewDevelog;

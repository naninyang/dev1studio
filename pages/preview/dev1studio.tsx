import { images } from '@/images';
import { scrollRefs } from '@/components/ScrollLink';
import styled from '@emotion/styled';
import styles from '@/styles/preview.module.sass';

const Primary = styled.i({
  background: `url(${images.portfolio.primary}) no-repeat 50% 50%/contain`,
});

const Hero = styled.i({
  background: `url(${images.portfolio.hero}) no-repeat 50% 50%/contain`,
});

const Secondary = styled.i({
  background: `url(${images.portfolio.secondary}) no-repeat 50% 50%/contain`,
});

const PreviewDev1studio = () => {
  return (
    <div className={styles.dev1studio} ref={scrollRefs.preview} id="preview">
      <p>
        포트폴리오는 <strong>준비중</strong>
      </p>
      <div className={styles.visual}>
        <Primary className={styles.primary} />
        <Hero className={styles.hero} />
        <Secondary className={styles.secondary} />
      </div>
    </div>
  );
};

export default PreviewDev1studio;

import styled from '@emotion/styled';
import { images } from '@/images';
import { scrollRefs } from '@/components/ScrollLink';
import styles from '@/styles/preview.module.sass';
import { rem } from '@/styles/designSystem';

const PortfolioNormal = styled.i({
  background: `url(${images.profile.portfolio.english}) no-repeat 50% 50%/contain`,
  width: rem(453),
  height: rem(184),
});

const PortfolioHover = styled.i({
  background: `url(${images.profile.portfolio.korean}) no-repeat 0 50%/cover`,
  width: rem(289),
  height: rem(59),
});

const ResumeNormal = styled.i({
  background: `url(${images.profile.resume.english}) no-repeat 50% 50%/contain`,
  width: rem(322),
  height: rem(99),
});

const ResumeHover = styled.i({
  background: `url(${images.profile.resume.korean}) no-repeat 0 50%/cover`,
  width: rem(162),
  height: rem(59),
});

const PreviewDev1studio = () => {
  return (
    <div className={styles.dev1studio} ref={scrollRefs.preview} id="preview">
      <div className={styles.profile}>
        <button type="button">
          <span>포트폴리오</span>
          <PortfolioNormal />
          <PortfolioHover />
        </button>
        <button type="button">
          <span>이력서</span>
          <ResumeNormal />
          <ResumeHover />
        </button>
      </div>
    </div>
  );
};

export default PreviewDev1studio;

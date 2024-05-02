import { useState } from 'react';
import styled from '@emotion/styled';
import { images } from '@/images';
import { scrollRefs } from '@/components/ScrollLink';
import AnchorLink from '@/components/AnchorLink';
import Portfolio from '../profile/portfolio';
import { mq, rem } from '@/styles/designSystem';
import styles from '@/styles/preview.module.sass';

const PortfolioNormal = styled.i({
  background: `url(${images.profile.portfolio.english}) no-repeat 50% 50%/contain`,
  width: rem(151),
  height: rem(61),
  [mq.minLarge]: {
    width: rem(453),
    height: rem(184),
  },
});

const PortfolioHover = styled.i({
  background: `url(${images.profile.portfolio.korean}) no-repeat 0 50%/cover`,
  width: rem(96),
  height: rem(20),
  [mq.minLarge]: {
    width: rem(289),
    height: rem(59),
  },
});

const ResumeNormal = styled.i({
  background: `url(${images.profile.resume.english}) no-repeat 50% 50%/contain`,
  width: rem(107),
  height: rem(33),
  [mq.minLarge]: {
    width: rem(322),
    height: rem(99),
  },
});

const ResumeHover = styled.i({
  background: `url(${images.profile.resume.korean}) no-repeat 0 50%/cover`,
  width: rem(54),
  height: rem(20),
  [mq.minLarge]: {
    width: rem(162),
    height: rem(59),
  },
});

const PreviewDev1studio = () => {
  const [isPortfolio, setIsPortfolio] = useState(false);

  const handlePortfolio = () => {
    setIsPortfolio(true);
  };

  return (
    <>
      {!isPortfolio && (
        <div className={styles.dev1studio} ref={scrollRefs.profile} id="profile">
          <div className={styles.profile}>
            <button type="button" onClick={handlePortfolio}>
              <span>포트폴리오</span>
              <PortfolioNormal />
              <PortfolioHover />
            </button>
            <AnchorLink href="/profile/resume" target="_blank">
              <span>이력서</span>
              <ResumeNormal />
              <ResumeHover />
            </AnchorLink>
          </div>
        </div>
      )}
      {isPortfolio && <Portfolio onClose={() => setIsPortfolio(false)} />}
    </>
  );
};

export default PreviewDev1studio;

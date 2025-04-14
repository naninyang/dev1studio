import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { isSafari } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';
import { scrollRefs } from '@/components/ScrollLink';
import ProfilePortfolioEng from '@/images/profile/ProfilePortfolioEng';
import ProfilePortfolioKor from '@/images/profile/ProfilePortfolioKor';
import ProfileResumeEng from '@/images/profile/ProfileResumeEng';
import ProfileResumeKor from '@/images/profile/ProfileResumeKor';
import Portfolio from '../profile/portfolio';
import styles from '@/styles/preview.module.sass';

export function useDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({ query: `(min-width: ${992 / 16}rem` });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}

const PreviewDev1studio = () => {
  const isDesktop = useDesktop();
  const [isPortfolio, setIsPortfolio] = useState(false);
  const portfolioRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const dialog = portfolioRef.current;
      if (!dialog || !dialog.open) return;

      if (event.target === dialog) {
        dialog.close();
        setIsPortfolio(false);
      }
    };

    const dialog = portfolioRef.current;
    dialog?.addEventListener('mousedown', handleOutsideClick);

    return () => {
      dialog?.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const openDialog = () => {
    portfolioRef.current?.showModal();
    setIsPortfolio(true);
  };

  const closeDialog = () => {
    portfolioRef.current?.close();
    setIsPortfolio(false);
  };

  return (
    <div
      className={`${styles.dev1studio} ${isSafari ? styles.safar1studio : ''}`}
      ref={scrollRefs.profile}
      id="profile"
    >
      <div className={styles.profile}>
        <button type="button" onClick={() => openDialog()}>
          <span>포트폴리오</span>
          <ProfilePortfolioEng
            style={{
              width: isDesktop ? `${453 / 16}rem` : `${153 / 16}rem`,
              height: isDesktop ? `${184 / 16}rem` : `${61 / 16}rem`,
            }}
          />
          <ProfilePortfolioKor
            style={{
              width: isDesktop ? `${289 / 16}rem` : `${96 / 16}rem`,
              height: isDesktop ? `${59 / 16}rem` : `${20 / 16}rem`,
            }}
          />
        </button>
        <Link href="/profile/resume" target="_blank">
          <span>이력서</span>
          <ProfileResumeEng
            style={{
              width: isDesktop ? `${322 / 16}rem` : `${107 / 16}rem`,
              height: isDesktop ? `${99 / 16}rem` : `${33 / 16}rem`,
            }}
          />
          <ProfileResumeKor
            style={{
              width: isDesktop ? `${162 / 16}rem` : `${54 / 16}rem`,
              height: isDesktop ? `${59 / 16}rem` : `${20 / 16}rem`,
            }}
          />
        </Link>
      </div>
      <dialog ref={portfolioRef}>{isPortfolio && <Portfolio onClose={() => closeDialog()} />}</dialog>
    </div>
  );
};

export default PreviewDev1studio;

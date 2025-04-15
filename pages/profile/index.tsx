import { useEffect, useRef, useState } from 'react';
import { isSafari } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';
import Anchor from '@/components/Anchor';
import { ProfilePortfolioEng, ProfilePortfolioKor, ProfileResumeEng, ProfileResumeKor } from '@/components/Svgs';
import Portfolio from '../profile/portfolio';
import styles from '@/styles/profile.module.sass';

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
    <main className={`${styles.main} ${isSafari ? styles.safar1studio : ''}`} id="profile">
      <div className={styles.profile}>
        <button type="button" onClick={() => openDialog()}>
          <span>포트폴리오</span>
          <ProfilePortfolioEng />
          <ProfilePortfolioKor />
        </button>
        <Anchor href="/profile/resume">
          <span>이력서</span>
          <ProfileResumeEng />
          <ProfileResumeKor />
        </Anchor>
      </div>
      <dialog ref={portfolioRef}>{isPortfolio && <Portfolio onClose={() => closeDialog()} />}</dialog>
    </main>
  );
};

export default PreviewDev1studio;

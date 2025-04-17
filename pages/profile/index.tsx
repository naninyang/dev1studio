import { useEffect, useRef, useState } from 'react';
import { isIOS, isAndroid } from 'react-device-detect';
import Anchor from '@/components/Anchor';
import Seo, { originTitle } from '@/components/Seo';
import { ProfilePortfolioEng, ProfilePortfolioKor, ProfileResumeEng, ProfileResumeKor } from '@/components/Svgs';
import Portfolio from './portfolio';
import styles from '@/styles/profile.module.sass';

const PreviewDev1studio = () => {
  const [isPortfolio, setIsPortfolio] = useState(false);
  const portfolioRef = useRef<HTMLDialogElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isAppleOs, setIsAppleOs] = useState(false);

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

  const isIPadOS = () => {
    return navigator.userAgent.includes('Macintosh') && 'ontouchend' in document;
  };
  useEffect(() => {
    setIsAppleOs(isIOS || isIPadOS);
    setIsMobile(isIOS || isAndroid || isIPadOS);
  }, []);

  const openDialog = () => {
    portfolioRef.current?.showModal();
    setIsPortfolio(true);
  };

  const closeDialog = () => {
    portfolioRef.current?.close();
    setIsPortfolio(false);
  };

  const timestamp = Date.now();

  return (
    <main className={`${styles.main} ${isAppleOs ? styles.safar1studio : ''}`}>
      <Seo
        pageTitles={`DEV1L.sites - ${originTitle}`}
        pageTitle={`DEV1L.sites`}
        pageDescription={`UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리의 프로필.`}
        pageImg={`https://dev1stud.io/images/og-image.webp?ts=${timestamp}`}
      />
      <p className="seo">UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리의 포트폴리오와 이력서</p>
      <h1>Profile</h1>
      <div className={styles.profile}>
        <button type="button" onClick={() => openDialog()} className={isMobile ? styles.touch : ''}>
          <span>{isMobile ? 'true' : 'false'} 포트폴리오</span>
          <ProfilePortfolioEng />
          <ProfilePortfolioKor />
        </button>
        <Anchor href="/profile/resume" className={isMobile ? styles.touch : ''}>
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

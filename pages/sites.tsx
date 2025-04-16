import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import Anchor from '@/components/Anchor';
import Seo, { originTitle } from '@/components/Seo';
import styles from '@/styles/sites.module.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Site = {
  id: string;
  siteName: string;
  siteShort: string;
  siteUrl: string;
  siteKoName: string;
  siteKoUrl: string;
  desc: string;
  skill: string[];
  timestamp: string[];
  order: number;
};

export function useDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({ query: `(min-width: ${992 / 16}rem)` });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}

export default function Sites() {
  const [sites, setSites] = useState<Site[]>([]);
  const [isFront, setIsFront] = useState(true);
  const [activePreview, setActivePreview] = useState<Site | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isDesktop = useDesktop();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const dialog = dialogRef.current;
      if (!dialog || !dialog.open) return;

      if (event.target === dialog) {
        dialog.close();
        setActivePreview(null);
      }
    };

    const dialog = dialogRef.current;
    dialog?.addEventListener('mousedown', handleOutsideClick);

    return () => {
      dialog?.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    fetch('/api/sites')
      .then((res) => res.json())
      .then((data) => setSites(data))
      .catch((err) => console.error(err));
  }, []);

  const toggleActive = () => {
    setIsFront(!isFront);
  };

  const openDialog = (site: Site) => {
    setActivePreview(site);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setActivePreview(null);
  };

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className={styles.pager}>
      <button
        type="button"
        onClick={() => {
          setIsFront(true);
          onClick?.();
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.8333 39.7298L23.9583 36.6048L14.4368 27.0833L43.75 27.0833L43.75 22.9166L14.4368 22.9166L23.9583 13.3952L20.8333 10.2702L6.10352 25L20.8333 39.7298Z"
            fill="black"
          />
        </svg>
        <span>이전 사이트 보기</span>
      </button>
    </div>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className={styles.pager}>
      <button
        type="button"
        onClick={() => {
          setIsFront(true);
          onClick?.();
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.1667 10.2702L26.0417 13.3952L35.5631 22.9167L6.25 22.9167V27.0834L35.5631 27.0834L26.0417 36.6048L29.1667 39.7298L43.8965 25L29.1667 10.2702Z"
            fill="black"
          />
        </svg>
        <span>다음 사이트 보기</span>
      </button>
    </div>
  );

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const timestamp = Date.now();

  return (
    <main className={styles.main}>
      <Seo
        pageTitles={`DEV1L.sites - ${originTitle}`}
        pageTitle={`DEV1L.sites`}
        pageDescription={`UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리가 만든 개인 사이트 모음`}
        pageImg={`https://dev1stud.io/images/og-image.webp?ts=${timestamp}`}
      />
      <p className="seo">UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리가 만든 개인 사이트 모음</p>
      <h1>DEV1L.sites</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          {sites.length > 0 ? (
            <Slider {...settings}>
              {sites.map((site, index) => (
                <div key={index} className={styles.item}>
                  <div className={`${styles['item-front']} ${isFront ? styles.active : ''}`}>
                    <header>
                      <span>DEV1L.</span>
                      <strong>{site.siteShort === 'dev1studios' ? 'studios' : site.siteName}</strong>
                    </header>
                    <div className={styles.logo}>
                      <div className={styles['logo-img']}>
                        <i
                          style={{
                            backgroundImage: `url(https://cdn.dev1stud.io/dev1studios/logo-${site.siteShort}.svg?t=${timestamp})`,
                          }}
                        />
                      </div>
                      <div className={styles['logo-btn']}>
                        <button type="button" onClick={toggleActive} disabled={!isFront}>
                          <span>뒷면 보기</span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.7">
                              <path
                                d="M4.58333 2.25006L2.25 4.58339L4.58333 6.91673V5.16673H8.66667C10.2846 5.16673 11.5833 6.46542 11.5833 8.0834C11.5833 9.70137 10.2846 11.0001 8.66667 11.0001H2.83333V12.1667H8.66667C10.915 12.1667 12.75 10.3318 12.75 8.0834C12.75 5.83503 10.915 4.00006 8.66667 4.00006H4.58333V2.25006Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <footer>
                      <div className={styles.link}>
                        {site.siteShort === 'dev1studios' || site.siteShort === 'moe' ? (
                          site.siteUrl
                        ) : (
                          <Anchor href={site.siteUrl}>{site.siteUrl}</Anchor>
                        )}
                      </div>
                      {site.siteShort === 'dev1studios' || site.siteShort === 'develog' || site.siteShort === 'moe' ? (
                        <p>!미리보기 없음!</p>
                      ) : (
                        <div className={styles.button}>
                          <button type="button" onClick={() => openDialog(site)}>
                            미리보기
                          </button>
                        </div>
                      )}
                    </footer>
                  </div>
                  <div className={`${styles['item-back']} ${!isFront ? styles.active : ''}`}>
                    <header>
                      <div className={styles.primary}>
                        <span>DEV1L.</span>
                        <strong>{site.siteShort === 'dev1studios' ? 'studios' : site.siteName}</strong>
                      </div>
                      <div className={styles.secondary}>{site.siteKoName}</div>
                    </header>
                    <div className={styles.logo}>
                      <div className={styles['logo-img']}>
                        <ul>
                          {site.skill.map((r, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: r }} />
                          ))}
                        </ul>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: site.desc }} />
                      </div>
                      <div className={styles['logo-btn']}>
                        <button type="button" onClick={toggleActive} disabled={isFront}>
                          <span>앞면 보기</span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.7">
                              <path
                                d="M4.58333 2.25006L2.25 4.58339L4.58333 6.91673V5.16673H8.66667C10.2846 5.16673 11.5833 6.46542 11.5833 8.0834C11.5833 9.70137 10.2846 11.0001 8.66667 11.0001H2.83333V12.1667H8.66667C10.915 12.1667 12.75 10.3318 12.75 8.0834C12.75 5.83503 10.915 4.00006 8.66667 4.00006H4.58333V2.25006Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <footer>
                      <div className={styles.primary}>
                        {site.siteShort === 'dev1studios' || site.siteShort === 'moe' ? (
                          site.siteUrl
                        ) : (
                          <Anchor href={site.siteUrl}>{site.siteUrl}</Anchor>
                        )}
                      </div>
                      <div className={styles.secondary}>
                        {site.siteShort !== 'dev1studios' && `${site.siteKoUrl}닷`}데브원스튜드닷아이오
                      </div>
                      {site.siteShort === 'dev1studios' || site.siteShort === 'develog' || site.siteShort === 'moe' ? (
                        <p>!미리보기 없음!</p>
                      ) : (
                        <div className={styles.button}>
                          <button type="button" onClick={() => openDialog(site)}>
                            미리보기
                          </button>
                        </div>
                      )}
                    </footer>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className={styles.loading}>
              <span>데이터 불러오는 중</span>
              <i />
            </p>
          )}
        </div>
      </div>
      <dialog ref={dialogRef}>
        {activePreview && (
          <div className={styles['dialog-container']}>
            <div className={styles.headline}>
              <h2>{activePreview.siteKoName}</h2>
              <button type="button" onClick={closeDialog}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.99032 4.99018C5.79139 4.99023 5.59699 5.04961 5.43198 5.16073C5.26697 5.27184 5.13884 5.42964 5.06399 5.61395C4.98913 5.79826 4.97094 6.00071 5.01175 6.19542C5.05255 6.39012 5.15049 6.56823 5.29305 6.70698L10.586 11.9999L5.29305 17.2929C5.19708 17.3851 5.12046 17.4954 5.06767 17.6176C5.01489 17.7397 4.987 17.8711 4.98565 18.0042C4.98429 18.1372 5.0095 18.2692 5.05979 18.3924C5.11008 18.5155 5.18444 18.6274 5.27852 18.7215C5.3726 18.8156 5.4845 18.89 5.60768 18.9402C5.73086 18.9905 5.86283 19.0157 5.99587 19.0144C6.12891 19.013 6.26034 18.9851 6.38247 18.9324C6.5046 18.8796 6.61497 18.803 6.70712 18.707L12.0001 13.414L17.2931 18.707C17.3852 18.803 17.4956 18.8796 17.6177 18.9324C17.7398 18.9851 17.8713 19.013 18.0043 19.0144C18.1373 19.0157 18.2693 18.9905 18.3925 18.9402C18.5157 18.89 18.6276 18.8156 18.7217 18.7215C18.8157 18.6274 18.8901 18.5155 18.9404 18.3924C18.9907 18.2692 19.0159 18.1372 19.0145 18.0042C19.0132 17.8711 18.9853 17.7397 18.9325 17.6176C18.8797 17.4954 18.8031 17.3851 18.7071 17.2929L13.4141 11.9999L18.7071 6.70698C18.8516 6.56652 18.9503 6.38567 18.9903 6.18815C19.0302 5.99063 19.0096 5.78565 18.931 5.60007C18.8525 5.41448 18.7197 5.25695 18.5501 5.14812C18.3805 5.03929 18.182 4.98424 17.9806 4.99018C17.7208 4.99792 17.4742 5.1065 17.2931 5.29292L12.0001 10.5859L6.70712 5.29292C6.61393 5.19712 6.50248 5.12098 6.37937 5.06898C6.25625 5.01698 6.12396 4.99019 5.99032 4.99018Z"
                    fill="white"
                  />
                </svg>
                <span>닫기</span>
              </button>
            </div>
            <div className={styles.images}>
              {activePreview.timestamp.map((time, index) => (
                <div className={styles.image} key={index}>
                  <Image
                    src={`https://cdn.dev1stud.io/dev1studios/${activePreview.siteShort}-${isDesktop ? 'pc' : 'mo'}-${time}.webp`}
                    width={isDesktop ? 1641 : 1291}
                    height={isDesktop ? 2361 : 2797}
                    unoptimized
                    priority
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </main>
  );
}

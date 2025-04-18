import { useEffect, useState } from 'react';
import Image from 'next/image';
import { isIOS } from 'react-device-detect';
import { NotionFile } from '@/lib/apis';
import Seo, { originTitle } from '@/components/Seo';
import styles from '@/styles/jasope.module.sass';

type Jasope = {
  id: string;
  name: string;
  kor: string;
  one: string;
  company: string;
  desc: string;
  thumbnail: NotionFile[];
  job: string;
  skill: string[];
  email: string;
};

export default function Jasope() {
  const [jasope, setJasope] = useState<Jasope[]>([]);
  const [isAppleOs, setIsAppleOs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const isIPadOS = () => {
    return navigator.userAgent.includes('Macintosh') && 'ontouchend' in document;
  };
  useEffect(() => {
    setIsAppleOs(isIOS || isIPadOS);
  }, []);

  useEffect(() => {
    fetch('/api/jasope')
      .then((res) => res.json())
      .then((data) => setJasope(data))
      .catch((err) => console.error(err));
  }, []);
  const timestamp = Date.now();
  return (
    <main className={`${styles.main} ${isAppleOs ? styles.safar1studio : ''}`}>
      <Seo
        pageTitles={`자기소개 페이지 - ${originTitle}`}
        pageTitle={`자기소개 페이지`}
        pageDescription={`UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리의 자기소개.`}
        pageImg={`https://dev1stud.io/images/og-jasope.webp?ts=${timestamp}`}
      />
      <p className="seo">UX 디자이너, 웹퍼블리셔 & 프론트엔드 개발자 O612 고아리 자기소개</p>
      <h1>자기소개 페이지</h1>
      {jasope.length > 0 ? (
        <div className={styles.jasope}>
          {jasope.map((item, index) => (
            <article key={index}>
              {item.thumbnail[0]?.file?.url && (
                <div className={styles.thumbnail}>
                  {!hasError && (
                    <Image
                      src="/images/loading.webp"
                      width={270}
                      height={270}
                      alt="이미지 로딩중"
                      className={styles.loading}
                    />
                  )}
                  {hasError && <p style={{ color: 'white' }}>이미지 로딩 실패</p>}
                  <Image
                    src={item.thumbnail[0].file.url}
                    width={1024}
                    height={1024}
                    unoptimized
                    priority
                    alt="이미지 로딩 완료"
                    className={isLoading && !hasError ? styles.isLoading : undefined}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                      setHasError(true);
                      setIsLoading(false);
                    }}
                  />
                </div>
              )}
              <div className={styles.info}>
                <div className={styles.privacy}>
                  <cite>
                    <strong>{item.name}</strong> <span>{item.kor}</span>
                  </cite>
                  <dl>
                    <dt>이메일</dt>
                    <dd>{item.email}</dd>
                  </dl>
                </div>
                <dl>
                  <div className={styles.general}>
                    <dt>직업</dt>
                    <dd>{item.job}</dd>
                    <dt>소속</dt>
                    <dd>{item.company} (자영업)</dd>
                  </div>
                  <div>
                    <dt>기술</dt>
                    <dd>
                      <ul>
                        {item.skill.map((sim, index) => (
                          <li key={index}>{sim}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
                <div className={styles.one} dangerouslySetInnerHTML={{ __html: item.one }} />
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className={styles.loading}>
          <span>데이터 불러오는 중</span>
          <i />
        </p>
      )}
    </main>
  );
}

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { NotionFile } from '@/lib/apis';
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
};

export default function Jasope() {
  const [jasope, setJasope] = useState<Jasope[]>([]);
  useEffect(() => {
    fetch('/api/jasope')
      .then((res) => res.json())
      .then((data) => setJasope(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <main className={styles.main}>
      <h1>자소페</h1>
      {jasope.length > 0 ? (
        <div className={styles.jasope}>
          {jasope.map((item, index) => (
            <article key={index}>
              {item.thumbnail[0]?.file?.url && (
                <div className={styles.thumbnail}>
                  <Image
                    src={item.thumbnail[0].file.url}
                    width={1024}
                    height={1024}
                    unoptimized
                    priority
                    alt={item.name}
                  />
                </div>
              )}
              <div className={styles.info}>
                <cite>
                  <strong>{item.name}</strong> <span>{item.kor}</span>
                </cite>
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

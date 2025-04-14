import Image from 'next/image';
import { Portfolio, PortfolioSite } from '@/types';
import { MiscEmail, MiscHome, MiscSlack } from './Svgs';
import styles from '@/styles/viewer.module.sass';

type Props = {
  data: Portfolio[];
  site: PortfolioSite[];
  version: string;
};

export default function PortfolioPdfView({ data, site, version }: Props) {
  function formatTerm(term: Portfolio['term'], type: string): string {
    if (!term?.start) return '';

    const startDate = new Date(term.start);
    const endDate = term.end ? new Date(term.end) : null;

    const startYear = startDate.getFullYear();
    const startMonth = String(startDate.getMonth() + 1).padStart(2, '0');

    if (!endDate) {
      if (type === 'portfolio') return `${startYear}. ${startMonth}.`;
      else return `${startYear}. ${startMonth}. ~ 운영중`;
    }

    const endYear = endDate.getFullYear();
    const endMonth = String(endDate.getMonth() + 1).padStart(2, '0');

    const isSameYear = startYear === endYear;
    const isSameMonth = startMonth === endMonth;

    if (isSameYear && isSameMonth) {
      return `${startYear}. ${startMonth}.`;
    }

    if (isSameYear && !isSameMonth) {
      return `${startYear}. ${startMonth}. ~ ${endMonth}.`;
    }

    return `${startYear}. ${startMonth}. ~ ${endYear}. ${endMonth}.`;
  }

  return (
    <div className={version === 'screen' ? styles.screen : styles.print}>
      <div className={styles.viewer}>
        <div className={styles.module}>
          <header>
            <div className={styles.cover}>
              <div className={styles.en}>
                <div className={styles.summary}>
                  <p>
                    Figma UX/UI Designer <span>& NextJS Frontend Developer</span>
                  </p>
                  <em>@Chloe Ariko</em>
                </div>
                <h2>Portfolio</h2>
              </div>
              <p>UX/UI 디자이너 & 프론트엔드 개발자 고아리</p>
            </div>
          </header>
        </div>
        {data.map((item, index) => (
          <div className={styles.module} key={index}>
            <section>
              <div className={styles.header}>
                <h3>
                  포트폴리오
                  <span>potfolio</span>
                </h3>
              </div>
              <div className={styles.content}>
                <Image
                  src={`https://cdn.dev1stud.io/dev1studios/${item.name}.webp`}
                  width="450"
                  height="335"
                  unoptimized
                  priority
                  alt=""
                />
                <dl>
                  <div>
                    <dt>클라이언트</dt>
                    <dd>{item.client}</dd>
                  </div>
                  <div>
                    <dt>소속사</dt>
                    <dd>
                      {item.agency} ({item.position}
                      {item.outsourcing && ', 외주건'})
                    </dd>
                  </div>
                  <div className={styles.detail}>
                    <dt>프로젝트명 및 기간</dt>
                    <dd>
                      {item.project} {formatTerm(item.term, 'portfolio')}
                    </dd>
                    <dt>상세내용</dt>
                    <dd className={styles.details}>
                      <ul>
                        {item.version.map((r, i) => (
                          <li key={i}>
                            <span>{r} 버전</span>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {item.role.map((r, i) => (
                          <li key={i}>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                    <dt>사용된 기술</dt>
                    <dd>
                      <ul>
                        {item.skill.map((r, i) => (
                          <li key={i}>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>
          </div>
        ))}
        {site.map((item, index) => (
          <div className={styles.module} key={index}>
            <section>
              <div className={styles.header}>
                <h3>
                  포트폴리오
                  <span>potfolio</span>
                </h3>
              </div>
              <div className={styles.content}>
                <Image
                  src={`https://cdn.dev1stud.io/dev1studios/${item.name}.webp`}
                  width="450"
                  height="335"
                  unoptimized
                  priority
                  alt=""
                />
                <dl>
                  <div>
                    <dt>클라이언트</dt>
                    <dd>{item.company}</dd>
                  </div>
                  <div>
                    <dt>소속사</dt>
                    <dd>
                      {item.company} (대표
                      {item.outsourcing && ', 외주건'})
                    </dd>
                  </div>
                  <div>
                    <dt>웹주소</dt>
                    <dd>{item.url}</dd>
                  </div>
                  <div className={styles.detail}>
                    <dt>프로젝트명 및 기간</dt>
                    <dd>
                      {item.project} {formatTerm(item.term, 'site')}
                    </dd>
                    <dt>상세내용</dt>
                    <dd className={styles.details}>
                      <ul>
                        {item.version.map((r, i) => (
                          <li key={i}>
                            <span>{r} 버전</span>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {item.role.map((r, i) => (
                          <li key={i}>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                    <dt>사용된 기술</dt>
                    <dd>
                      <ul className={styles.skill}>
                        {item.skill.map((r, i) => (
                          <li key={i}>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                    <dt>설명</dt>
                    <dd className={styles.description} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </dl>
              </div>
            </section>
          </div>
        ))}
        <div className={styles.module}>
          <footer>
            <p>프로젝트 문의 및 연락</p>
            <dl>
              <div>
                <dt>
                  <MiscEmail />
                  <span>이메일</span>
                </dt>
                <dd>1157iamari@gmail.com</dd>
              </div>
              <div>
                <dt>
                  <MiscSlack />
                  <span>슬랙</span>
                </dt>
                <dd>https://arisdevelop.slack.com</dd>
              </div>
              <div>
                <dt>
                  <MiscHome />
                  <span>웹사이트</span>
                </dt>
                <dd>https://dev1stud.io</dd>
              </div>
            </dl>
          </footer>
        </div>
      </div>
    </div>
  );
}

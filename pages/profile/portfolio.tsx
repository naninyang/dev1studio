import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import { hex, rem, mixIn, mq } from '@/styles/designSystem';
import Anchor from '@/components/Anchor';
import { MiscEmail, MiscLeft, MiscOutlink, MiscSlack } from '@/components/Svgs';

type PortfolioProps = {
  onClose: () => void;
};

type Portfolio = {
  id: string;
  name: string;
  project: string;
  term: {
    start: string;
    end: string | null;
  } | null;
  client: string;
  agency: string;
  position: string;
  outsourcing: boolean;
  role: string[];
  skill: string[];
  version: string[];
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(25),
  padding: `${rem(82)} ${rem(25)}`,
  width: '100%',
  '&.backhistory': {
    backgroundColor: hex.black,
  },
  '& header': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: `radial-gradient(farthest-side at 100% 100%, rgb(41, 8, 83), rgb(218, 53, 85))`,
    borderRadius: rem(17),
    padding: `${rem(67)} ${rem(47)}`,
    width: '100%',
    minHeight: `calc(100dvh - ${rem(107)})`,
    color: hex.white,
    [mq.maxSmall]: {
      padding: `${rem(47)} ${rem(27)}`,
    },
    '& .cover': {
      display: 'flex',
      flexDirection: 'column',
      gap: rem(127),
      [mq.maxMedium]: {
        gap: rem(62),
      },
      '& .en': {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(27),
        '& button, & a': {
          display: 'flex',
          gap: rem(7),
          background: 'none',
          '& svg': {
            display: 'inline-block',
            width: rem(16),
            height: rem(16),
          },
          '& span': {
            fontSize: rem(16),
            fontWeight: 700,
            lineHeight: 1,
            color: hex.white,
          },
        },
        '& .summary': {
          display: 'flex',
          alignItems: 'flex-end',
          gap: rem(17),
          [mq.maxSmall]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: rem(7),
          },
          '& p': {
            display: 'flex',
            flexDirection: 'column',
            fontSize: rem(36),
            fontWeight: 100,
            lineHeight: 1.19444444,
            [mq.maxMedium]: {
              fontSize: rem(20),
            },
            [mq.maxSmall]: {
              fontSize: rem(16),
            },
          },
          '& em': {
            fontSize: rem(24),
            fontStyle: 'normal',
            fontWeight: 900,
            lineHeight: 1.5,
            [mq.maxMedium]: {
              fontSize: rem(16),
            },
            [mq.maxSmall]: {
              fontSize: rem(14),
            },
          },
        },
      },
      '& h2': {
        fontSize: rem(128),
        fontWeight: 900,
        textTransform: 'uppercase',
        lineHeight: 1,
        [mq.maxMedium]: {
          fontSize: rem(64),
        },
        [mq.maxSmall]: {
          fontSize: rem(32),
        },
      },
      '&>p': {
        fontSize: rem(24),
        lineHeight: 1.20833333,
        [mq.maxMedium]: {
          fontSize: rem(16),
        },
        [mq.maxSmall]: {
          fontSize: rem(14),
        },
      },
    },
  },
  '& section': {
    borderTop: `${rem(2)} solid ${hex.white}`,
    paddingTop: rem(53),
    '&:first-of-type': {
      borderTop: 0,
      paddingTop: 0,
    },
    [mq.maxSmall]: {
      paddingTop: rem(17),
    },
    '& .content': {
      display: 'flex',
      gap: rem(107),
      [mq.maxExtraLarge]: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: rem(57),
      },
      [mq.maxSmall]: {
        gap: rem(27),
      },
      '& img': {
        boxShadow: `0px ${rem(22)} ${rem(70)} ${rem(4)} rgba(0,0,0,0.56)`,
        maxWidth: rem(770),
        width: '100%',
        height: 'auto',
      },
      '& dl': {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(27),
        paddingTop: rem(57),
        [mq.maxExtraLarge]: {
          width: '100%',
          maxWidth: rem(770),
          paddingTop: 0,
        },
        '& div': {
          display: 'flex',
          gap: rem(27),
          fontSize: rem(24),
          lineHeight: 1.20833333,
          [mq.maxMedium]: {
            flexDirection: 'column',
            gap: rem(7),
          },
          '& dt': {
            ...mixIn.coln,
            width: rem(110),
            color: hex.light,
            [mq.maxMedium]: {
              fontSize: rem(14),
            },
          },
          '& dd': {
            ...mixIn.col,
            fontWeight: 700,
            [mq.maxMedium]: {
              fontSize: rem(16),
            },
          },
          '&.detail': {
            flexDirection: 'column',
            gap: rem(12),
            '& dt': {
              ...mixIn.screenReaderOnly,
            },
            '& dd': {
              fontWeight: 400,
              '& ul': {
                display: 'flex',
              },
              '& li': {
                display: 'inline-flex',
                alignItems: 'center',
                gap: rem(4),
                '&::before': {
                  content: '", "',
                },
                '&:first-of-type::before': {
                  display: 'none',
                },
              },
            },
          },
          '& ul.skill': {
            display: 'block!important',
            '& li': {
              display: 'inline-block',
              float: 'left',
              paddingLeft: rem(3),
              '&::before': {
                content: '" / "',
              },
              '&:first-of-type': {
                paddingLeft: 0,
                '&::before': {
                  display: 'none',
                },
              },
              '&:nth-child(4n)': {
                clear: 'left',
                display: 'block',
                paddingLeft: 0,
                '&::before': {
                  display: 'none',
                },
              },
            },
          },
        },
      },
    },
  },
  '& footer': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: rem(32),
    background: `radial-gradient(farthest-side at 100% 100%, rgb(41, 8, 83), rgb(218, 53, 85))`,
    borderRadius: rem(17),
    padding: `${rem(67)} ${rem(47)}`,
    width: '100%',
    minHeight: `calc(100dvh - ${rem(107)})`,
    color: hex.white,
    [mq.maxSmall]: {
      padding: `${rem(67)} ${rem(27)}`,
    },
    '& dl': {
      display: 'flex',
      flexDirection: 'column',
      gap: rem(22),
      fontSize: rem(32),
      fontWeight: 900,
      lineHeight: 1,
      [mq.maxSmall]: {
        fontSize: rem(20),
      },
      '& div': {
        display: 'flex',
        gap: rem(7),
        '& dt span': {
          ...mixIn.screenReaderOnly,
        },
        '& svg': {
          display: 'inline-block',
          width: rem(32),
          height: rem(32),
          [mq.maxSmall]: {
            width: rem(20),
            height: rem(20),
          },
        },
        '& a': {
          color: hex.white,
          '&:hover, &:focus-visible': {
            textDecoration: 'underline',
          },
        },
      },
    },
    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      gap: rem(7),
      textAlign: 'center',
      '& a': {
        display: 'inline-flex',
        alignItems: 'center',
        gap: rem(7),
        backgroundColor: hex.dark,
        borderRadius: rem(7),
        padding: `${rem(5)} ${rem(15)}`,
        fontSize: rem(20),
        lineHeight: 1,
        color: hex.white,
        [mq.maxSmall]: {
          fontSize: rem(14),
        },
      },
      '& svg': {
        display: 'inline-block',
        width: rem(17),
        height: rem(17),
        [mq.maxSmall]: {
          width: rem(10),
          height: rem(10),
        },
      },
    },
    '& button, & > a': {
      display: 'flex',
      gap: rem(7),
      background: 'none',
      '& svg': {
        display: 'inline-block',
        width: rem(16),
        height: rem(16),
      },
      '& span': {
        fontSize: rem(16),
        fontWeight: 700,
        lineHeight: 1,
        color: hex.white,
      },
    },
  },
});

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(53),
  background: `radial-gradient(farthest-side at 100% 100%, rgb(41, 8, 83), rgb(218, 53, 85))`,
  borderRadius: rem(17),
  padding: `${rem(67)} ${rem(47)}`,
  width: '100%',
  minHeight: `calc(100dvh - ${rem(107)})`,
  color: hex.white,
  [mq.maxSmall]: {
    gap: rem(17),
    padding: `${rem(47)} ${rem(27)}`,
  },
  '& h3': {
    display: 'flex',
    alignItems: 'flex-end',
    gap: rem(7),
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1,
    [mq.maxSmall]: {
      fontSize: rem(24),
    },
    '& span': {
      fontSize: rem(24),
      fontWeight: 300,
      textTransform: 'lowercase',
      lineHeight: 1,
      [mq.maxSmall]: {
        fontSize: rem(16),
      },
    },
  },
});

export default function Portfolio({ onClose }: PortfolioProps) {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => res.json())
      .then((data) => setPortfolios(data))
      .catch((err) => console.error(err));
  }, []);

  function formatTerm(term: Portfolio['term']): string {
    if (!term?.start) return '';

    const startDate = new Date(term.start);
    const endDate = term.end ? new Date(term.end) : null;

    const startYear = startDate.getFullYear();
    const startMonth = String(startDate.getMonth() + 1).padStart(2, '0');

    if (!endDate) {
      return `${startYear}. ${startMonth}.`;
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

  const router = useRouter();

  return (
    <Container className={router.asPath === `/profile/portfolio` ? 'backhistory' : ''}>
      <header>
        <div className="cover">
          <div className="en">
            {router.asPath === `/profile/portfolio` ? (
              <Anchor href="/profile">
                <MiscLeft />
                <span>이전화면으로</span>
              </Anchor>
            ) : (
              <button type="button" onClick={onClose}>
                <MiscLeft />
                <span>이전화면으로</span>
              </button>
            )}
            <div className="summary" lang="en">
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
      {portfolios.length > 0 ? (
        <Content>
          <h3>
            포트폴리오
            <span lang="en">Portfolio</span>
          </h3>
          {portfolios.map((portfolio, index) => (
            <section key={index}>
              <div className="content">
                <Image
                  src={`https://cdn.dev1stud.io/dev1studios/${portfolio.name}.webp`}
                  width="770"
                  height="620"
                  unoptimized
                  priority
                  alt=""
                />
                <dl>
                  <div>
                    <dt>클라이언트</dt>
                    <dd>{portfolio.client}</dd>
                  </div>
                  <div>
                    <dt>소속사</dt>
                    <dd>
                      {portfolio.agency} ({portfolio.position}
                      {portfolio.outsourcing && ', 외주건'})
                    </dd>
                  </div>
                  <div className="detail">
                    <dt>프로젝트명 및 기간</dt>
                    <dd>
                      {portfolio.project} {formatTerm(portfolio.term)}
                    </dd>
                    <dt>상세내용</dt>
                    <dd>
                      <ul>
                        {portfolio.version.map((r, i) => (
                          <li key={i}>
                            <span>{r} 버전</span>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {portfolio.role.map((r, i) => (
                          <li key={i}>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                    <dt>사용된 기술</dt>
                    <dd>
                      <ul className="skill">
                        {portfolio.skill.map((r, i) => (
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
          ))}
        </Content>
      ) : (
        <p>불러오는 중입니다...</p>
      )}
      <footer>
        <dl>
          <div>
            <dt>
              <MiscEmail />
              <span>이메일</span>
            </dt>
            <dd>
              <Anchor href="mailto:1157iamari@gmail.com">1157iamari@gmail.com</Anchor>
            </dd>
          </div>
          <div>
            <dt>
              <MiscSlack />
              <span>슬랙</span>
            </dt>
            <dd>
              <Anchor href="https://arisdevelop.slack.com">https://arisdevelop.slack.com</Anchor>
            </dd>
          </div>
        </dl>
        <ul>
          <li>
            <Anchor href="https://cdn.dev1stud.io/dev1studios/portfolio_screen_chloe.pdf">
              <span>포트폴리오 화면용 PDF 파일 받기</span>
              <MiscOutlink />
            </Anchor>
          </li>
          <li>
            <Anchor href="https://cdn.dev1stud.io/dev1studios/portfolio_print_chloe.pdf">
              <span>포트폴리오 프린트용 PDF 파일 받기</span>
              <MiscOutlink />
            </Anchor>
          </li>
        </ul>
        {router.asPath === `/profile/portfolio` ? (
          <Anchor href="/profile">
            <MiscLeft />
            <span>이전화면으로</span>
          </Anchor>
        ) : (
          <button type="button" onClick={onClose}>
            <MiscLeft />
            <span>이전화면으로</span>
          </button>
        )}
      </footer>
    </Container>
  );
}

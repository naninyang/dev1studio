import Image from 'next/image';
import styled from '@emotion/styled';
import { hex, rem, mixIn, mq } from '@/styles/designSystem';
import { images } from '@/images';
import AnchorLink from '@/components/AnchorLink';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(25),
  background: hex.black,
  position: 'relative',
  padding: `${rem(82)} ${rem(25)}`,
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
      '& div[lang]': {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(27),
        '& button': {
          display: 'flex',
          gap: rem(7),
          background: 'none',
          '& i': {
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
        [mq.maxSmall]: {
          width: '100%',
          height: 'auto',
        },
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
            color: hex.rise,
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
        '& i': {
          display: 'inline-block',
          width: rem(32),
          height: rem(32),
          [mq.maxSmall]: {
            fontSize: rem(20),
          },
        },
        '& a': {
          color: hex.white,
          '&:hover, &:focus': {
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
      '& i': {
        display: 'inline-block',
        width: rem(17),
        height: rem(17),
        [mq.maxSmall]: {
          width: rem(10),
          height: rem(10),
        },
      },
    },
    '& button': {
      display: 'flex',
      gap: rem(7),
      background: 'none',
      '& i': {
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
  gap: rem(127),
  background: `radial-gradient(farthest-side at 100% 100%, rgb(41, 8, 83), rgb(218, 53, 85))`,
  borderRadius: rem(17),
  padding: `${rem(67)} ${rem(47)}`,
  width: '100%',
  minHeight: `calc(100dvh - ${rem(107)})`,
  color: hex.white,
  [mq.maxSmall]: {
    gap: rem(62),
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

const BackwardIcon = styled.i({
  background: `url(${images.misc.left}) no-repeat 50% 50%/contain`,
});

const DownIcon = styled.i({
  background: `url(${images.misc.outlink}) no-repeat 50% 50%/contain`,
});

const EmailIcon = styled.i({
  background: `url(${images.misc.email}) no-repeat 50% 50%/contain`,
});

const SlackIcon = styled.i({
  background: `url(${images.misc.slack}) no-repeat 50% 50%/contain`,
});

const Portfolio: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Container>
      <header>
        <div className="cover">
          <div lang="en">
            <button type="button" onClick={onClose}>
              <BackwardIcon />
              <span>이전화면으로</span>
            </button>
            <div className="summary">
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
      <Content>
        <h3>
          포트폴리오
          <span lang="en">Portfolio</span>
        </h3>
        <section>
          <div className="content">
            <Image src="/portfolio/naver.webp" width="770" height="441" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>N Tech Service</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>디와이즈 (프리랜서)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>네이버 개발자센터 리뉴얼 2015.08 ~ 09</dd>
                <dt>상세내용</dt>
                <dd>PC 버전 HTML5 & CSS3</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/prism.webp" width="770" height="441" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>(사)청년창업네트워크프리즘</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>플랜트삼이오 (프리랜서)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>프리즘네트워크 신규 2017.03 ~ 04</dd>
                <dt>상세내용</dt>
                <dd>UX Design, HTML5 & CSS3 & jQuery</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/mingles.webp" width="770" height="441" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>밍글링</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>밍글링 (개발팀장)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>밍글즈 신규 및 운영/유지보수 2019.04 ~ 2021.01</dd>
                <dt>상세내용</dt>
                <dd>HTML5 & CSS3 & jQuery</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/letalk.webp" width="770" height="441" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>비욘드코드</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>밍글링 (개발팀장, 외주건)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>리걸팀톡 신규 2020.03 ~ 2020.06</dd>
                <dt>상세내용</dt>
                <dd>HTML5 & CSS3 & jQuery</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/skilup.webp" width="770" height="364" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>한국에너지공단</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>코드크레인 (프리랜서)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>제로에너지 - 스킬업 2021.10 ~ 2020.11</dd>
                <dt>상세내용</dt>
                <dd>ReactJS Web publishing (JavaScript & Styled Emotion & SASS)</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/mobilif.webp" width="770" height="364" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>모빌리프</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>코드크레인 (프리랜서)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>모빌리프 2021.10 ~ 2020.11</dd>
                <dt>상세내용</dt>
                <dd>ReactJS Web publishing (JavaScript & Styled Emotion & SASS)</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/reviews.webp" width="770" height="442" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>코드크레인</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>코드크레인 (프리랜서)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>데이터크레인 리뷰스 애널리틱스 2021.10 ~ 2020.11</dd>
                <dt>상세내용</dt>
                <dd>ReactJS Web publishing (JavaScript & Styled Emotion & SASS)</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/seammulter.webp" width="770" height="442" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>샘물터</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>샘물터 (테크리드)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>샘물터 공식 웹사이트 리뉴얼, 운영/유지보수 2022.03 ~ 04</dd>
                <dt>상세내용</dt>
                <dd>NextJS Web publishing (JavaScript & Styled Emotion & SASS)</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/yunsl.webp" width="770" height="618" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>샘물터</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>샘물터 (테크리드)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>윤슬지하수빅데이터포털 2022.06 ~ 2023.07</dd>
                <dt>상세내용</dt>
                <dd>PM, UX Design, NextJS Frontend</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/ureawater.webp" width="770" height="537" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>코리아케미컬</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>샘물터 (테크리드, 외주건)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>유리아워터 2023.12</dd>
                <dt>상세내용</dt>
                <dd>PM, UX Design</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/bdfire.webp" width="770" height="440" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>이엠시티</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>샘물터 (테크리드, 외주건)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>디비파이어 2022.12</dd>
                <dt>상세내용</dt>
                <dd>PM, UX Design</dd>
              </div>
            </dl>
          </div>
        </section>
        <section>
          <div className="content">
            <Image src="/portfolio/nuvilab.webp" width="770" height="440" alt="" />
            <dl>
              <div>
                <dt>클라이언트</dt>
                <dd>누비랩</dd>
              </div>
              <div>
                <dt>소속사</dt>
                <dd>시소 (프리랜서)</dd>
              </div>
              <div className="detail">
                <dt>프로젝트명 및 기간</dt>
                <dd>누비랩 웹사이트 리뉴얼 2023.09</dd>
                <dt>상세내용</dt>
                <dd>NextJS Web publishing (JavaScript & Styled Emotion & SASS)</dd>
              </div>
            </dl>
          </div>
        </section>
      </Content>
      <footer>
        <dl>
          <div>
            <dt>
              <EmailIcon />
              <span>이메일</span>
            </dt>
            <dd>
              <AnchorLink href="1157iamari@gmail.com">1157iamari@gmail.com</AnchorLink>
            </dd>
          </div>
          <div>
            <dt>
              <SlackIcon />
              <span>슬랙</span>
            </dt>
            <dd>
              <AnchorLink href="https://arisdevelop.slack.com">https://arisdevelop.slack.com</AnchorLink>
            </dd>
          </div>
        </dl>
        <ul>
          <li>
            <AnchorLink href="/pdf/portfolio_chloe.pdf">
              <span>포트폴리오 PDF 파일 받기</span>
              <DownIcon />
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="/pdf/portfolio_print_chloe.pdf">
              <span>포트폴리오 프린트용 PDF 파일 받기</span>
              <DownIcon />
            </AnchorLink>
          </li>
        </ul>
        <button type="button" onClick={onClose}>
          <BackwardIcon />
          <span>이전화면으로</span>
        </button>
      </footer>
    </Container>
  );
};

export default Portfolio;

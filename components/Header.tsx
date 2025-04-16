import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled';
import { rem, mixIn, rgba, mq, hex } from '@/styles/designSystem';
import Anchor from './Anchor';
import { LogoDev1, LogoDevelog, LogoGithub, LogoPostype, LogoVelog } from './Svgs';

export function useDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({ query: `(min-width: ${768 / 16}rem)` });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}

const Container = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1080,
  padding: `env(safe-area-inset-top) calc(env(safe-area-inset-right) + ${rem(
    25,
  )}) 0 calc(env(safe-area-inset-left) + ${rem(25)})`,
  backgroundColor: `rgba(${rgba.black70})`,
  backdropFilter: `blur(${rem(20)})`,
  width: '100%',
  height: rem(57),
  [mq.minLarge]: {
    padding: `env(safe-area-inset-top) calc(env(safe-area-inset-right) + ${rem(
      50,
    )}) 0 calc(env(safe-area-inset-left) + ${rem(50)})`,
  },
  '.headline': {
    display: 'flex',
    gap: rem(12),
  },
  '& h1': {
    display: 'block',
    width: rem(132),
    height: rem(17),
    '& svg': {
      display: 'block',
      width: rem(132),
      height: rem(17),
    },
    '& span': {
      ...mixIn.screenReaderOnly,
    },
  },
  '& ol': {
    display: 'flex',
    gap: rem(12),
    '& li.current': {
      '& a': {
        color: hex.white,
        borderBottom: `${rem(2)} solid ${hex.white}`,
      },
    },
    '& a': {
      transition: 'all .4s cubic-bezier(.4,0,.2,1)',
      '&:hover, &:focus-visible': {
        color: hex.white,
        borderBottom: `${rem(2)} solid ${hex.white}`,
      },
    },
  },
  '& ul': {
    display: 'flex',
    gap: rem(10),
  },
  '& li a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: hex.rise,
    '& span': {
      ...mixIn.screenReaderOnly,
    },
    '& svg': {
      display: 'block',
      width: rem(17),
      height: rem(17),
      opacity: '0.5',
    },
  },
});

export default function Header() {
  const isDesktop = useDesktop();
  const router = useRouter();
  return (
    <Container>
      <div className="headline">
        <h1>
          <LogoDev1 />
          <span>DEV1L.studio</span>
        </h1>
        <nav>
          <ol>
            <li
              className={router.asPath === `/sites` ? 'current' : ''}
              aria-current={router.asPath === `/sites` ? 'page' : false}
            >
              <Anchor href="/sites">사이트</Anchor>
            </li>
            <li
              className={
                router.asPath === `/profile` ||
                router.asPath === `/profile/portfolio` ||
                router.asPath === `/profile/resume`
                  ? 'current'
                  : ''
              }
              aria-current={
                router.asPath === `/profile` ||
                router.asPath === `/profile/portfolio` ||
                router.asPath === `/profile/resume`
                  ? 'page'
                  : false
              }
            >
              <Anchor href="/profile">프로필</Anchor>
            </li>
            <li
              className={router.asPath === `/jasope` ? 'current' : ''}
              aria-current={router.asPath === `/jasope` ? 'page' : false}
            >
              <Anchor href="/jasope">자소페</Anchor>
            </li>
          </ol>
        </nav>
      </div>
      {isDesktop && (
        <ul>
          <li>
            <Anchor href="https://develog.dev1stud.io">
              <span>Develog</span>
              <LogoDevelog />
            </Anchor>
          </li>
          <li>
            <Anchor href="https://dev-il-studio.postype.com">
              <span>Postype</span>
              <LogoPostype />
            </Anchor>
          </li>
          <li>
            <Anchor href="https://velog.io/@naninyang">
              <span>Velog</span>
              <LogoVelog />
            </Anchor>
          </li>
          <li>
            <Anchor href="https://github.com/naninyang">
              <span>Gibhub</span>
              <LogoGithub />
            </Anchor>
          </li>
        </ul>
      )}
    </Container>
  );
}

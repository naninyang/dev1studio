import { rem, mixIn, rgba, mq } from '@/styles/designSystem';
import styled from '@emotion/styled';
import Anchor from './Anchor';
import { LogoDev1, LogoDevelog, LogoGithub, LogoPostype, LogoVelog } from './Svgs';

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
  '& ul': {
    display: 'flex',
    gap: rem(10),
  },
  '& li a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: rem(17),
    height: rem(17),
    '& span': {
      ...mixIn.screenReaderOnly,
    },
    '& i': {
      display: 'block',
      width: rem(17),
      height: rem(17),
      opacity: '0.5',
    },
  },
});

const Header = () => {
  return (
    <Container>
      <h1>
        <LogoDev1 />
        <span>DEV1L.studio</span>
      </h1>
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
    </Container>
  );
};

export default Header;

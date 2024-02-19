import { images } from '@/images';
import { rem, mixIn, rgba, mq } from '@/styles/designSystem';
import styled from '@emotion/styled';
import AnchorLink from './AnchorLink';

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
    background: `url(${images.logo.dev1studio.logo}) no-repeat 50% 50%/contain`,
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

const Develog = styled.i({
  background: `url(${images.logo.develog.icon}) no-repeat 50% 50%/contain`,
});

const News = styled.i({
  background: `url(${images.logo.shorts.icon}) no-repeat 50% 50%/contain`,
});

const Postype = styled.i({
  background: `url(${images.logo.postype}) no-repeat 50% 50%/contain`,
});

const Velog = styled.i({
  background: `url(${images.logo.velog}) no-repeat 50% 50%/contain`,
});

const Github = styled.i({
  background: `url(${images.logo.github}) no-repeat 50% 50%/contain`,
});

const Header = () => {
  return (
    <Container>
      <h1>
        <span>DEV1L.studio</span>
      </h1>
      <ul>
        <li>
          <AnchorLink href="https://develog.dev1stud.io">
            <span>Develog</span>
            <Develog />
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="https://dev-il-studio.postype.com">
            <span>Postype</span>
            <Postype />
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="https://velog.io/@naninyang">
            <span>Velog</span>
            <Velog />
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="https://github.com/naninyang">
            <span>Gibhub</span>
            <Github />
          </AnchorLink>
        </li>
      </ul>
    </Container>
  );
};

export default Header;

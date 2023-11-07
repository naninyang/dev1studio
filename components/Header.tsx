import { images } from '@/images';
import { rem, mixIn, rgba } from '@/styles/designSystem';
import styled from '@emotion/styled';

const Container = styled.header({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  padding: `env(safe-area-inset-top) calc(env(safe-area-inset-right) + ${rem(
    50,
  )}) 0 calc(env(safe-area-inset-left) + ${rem(50)})`,
  backgroundColor: `rgba(${rgba.black70})`,
  backdropFilter: `blur(${rem(20)})`,
  width: '100%',
  height: rem(57),
  '& h1': {
    display: 'block',
    width: rem(132),
    height: rem(17),
    background: `url(${images.logo.dev1studio.logo}) no-repeat 50% 50%/contain`,
    '& span': {
      ...mixIn.screenReaderOnly,
    },
  },
});

const Header = () => {
  return (
    <Container>
      <h1>
        <span>DEV1L.studio</span>
      </h1>
    </Container>
  );
};

export default Header;

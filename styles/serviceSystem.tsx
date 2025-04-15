import styled from '@emotion/styled';
import { rem, hex, mixIn, rgba } from './designSystem';

export const ServicePage = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: hex.black,
  minHeight: '100vh',
  '@media print': {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: '7777',
  },
});

export const Container = styled.main({
  backgroundColor: hex.black,
  '& > button, & > a': {
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
  '&.css-0': {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: rem(50),
    padding: `${rem(50)} ${rem(25)}`,
    width: rem(992),
    color: hex.light,
    '& blockquote': {
      padding: rem(15),
      backgroundColor: hex.dark,
      '& a': {
        color: hex.mint,
        textDecoration: 'underline',
      },
    },
    '& section': {
      display: 'flex',
      flexDirection: 'column',
      gap: rem(25),
    },
    '& code': {
      display: 'inline-block',
      borderRadius: rem(5),
      margin: `0 ${rem(2)}`,
      padding: `${rem(2)} ${rem(5)}`,
      backgroundColor: hex.mint,
      color: hex.dark,
    },
    '& h1': {
      fontSize: rem(64),
      fontWeight: '900',
      lineHeight: 1,
    },
    '& h2': {
      fontSize: rem(36),
      fontWeight: '700',
      lineHeight: 1,
    },
    '& a': {
      color: hex.light,
    },
    '& dl:not(.array)': {
      display: 'flex',
      flexWrap: 'wrap',
      '& dt, & dd': {
        padding: `${rem(5)} 0`,
      },
      '& dt': {
        ...mixIn.colAuto,
        width: rem(170),
        fontWeight: '700',
      },
      '& dd': {
        ...mixIn.colAuto,
        width: `calc(100% - ${rem(170)})`,
        '&.essays': {
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            margin: `${rem(20)} 0`,
            fontSize: rem(20),
            fontWeight: '900',
            lineHeight: 1.3,
          },
          '& p': {
            margin: `${rem(16)} 0`,
            fontSize: rem(16),
            fontWeight: '400',
            lineHeight: 1.375,
          },
          '& :first-of-type': {
            marginTop: 0,
          },
          '& :last-of-type': {
            marginBottom: 0,
          },
        },
      },
    },
    '& section > dl': {
      padding: `${rem(5)} 0`,
      borderTop: `${rem(5)} solid ${hex.yellow}`,
      borderBottom: `${rem(5)} solid ${hex.yellow}`,
      '& dd': {
        '&:not(.essays)': {
          '& strong': {
            display: 'inline-block',
            paddingLeft: rem(25),
            fontWeight: '700',
            color: hex.warning,
          },
          '& p strong': {
            textIndent: rem(-25),
          },
        },
      },
    },
  },
});

export const Fragment = styled.div({
  padding: `${rem(10)} 0`,
  borderBottom: `${rem(1)} solid rgba(${rgba.light20})`,
  display: 'flex',
  '&:last-of-type': {
    borderBottom: 0,
  },
  '&:not(.array)': {
    flexWrap: 'wrap',
    '& dt, & dd': {
      padding: `${rem(5)} 0`,
    },
    '& dt': {
      ...mixIn.colAuto,
      width: rem(170),
      fontWeight: '700',
    },
    '& dd': {
      ...mixIn.colAuto,
      width: `calc(100% - ${rem(170)})`,
      '&:not(.essays)': {
        '& strong': {
          paddingLeft: rem(25),
          fontWeight: '700',
          color: hex.warning,
        },
      },
    },
  },
  '&.array': {
    flexDirection: 'column',
    '& .array': {
      display: 'flex',
      flexWrap: 'wrap',
      '& dt, & dd': {
        padding: `${rem(5)} 0`,
      },
      '& dt': {
        ...mixIn.colAuto,
        width: rem(170),
        fontWeight: '700',
      },
      '& dd': {
        ...mixIn.colAuto,
        width: `calc(100% - ${rem(170)})`,
        '&:not(.essays) strong': {
          paddingLeft: rem(25),
          fontWeight: '700',
          color: hex.warning,
        },
      },
    },
  },
  '& .projects-list': {
    margin: `${rem(5)} 0 ${rem(5)} ${rem(170)}`,
    padding: `${rem(5)} ${rem(25)}`,
    borderRadius: rem(15),
    backgroundColor: hex.dark,
  },
});

export const IsNotSession = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  '& p': {
    fontSize: rem(16),
    fontWeight: '700',
    color: hex.yellow,
  },
});

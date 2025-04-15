import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Anchor from './Anchor';
import { LogoDevelog, LogoGithub, LogoPostype, LogoVelog } from './Svgs';
import styles from '@/styles/footer.module.sass';

export function useDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({ query: `(min-width: ${768 / 16}rem)` });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}

export default function Footer() {
  const isDesktop = useDesktop();
  return (
    <footer className={styles.footer}>
      {isDesktop ? (
        <p>
          &copy; Copyrights <strong>DEV1L.studios</strong> All rights reserved.
        </p>
      ) : (
        <>
          <p>&copy; DEV1L.studios</p>
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
        </>
      )}
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { Portfolio, PortfolioSite } from '@/types';
import PortfolioViewer from '@/components/PortfolioViewer';
import styles from '@/styles/viewer.module.sass';

export default function Preview() {
  const [data, setData] = useState<Portfolio[]>([]);
  const [site, setSite] = useState<PortfolioSite[]>([]);
  const [version, setVersion] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/portfolio');
      const json = await res.json();
      setData(json);
    };

    const fetchSite = async () => {
      const response = await fetch('/api/portfolioSite');
      const json = await response.json();
      setSite(json);
    };

    fetchData();
    fetchSite();
  }, []);

  useEffect(() => {
    setVersion(new URLSearchParams(window.location.search).get('version') ?? 'screen');
  }, []);

  return (
    <main className={styles.preview} style={{ backgroundColor: version === 'screen' ? 'black' : 'white' }}>
      <PortfolioViewer data={data} site={site} version={version} />
    </main>
  );
}

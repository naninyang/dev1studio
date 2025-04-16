import { useEffect, useState } from 'react';
import { Portfolio, PortfolioSite } from '@/types';
import PortfolioViewer from '@/components/PortfolioViewer';

export default function Preview() {
  const [data, setData] = useState<Portfolio[]>([]);
  const [site, setSite] = useState<PortfolioSite[]>([]);
  const [version, setVersion] = useState('');

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

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
    <main style={{ backgroundColor: 'black' }}>
      <PortfolioViewer data={data} site={site} version={version} />
    </main>
  );
}

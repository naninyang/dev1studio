import { useEffect, useState } from 'react';
import { Portfolio, PortfolioSite } from '@/types';
import PortfolioPdfView from '@/components/PortfolioPdfView';

type Props = {
  data: Portfolio[];
  site: PortfolioSite[];
  version?: 'screen' | 'print';
};

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

  if (process.env.NODE_ENV !== 'development') {
    return <p>미리보기는 개발 환경에서만 볼 수 있습니다.</p>;
  }

  return (
    <main>
      <PortfolioPdfView data={data} site={site} version={version} />
    </main>
  );
}

import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchPortfolioSite } from '@/lib/apis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sites = await fetchPortfolioSite();
    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio data' });
  }
}

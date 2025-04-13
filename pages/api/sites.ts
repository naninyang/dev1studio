import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchSites } from '@/lib/apis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sites = await fetchSites();
    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sites data' });
  }
}

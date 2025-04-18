import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchJasope } from '@/lib/apis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sites = await fetchJasope();
    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch portfolio data: ${error}` });
  }
}

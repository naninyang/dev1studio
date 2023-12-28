import { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@/utils/getAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let token = await getAuth();
  try {
    const response = await fetch(`${process.env.USER_API}/resume`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ message: 'Invalid Token' });
  }
}

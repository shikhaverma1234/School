import db from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [schools] = await db.query('SELECT * FROM schools');
      res.status(200).json(schools);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching schools', error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
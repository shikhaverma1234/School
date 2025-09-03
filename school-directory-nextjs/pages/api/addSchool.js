import db from '../../../lib/db';
import multer from 'multer';
import nextConnect from 'next-connect';
import fs from 'fs';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/schoolImages',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

const handler = nextConnect();

handler.use(upload.single('image'));

handler.post(async (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file ? `/schoolImages/${req.file.filename}` : null;

  try {
    const result = await db.query(
      'INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, address, city, state, contact, email_id, image]
    );

    res.status(201).json({ id: result.insertId, name, address, city, state, contact, email_id, image });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

export default handler;
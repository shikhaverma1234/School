import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'public', 'schoolImages');
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing the files' });
      }

      const file = files.image;
      const newPath = path.join(form.uploadDir, file.name);

      fs.rename(file.path, newPath, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Error saving the file' });
        }

        res.status(200).json({ imagePath: `/schoolImages/${file.name}` });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
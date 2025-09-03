import { useEffect, useState } from 'react';
import SchoolCard from '../components/SchoolCard';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch('/api/getSchools')
      .then(res => res.json())
      .then(data => setSchools(data));
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
      <h1>Schools List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {schools.map(school => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
}
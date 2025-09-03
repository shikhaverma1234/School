import React from 'react';

const SchoolCard = ({ school }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, width: 250, borderRadius: 5 }}>
      <img
        src={`/schoolImages/${school.image}`}
        alt={school.name}
        style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 5 }}
      />
      <h3 style={{ margin: '10px 0' }}>{school.name}</h3>
      <p>{school.address}</p>
      <p>{school.city}</p>
    </div>
  );
};

export default SchoolCard;
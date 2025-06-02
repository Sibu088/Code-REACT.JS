// ProfileCard.js
import React, { useState } from 'react';

function ProfileCard({ username }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', width: '250px' }}>
      <h3>@{username}</h3>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Info' : 'Show Info'}
      </button>
      {showDetails && (
        <div>
          <p>Full Name: Sibusiso Lynx</p>
          <p>Role: Developer</p>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;


// Counter.js
import React, { useState } from 'react';

function Counter({ label }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{label}</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
    </div>
  );
}

export default Counter;

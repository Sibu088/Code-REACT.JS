// App.js
import React from 'react';
import Counter from './Counter';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🎯 React Props + State Demo</h1>

      <Counter label="Project Click Counter" />
      <ProfileCard username="sibucodelab" />
    </div>
  );
}

export default App;

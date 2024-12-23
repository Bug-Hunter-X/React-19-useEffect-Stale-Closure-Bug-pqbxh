```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect asynchronous operation leading to stale closure
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); 
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```
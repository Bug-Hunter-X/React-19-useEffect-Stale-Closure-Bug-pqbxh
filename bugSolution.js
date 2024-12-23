```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    // Correct asynchronous operation using useRef to avoid stale closure
    intervalIdRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1); 
    }, 1000);

    return () => clearInterval(intervalIdRef.current); // Cleanup function
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```
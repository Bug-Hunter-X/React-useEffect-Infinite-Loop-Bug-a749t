```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: this runs only once after the first render.
    console.log('Count updated to:', count); // verify this only logs once
  }, []); // Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```
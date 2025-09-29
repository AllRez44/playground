function CounterControls({ style }) {
  const { increment, decrement } = useCounter()
  
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        ...style,
      }}
    >
      <Button
        onClick={decrement}
        style={{
          backgroundColor: "#dc3545",
        }}
      >-</Button>
      <Button
        onClick={increment}
        style={{
          backgroundColor: "#007bff",
        }}
      >+</Button>
    </div>
  );
}
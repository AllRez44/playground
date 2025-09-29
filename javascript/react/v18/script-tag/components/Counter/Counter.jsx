function Counter({ style }) {
  const { count } = useCounter()

  return (
    <div style={style}>
      <div style={{ fontSize: "16px", fontWeight: 600 }}>Count: {count}</div>
      <CounterControls style={{ marginTop: "8px" }} />
      <CounterReset style={{ marginTop: "8px" }} />
    </div>
  )
}
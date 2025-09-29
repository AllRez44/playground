function CounterReset({style}) {
  const { reset } = useCounter()

  return (
    <Button
      onClick={reset}
      style={{
        backgroundColor: "#6c757d",
      ...style
    }}>
      Reset
    </Button>
  )
}
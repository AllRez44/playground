function CounterReset(props) {
  const {className, ...otherProps} = props 
  const { reset } = useCounter()

  return (
    <Button
      onClick={reset}
      className={"!bg-[#6c757d] " + className}
      {...otherProps}
    >
      Reset
    </Button>
  );
}
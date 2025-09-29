function CounterControls(props) {
  const { className, ...otherProps } = props
  const { increment, decrement } = useCounter()
  
  return (
    <div
      className={"flex w-full items-center gap-2 " + className}
      {...otherProps}
    >
      <Button className="!bg-red-600 flex-1" onClick={decrement}>
        -
      </Button>
      <Button className="!bg-blue-600 flex-1" onClick={increment}>
        +
      </Button>
    </div>
  );
}
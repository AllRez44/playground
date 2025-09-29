function Counter(props) {
  const { className, ...otherProps } = props
  const { count } = useCounter()
  const countClassName = count > 0 ? "text-blue-500" : count === 0 ? "text-gray-500" : "text-red-500"
  return (
    <div
      className={"p-4 border border-gray-300 rounded " + className}
      {...otherProps}
    >
      <div className="text-lg font-semibold">
        Count: <span className={countClassName}>{count}</span>
      </div>
      <div className="flex flex-col max-w-[6rem]">
        <CounterControls className="mt-2" />
        <CounterReset className="mt-2" />
      </div>
    </div>
  );
}
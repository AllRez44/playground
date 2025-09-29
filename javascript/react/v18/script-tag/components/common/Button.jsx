function Button(props) {
  const { className, ...otherProps} = props
  return (
    <button
      className={"py-1 px-4 bg-black text-white font-semibold rounded border-none cursor-pointer " + className}
      {...otherProps}
    />
  );
}
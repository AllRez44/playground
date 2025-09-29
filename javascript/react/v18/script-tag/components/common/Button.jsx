function Button(props) {
  const { style, ...otherProps} = props
  return (
    <button
      style={{
        padding: "4px 16px",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontWeight: 600,
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        ...style
      }}
      {
        ...otherProps
      }
    />
  );
}
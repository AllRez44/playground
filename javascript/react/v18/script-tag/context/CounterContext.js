const context = React.createContext({});

function CounterProvider({ children }) {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <context.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </context.Provider>
  );
}

function useCounter() {
  const ctx = React.useContext(context);
  if (ctx === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return ctx;
}
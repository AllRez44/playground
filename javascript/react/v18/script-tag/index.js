'use strict'

const domContainer = document.querySelector('#root')
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('React App rendered!')
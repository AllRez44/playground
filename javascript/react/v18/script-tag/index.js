'use strict'

// import App from './components/app.jsx'

const domContainer = document.querySelector('#root')
const root = ReactDOM.createRoot(domContainer);

// const App = import('./components/app.js').then((App) => {
//   console.log("App: ", App)
//   root.render(React.createElement(App))
// })

// function App() {
//   const Home = import('./components/home.jsx').then((mod) => mod.default)
//   return (
//     <div>
//       a
//     </div>
//   )
// }

// root.render(React.createElement(App))

root.render(<App />);

function App() {
  return (
    <Home />
  )
}

function Home() {
  return (
    <div>
      <h2>Add React in One Minute</h2>
      <p>This page demonstrates using React with no build tooling.</p>
      <p>React is loaded as a script tag.</p>
      <LikeButton />
    </div>
  )
}

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'You liked this.';
  }

  return (
    <button onClick={() => setLiked(true)}>
      Like
    </button>
  );
}

console.log("Rendered")
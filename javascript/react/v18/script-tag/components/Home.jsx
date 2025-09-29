function Home() {
  return (
    <div>
      <h2>Add React in One Minute</h2>
      <p>This page demonstrates using React with no build tooling.</p>
      <p>React is loaded as a script tag.</p>
      <hr />
      <LikeButton />
      <Counter style={{ marginTop: '12px'}} />
    </div>
  )
}
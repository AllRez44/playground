function Home() {
  return (
    <div className="p-4">
      <h2 className="text-xl">Add React in One Minute</h2>
      <p>This page demonstrates using React with no build tooling.</p>
      <p>
        React is loaded as a <code className="mx-1 p-1 bg-gray-200 rounded-sm">{"<script>"}</code> tag. 
      </p>
      <hr className="my-4" />
      <LikeButton />
      <Counter className="mt-4" />
    </div>
  );
}
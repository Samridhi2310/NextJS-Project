import React from "react";

export default function content({ params }) {
  const ResolvePromise=React.use(params);
  console.log("Params:", params); // Debugging

  return (
    <div>
      <h1>Hello from dynamic routing</h1>
      <p>Dynamic content: {ResolvePromise.blog}</p>
    </div>
  );
}

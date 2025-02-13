export default async function ViewDetail({ params }) {
  const { id } = params; // ✅ Correctly extracts the dynamic id

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();

  return (
    <div>
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

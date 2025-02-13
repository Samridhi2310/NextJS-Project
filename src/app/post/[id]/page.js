export default async function ViewDetail({ params }) {
    // Await params before accessing id
    const id = await params.id; 
  
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
  
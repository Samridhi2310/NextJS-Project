import React from 'react'
import PostItem from './PostItem';

async function Show() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const result = await response.json();

    return (
        <div>
            <ul>
                {result.map((post) => (
                    <PostItem key={post.id} id={post.id} title={post.title} />
                ))}
            </ul>
        </div>
    )
}

export default Show;

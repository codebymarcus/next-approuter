import React from 'react'

export default async function Page({ params: { postId } }) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await result.json();
  console.log(post);

  return (
    <div className='flex flex-col w-full items-center gap-5'>
      <h1 className='text-2xl font-bold text-gray-300 capitalize'>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
};

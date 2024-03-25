import Link from 'next/link';
import React from 'react'

const UsersListItem = async (props) => {
  const { user } = props;
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  const userPosts = await result.json();
  const [firstPost] = userPosts;
  console.log(userPosts);

  return (
    <Link href={`/blog/${firstPost.id}`}>
      <article className="flex flex-col bg-slate-900 rounded p-4 text-wrap gap-3 h-full">
        <h3 className="text-xl">{user.name}</h3>
        <p className='line-clamp-3 text-gray-400'>{firstPost.body}</p>
      </article>
    </Link>
  )
}

export default UsersListItem
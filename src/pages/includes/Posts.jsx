import React from 'react';

const Posts = ({ posts, loading, error }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  } else if (error) {
    return <h2>An error occurred: {error.message}</h2>
  }

  return (
    <ul className='mb-10'>
      {posts.map(post => (
        <div key={post.id} className='mb-8'>
            <img src='https://placehold.co/860x440'/>
            <h3 className='mt-3 md:text-3xl text-lg capitalize'><a href='/' className='hover:text-sky-400 transition-all duration-300 ease-in-out'>{post.title}</a></h3>
            <p className='mt-3 md:text-xl text-sm font-light capitalize'>{post.body}</p>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
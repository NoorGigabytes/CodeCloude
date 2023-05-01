import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Posts from './includes/Posts'
import Pagination from './includes/Pagination'
import axios from 'axios'
import { TfiSearch } from "react-icons/tfi"


const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [email, setEmail] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
      } catch (error) {
        setFetchError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, []);

  // Get current posts
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <>
        <section className='container mx-auto max-w-screen-2xl px-6 pb-10 pt-20' id='section'>
            <div className='flex flex-wrap justify-between items-center'>
            <h1 className='lg:text-6xl text-4xl font-semibold'>Our Blog</h1>
            <p className='mt-2 lg:text-2xl text-xl lg:text-justify font-semibold text-sky-400'>Transforming digital experiences</p>
            </div>
            <Breadcrumbs/>
        </section>


        <section className='container mx-auto max-w-screen-2xl sm:px-6 px-1 mt-16 mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12'>
                    <div>
                        <Posts posts={currentPosts} loading={loading} error={fetchError} />
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={paginate}
                            searchValue={searchValue}
                            loading={loading}
                            error={fetchError}
                        />
                    </div>
                    <div className='mt-10 lg:mt-0 mx-auto'>
                        <div className='bg-zinc-50 lg:p-8 py-5 px-5 rounded-lg shadow-lg mx-auto flex flex-col items-center justify-center'>
                          <h3 className='mb-5 md:text-3xl text-2xl'>Subscribe Now</h3>
                          <img src='../assets/img/subscribe-icon.png' />
                          <p className='my-2 text-lg text-center'>Subscribe to our newsletter & stay updated</p>
                          <form className='flex flex-col justify-between items-center py-5 gap-5 '>
                            <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email here' className='appearance-none sm:text-lg text-sm shadow-sm border border-gray-100 w-full p-4 text-gray-700 leading-tight focus:outline-sky-400'/>
                            <button type='submit' onClick={handleSubmit} className='bg-zinc-600 text-white px-5 py-4 font-medium text-lg hover:bg-sky-400 transition-all duration-300 ease-in'>Subscribe</button>
                          </form>
                        </div>
                        <div className='mt-10 lg:p-8 py-5 rounded-lg shadow-lg mx-auto sticky top-20'>
                          <h3 className='mb-5 md:text-2xl text-xl ml-5'>Filter</h3>
                          <div className='flex flex-col items-center justify-center'>
                            <form className='flex flex justify-between items-center py-5'>
                              <input 
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                placeholder='Search' 
                                className='appearance-none text-lg shadow-sm border border-gray-100 w-full p-4 text-gray-700 leading-tight focus:outline-sky-400'/>
                              <button onClick={handleSubmit} className='bg-zinc-600 text-white px-5 py-5 font-medium text-lg hover:bg-sky-400 transition-all duration-300 ease-in'><TfiSearch/></button>
                            </form>
                          </div>
                        </div>
                    </div>
                </div>
        </section>


    </>
  );
};

export default Blog;
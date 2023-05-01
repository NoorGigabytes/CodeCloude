import React, { useState, useEffect } from 'react';
import { HiArrowLongRight, HiArrowLongLeft } from 'react-icons/hi2';

const Pagination = ({ postsPerPage, totalPosts, paginate, searchValue }) => {
  const [active, setActive] = useState(1);
  const [searchQuery, setSearchQuery] = useState('')
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setActive(number);
    paginate(number);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  useEffect(() => {
    setSearchQuery(searchValue)
    setActive(1)
  }, [searchValue])

  return (
    <nav>
      <ul className='flex flex-wrap justify-center items-center gap-y-3 md:text-sm text-xs'>
        {active > 1 ? (
          <li className='mx-1'>
            <button
              onClick={() => handleClick(active - 1)}
              className='font-medium text-gray-400 border-2 px-4 py-3 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 ease-out'
            >
              <HiArrowLongLeft />
            </button>
          </li>
        ) : null}
        {searchQuery ? null : (
          <>
            {active > 3 ? (
              <>
                <li key={1} className='mx-1'>
                  <button
                    onClick={() => handleClick(1)}
                    className='font-medium text-gray-400 border-2 px-4 py-2 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 ease-out'
                  >
                    1
                  </button>
                </li>
                <li className='mx-1'>
                  <span className='mx-1'>...</span>
                </li>
              </>
            ) : null}
            {pageNumbers.map(
              (number) =>
                (active <= 3 && number <= 3) ||
                (active >= pageNumbers.length - 2 && number > pageNumbers.length - 3) ||
                (number >= active - 1 && number <= active + 1) ? (
                  <li key={number} className='mx-1'>
                    <button
                      onClick={() => handleClick(number)}
                      className={`transition-all duration-300 ease-out ${
                        active === number
                          ? 'bg-sky-400 border-sky-400 hover:text-white text-white'
                          : 'text-gray-400'
                      } font-medium border-2 px-4 py-2 hover:border-sky-400 hover:text-sky-400`}
                    >
                      {number}
                    </button>
                  </li>
                ) : null
            )}
            {active < pageNumbers.length - 2 ? (
              <>
                <li className='mx-1'>
                  <span className='mx-1'>...</span>
                </li>
                <li key={pageNumbers.length} className='mx-1'>
                  <button
                    onClick={() => handleClick(pageNumbers.length)}
                    className='font-medium text-gray-400 border-2 px-4 py-2 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 ease-out'
                  >
                    {pageNumbers.length}
                  </button>
                </li>
              </>
            ) : null}
          </>
        )}
        {active !== pageNumbers.length && !searchQuery ? (
          <li className='mx-1'>
            <button
              onClick={() => handleClick(active + 1)}
              className='font-medium text-gray-400 border-2 px-4 py-3 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 ease-out'
              >
              <HiArrowLongRight />
              </button>
              </li>
              ) : null}
              </ul>
              </nav>
              );
              };
              
export default Pagination;

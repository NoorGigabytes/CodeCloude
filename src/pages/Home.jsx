import React, { useEffect, useState } from 'react';
import { HiArrowLongRight, HiArrowLongDown } from "react-icons/hi2";
import ClientsSlider from './includes/ClientsSlider';
import TestimonialSlider from './includes/TestimonialSlider';
import axios from 'axios';

function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4');
        setPosts(res.data);
      } catch (error) {
        setFetchError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, []);
  

  return (
    <>
    <div className='relative -top-20 z-0'>
      <video preload='auto' autoPlay muted loop className="h-screen w-full object-cover">
        <source src="./assets/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 w-full h-full bg-center bg-cover">
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-30 bg-black"
        ></span>
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white font-bold'>
        <h1 className='lg:text-6xl text-5xl px-2'>Transforming Digital Experiences</h1>
        <div className='w-auto inline-flex items-center justify-center mt-10'>
          <a href='/' className='text-4xl px-2 w-max'><HiArrowLongRight className='mx-auto hover:text-sky-400 translate-x-0 hover:translate-x-6 transition-all duration-300 delay-200 ease-out'/></a>
        </div>
      </div>
      <div className='absolute mt-32 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-max text-white font-bold'>
        <a href='#section' className='lg:text-6xl text-5xl px-2 hover:text-sky-400 w-min'><HiArrowLongDown/></a>
      </div>
    </div>
    
    <section className='container mx-auto max-w-screen-lg px-6 pb-40 pt-20 border-b-2' id='section'>
      <div>
        <h1 className='lg:text-6xl text-4xl font-bold'>Enterprise Web Design and Development Solutions</h1>
        <p className='mt-12 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
        <p className='mt-5 text-lg lg:text-justify'>We create a stunning design, branding, and web applications to transform your businesses into high-revenue earning brands with a solid digital presence across the globe. Whether it is about crafting your feature-rich web design and development or building a digital strategist to boost your brand value, we do it all for you with absolute finesse. We design and develop scalable digital products for you with personalized and user-friendly features.</p>
      </div>
    </section>

    <section className='container mx-auto max-w-screen-lg px-6 mt-16'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-y-6 gap-x-12 pb-20 border-b-2'>
        <div className='col-span-2 md:mr-12'>
          <h1 className='lg:text-6xl text-4xl font-bold'>Create</h1>
          <h2 className='lg:text-3xl text-2xl font-normal mt-6'>Awesome Experiences</h2>
          <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
        </div>
        <div className='my-auto py-4'>
          <ul className='leading-10 md:text-2xl text-lg font-normal'>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Web Design</a></li>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Open Source Development</a></li>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>eCommerce Development</a></li>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Custom Web Development</a></li>
          </ul>
        </div>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-6 pb-20 border-b-2 mt-16'>
        <div className='col-span-2 md:mr-12'>
          <h1 className='lg:text-6xl text-4xl font-bold'>Communicate</h1>
          <h2 className='lg:text-3xl text-2xl font-normal mt-6'>Your Brand Story</h2>
          <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
        </div>
        <div className='my-auto py-4'>
          <ul className='leading-10 md:text-2xl text-lg font-normal'>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Digital Marketing</a></li>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Inbound Marketing</a></li>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Content Marketing</a></li>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Digital PR</a></li>
          </ul>
        </div>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-6 pb-20 border-b-2 mt-16'>
        <div className='col-span-2 md:mr-12'>
          <h1 className='lg:text-6xl text-4xl font-bold'>Connect</h1>
          <h2 className='lg:text-3xl text-2xl font-normal mt-6'>Enterprise Web Design and Development Solutions</h2>
          <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
        </div>
        <div className='my-auto py-4'>
          <ul className='leading-10 md:text-2xl text-lg font-normal'>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Paid Advertising</a></li>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Social Media Marketing</a></li>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Custom Newsletter Design</a></li>
            <li><a href='/' className='text-black hover:text-sky-400 transition-all duration-300 delay-200 ease-in-out'>Website SEO Audit</a></li>
          </ul>
        </div>
      </div>
    </section>

    <section className='container mx-auto max-w-screen-xl px-2 mt-16'>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 p-10 lg:p-20 bg-zinc-50 border mt-16'>
        <div className='my-auto py-4'>
          <img src='./assets/img/wpvip.png'/>
        </div>
        <div className='md:mr-12 my-auto'>
          <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-6'>Featured WordPress VIP Silver Agency Partner</h1>
          <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
          <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
        </div>
      </div>
    </section>

    <section className={`container mx-auto max-w-screen-xl px-2 mt-16`}>
      <div className='flex md:flex-row flex-col justify-between mb-10'>
        <h1 className='lg:text-4xl text-3xl font-semibold md:w-2/4 px-2 md:pb-0 pb-4'>Glance through our digital transformation success stories</h1>
        <a href='/' className='text-lg hover:text-sky-400 text-black px-2 transition-all ease-out duration-300'>Discover More <HiArrowLongRight/></a>
      </div>

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-2'>

        <div className='grid grid-cols-1 gap-2'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
            <div>
              <div className='overflow-hidden'>
                <a href='/'>
                  <img src='./assets/img/stories/news-cosmos.jpg' alt='news-cosmos' className='hover:scale-110 transition-all ease-out duration-300'/>
                </a>
              </div>
              <a href='/' className='text-lg hover:text-sky-400 text-black px-2 transition-all ease-out duration-300'>News Cosmos - A trusted platform for news discussion and where you can create or join the business and personal communities</a>
            </div>
            <div>
              <div className='overflow-hidden'>
                <a href='/'>
                  <img src='./assets/img/stories/ayJ-solicitors.jpg' alt='ayJ-solicitors' className='hover:scale-110 transition-all ease-out duration-300'/>
                </a>
              </div>
              <a href='/' className='text-lg hover:text-sky-400 text-black px-2 transition-all ease-out duration-300'>A Y & J Solicitors - An award-winning and one of the leading UK Immigration law firm</a>
            </div>
          </div>
          <div>
            <div className='overflow-hidden'>
              <a href='/'>
                <img src='./assets/img/stories/wtcafe.jpg' alt='wtcafe' className='hover:scale-110 transition-all ease-out duration-300'/>
              </a>
            </div>
            <a href='/' className='text-lg hover:text-sky-400 text-black px-2 transition-all ease-out duration-300'>WT Café - A food franchise company that delivers meals to kids and families everywhere they learn and play</a>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-2'>
          <div>
            <div className='overflow-hidden'>
              <a href='/'>
                <img src='./assets/img/stories/amfm.jpg' alt='amfm' className='hover:scale-110 transition-all ease-out duration-300'/>
              </a>
            </div>
            <a href='/' className='text-lg hover:text-sky-400 text-black px-2 transition-all ease-out duration-300'>A-MFM - A marketplace that integrates all the marijuana sellers with potential customers in one place</a>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
            <div>
              <div className='overflow-hidden'>
                <a href='/'>
                  <img src='./assets/img/stories/pixel-perfect.jpg' alt='pixel-perfect' className='hover:scale-110 transition-all ease-out duration-300'/>
                </a>
              </div>
              <a href='/' className='text-lg hover:text-sky-400 text-black px-2 transition-all ease-out duration-300'>Pixel Perfect HTML - A leading agency specialized in conversion from Sketch, XD and PSD to HTML, CMS and E-Commerce solutions</a>
            </div>
            <div>
              <div className='overflow-hidden'>
                <a href='/'>
                  <img src='./assets/img/stories/kino-pan.jpg' alt='kino-pan' className='hover:scale-110 transition-all ease-out duration-300'/>
                </a>
              </div>
              <a href='/' className='text-lg hover:text-sky-400 text-black px-2 transition-all ease-out duration-300'>Panorama Kino Theatre - Panorama challenges perceptions and reconnects people with space and each other</a>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <section className='container mx-auto max-w-screen-xl px-2 mt-16'>
      <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-6 w-max mx-auto'>Our Clients</h1>
      <ClientsSlider />
    </section>

    <section className='container mx-auto max-w-screen-xl px-2 mt-16'>
      <TestimonialSlider />
    </section>
    
    <section className='container mx-auto max-w-screen-xl px-2 mt-16'>
      <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-6 w-max mx-auto'>Accreditations</h1>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-6'>
        <div>
          <img src='./assets/img/accreditations/accreditations-logo1.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
        </div>
        <div>
          <img src='./assets/img/accreditations/accreditations-logo2.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
        </div>
        <div>
          <img src='./assets/img/accreditations/accreditations-logo3.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
        </div>
        <div>
          <img src='./assets/img/accreditations/accreditations-logo4.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
        </div>
        <div>
          <img src='./assets/img/accreditations/accreditations-logo5.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
        </div>
        <div>
          <img src='./assets/img/accreditations/accreditations-logo6.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
        </div>
        <div>
          <img src='./assets/img/accreditations/accreditations-logo7.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
        </div>
        <div>
          <img src='./assets/img/accreditations/accreditations-logo8.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
        </div>
      </div>
    </section>

    <section className='container mx-auto max-w-screen-xl px-2 mt-16'>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 p-10 lg:p-20 bg-zinc-50 border mt-16'>
        <div className='my-auto py-4'>
          <img src='./assets/img/clutch_global.png'/>
        </div>
        <div className='md:mr-12 my-auto'>
          <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-6'>Clutch Top 1000 Global Service Providers in 2022</h1>
          <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
          <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
        </div>
      </div>
    </section>


    {/* Blog Section:
      Currently fetching dummy data. Change URLs, dates and the main image after fetching the data from CodeCloude's API */}
    <section className={`container mx-auto max-w-screen-xl px-2 mt-16 ${!fetchError == null || loading ? 'hidden' : null}`}>
      <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-6 w-max mx-auto'>Fresh from the Blog</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-16 mt-16 content-center justify-center capitalize'>
        <div className='my-auto py-4'>
          <a href='/'><img src='./assets/img/blog/Best-WP-Plugins-for-Multisite-Networks.jpg' alt='blog 1' className='mb-5'/></a>
          <a href='/' className='lg:text-3xl text-2xl hover:text-sky-400 text-black px-2 transition-all ease-out duration-300'>{posts.length > 0 && posts[0].title && <span>{posts[0].title}</span>}</a>
          <p className='lg:text-lg text-medium text-gray-400 px-2 mt-2'>Friday, Mar 24, 2023 / <a href='/' className='hover:text-sky-400 transition-all ease-out duration-300'>WordPress</a> / CodeCloude</p>
        </div>
        <div className='md:mr-12 my-auto'>
          <div className='my-auto pb-10 border-b'>
            <a href='/' className='lg:text-2xl text-xl hover:text-sky-400 text-gray-500 px-2 transition-all ease-out duration-300'>{posts.length > 0 && posts[1].title && <span>{posts[1].title}</span>}</a>
            <p className='lg:text-lg text-medium text-gray-400 px-2 mt-2'>Friday, Mar 24, 2023 / <a href='/' className='hover:text-sky-400 transition-all ease-out duration-300'>WordPress</a> / CodeCloude</p>
          </div>
          <div className='my-auto py-10 border-b'>
            <a href='/' className='lg:text-2xl text-xl hover:text-sky-400 text-gray-500 px-2 transition-all ease-out duration-300'>{posts.length > 0 && posts[2].title && <span>{posts[2].title}</span>}</a>
            <p className='lg:text-lg text-medium text-gray-400 px-2 mt-2'>Friday, Mar 24, 2023 / <a href='/' className='hover:text-sky-400 transition-all ease-out duration-300'>WordPress</a> / CodeCloude</p>
          </div>
          <div className='my-auto py-10 border-b'>
            <a href='/' className='lg:text-2xl text-xl hover:text-sky-400 text-gray-500 px-2 transition-all ease-out duration-300'>{posts.length > 0 && posts[3].title && <span>{posts[3].title}</span>}</a>
            <p className='lg:text-lg text-medium text-gray-400 px-2 mt-2'>Friday, Mar 24, 2023 / <a href='/' className='hover:text-sky-400 transition-all ease-out duration-300'>WordPress</a> / CodeCloude</p>
          </div>
        </div>
      </div>
      <div className='mx-auto w-max mt-16'>
        <a href="/" className="relative px-6 py-4 overflow-hidden group bg-sky-400 relative hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-4 hover:ring-sky-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative uppercase text-lg font-medium">View All Blog</span>
        </a>
      </div>
    </section>

    <section className='container mx-auto max-w-screen-xl px-2 my-16'>
      <div className='p-10 lg:p-20 bg-zinc-50 border mt-16 text-center'>
        <div className='md:mr-12 my-auto'>
          <h2 className='lg:text-3xl text-2xl font-normal border-t-2 py-6 w-max mx-auto'>You have a vision</h2>
          <h1 className='lg:text-4xl text-3xl font-semibold pb-6'>We know the way to get you there.</h1>
          <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
        </div>
        <div className='mx-auto w-max mt-16'>
        <div className="block w-1 mx-auto border-r-2 border-gray-300 h-16 mb-16"></div>
          <a href="/contact-us" className="px-6 py-4 relative group overflow-hidden font-normal bg-gray-800 text-white">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-sky-400 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white mt-6 text-lg font-medium uppercase">Start now</span>
          </a>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Home

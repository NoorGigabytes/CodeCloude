import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2"
import Breadcrumbs from '../components/Breadcrumbs'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaTwitter, FaLinkedin } from 'react-icons/fa'

function About() {

  const values = [
    {
      title: "First Slide Title",
      description:
        "Another slide description.",
    },
    {
      title: "Another Slide Title",
      description: "Another slide description.",
    },
    {
      title: "Third Slide Title",
      description: "Third slide description.",
    },
  ]

  const settings = {
    dots: true,
    arrows: false,
    appendDots: dots => (
      <div className=''>
        <ul className="flex items-center justify-center">{dots}</ul>
        <style>
          {`
            .slick-dots li button:before {
              color: #38bdf8;
              font-size: 8px;
              margin: 0 4px;
            }
            .slick-dots li.slick-active button:before {
              color: #38bdf8;
              font-size: 12px;
              margin: 0 4px;
            }
          `}
        </style>
      </div>
    ),
  }

  return (
    <>
    
    <section className='container mx-auto max-w-screen-2xl px-6 pb-16 pt-20' id='section'>
      <div className='flex flex-wrap justify-between items-center'>
        <h1 className='lg:text-6xl text-4xl font-semibold'>About Us</h1>
        <p className='mt-2 lg:text-2xl text-xl lg:text-justify font-semibold text-sky-400'>Transforming digital experiences</p>
      </div>
      <Breadcrumbs/>
      <h1 className='lg:text-4xl text-2xl font-semibold pt-16'>Connecting You With The Creative World</h1>
    </section>

    <section className='container mx-auto max-w-screen-lg px-6 mt-16'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-y-6 gap-x-12 pb-10'>
        <div className='col-span-2 md:mr-12'>
          <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 w-max'>Our Story</h1>
          <p className='mt-6 text-lg lg:text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque dignissimos voluptatibus exercitationem impedit libero suscipit placeat doloremque id repudiandae tempore odio magni veritatis ipsa expedita, sed illum. Quibusdam explicabo saepe dolor quos deserunt esse!</p>
          <p className='mt-2 text-lg lg:text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus obcaecati deserunt earum quae impedit illum reiciendis officiis autem optio ipsum illo in, architecto tempore velit fugit. Ad, dolores autem.</p>
        </div>
        <div className=''>
          <p className='mt-6 text-lg lg:text-justify font-medium text-gray-400'>Life at CodeCloude</p>
        </div>
      </div>
      <div className='w-auto inline-flex items-center justify-center'>
        <a href='/' className='text-4xl w-max'><HiArrowLongRight className='hover:text-sky-400 translate-x-0 hover:translate-x-6 transition-all duration-300 delay-200 ease-out'/></a>
      </div>
    </section>

    <section className='container mx-auto max-w-screen-xl px-2 mt-16 pb-20'>
        <Slider {...settings}>
        {values.map((slide, index) => (
          <div key={index} className='py-20 lg:py-32 px-5 lg:px-20 bg-zinc-50 border mt-16 mb-5'>
            <h1 className='lg:text-xl text-xl font-semibold uppercase text-gray-400'>Our Values</h1>
            <div className='py-12 lg:py-24'>
              <h1 className="lg:text-6xl text-4xl font-semibold">
                {slide.title}
              </h1>
              <p className="mt-6 lg:text-2xl text-xl lg:text-justify">{slide.description}</p>
            </div>
          </div>
        ))}
        </Slider>
    </section>

    <section className='container mx-auto max-w-screen-xl px-2 mt-16'>
      <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 w-max mx-auto'>Our Leadership</h1>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-x-10 my-10'>
        <div className="relative">
          <img src='../assets/img/placeholder-team.png' alt='team 1' className='w-full'/>
          <div className="absolute inset-0 bg-black opacity-0 flex justify-center items-center hover:opacity-75 transition-opacity duration-300 delay-200 ease-out">
            <div className="text-white text-center pt-36">
              <h3 className="text-2xl font-bold">Name</h3>
              <h3 className="text-xl font-bold">Position</h3>
              <div className='flex gap-2 mt-5'>
                <a
                  href="/"
                  id="twitter"
                  className="bg-transparent border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-blue-400 hover:bg-blue-400 hover:text-white text-2xl flex items-center justify-center"
                  >
                  <FaTwitter size="1rem" />
                </a>
                <a
                  href="/"
                  id="linkedin"
                  className="bg-transparent transform border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-blue-500  hover:bg-blue-500 hover:text-white text-2xl flex items-center justify-center"
                  >
                  <FaLinkedin size="1rem" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src='../assets/img/placeholder-team.png' alt='team 1' className='w-full'/>
          <div className="absolute inset-0 bg-black opacity-0 flex justify-center items-center hover:opacity-75 transition-opacity duration-300 delay-200 ease-out">
            <div className="text-white text-center pt-36">
              <h3 className="text-2xl font-bold">Name</h3>
              <h3 className="text-xl font-bold">Position</h3>
              <div className='flex gap-2 mt-5'>
                <a
                  href="/"
                  id="twitter"
                  className="bg-transparent border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-blue-400 hover:bg-blue-400 hover:text-white text-2xl flex items-center justify-center"
                  >
                  <FaTwitter size="1rem" />
                </a>
                <a
                  href="/"
                  id="linkedin"
                  className="bg-transparent transform border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-blue-500  hover:bg-blue-500 hover:text-white text-2xl flex items-center justify-center"
                  >
                  <FaLinkedin size="1rem" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src='../assets/img/placeholder-team.png' alt='team 1' className='w-full'/>
          <div className="absolute inset-0 bg-black opacity-0 flex justify-center items-center hover:opacity-75 transition-opacity duration-300 delay-200 ease-out">
            <div className="text-white text-center pt-36">
              <h3 className="text-2xl font-bold">Name</h3>
              <h3 className="text-xl font-bold">Position</h3>
              <div className='flex gap-2 mt-5'>
                <a
                  href="/"
                  id="twitter"
                  className="bg-transparent border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-blue-400 hover:bg-blue-400 hover:text-white text-2xl flex items-center justify-center"
                  >
                  <FaTwitter size="1rem" />
                </a>
                <a
                  href="/"
                  id="linkedin"
                  className="bg-transparent transform border-2 w-8 h-8 rounded-full duration-500 text-gray-600 border-gray-600 hover:border-blue-500  hover:bg-blue-500 hover:text-white text-2xl flex items-center justify-center"
                  >
                  <FaLinkedin size="1rem" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='mx-auto w-max mt-16'>
          <a href="/" className="relative px-6 py-4 overflow-hidden group bg-sky-400 relative hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-4 hover:ring-sky-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative uppercase text-lg font-medium">Meet the Team</span>
          </a>
      </div>
    </section>


    <section className='container mx-auto max-w-screen-xl px-2 mt-32'>
      <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 sm:w-max w-3/4 mx-auto'>Highlights of our Achievements</h1>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-x-16 gap-x-2 gap-y-10 my-12'>
        <div className='text-2xl flex flex-col justify-center items-center text-center'>
          <img src='../assets/img/achievements/experience.png' alt='experience'/>
          <h3 className='font-medium mt-5'>13 Years</h3>
          <h4>of experience</h4>
        </div>
        <div className='text-2xl flex flex-col justify-center items-center text-center'>
          <img src='../assets/img/achievements/projects.png' alt='projects'/>
          <h3 className='font-medium mt-5'>1500+</h3>
          <h4>projects</h4>
        </div>
        <div className='text-2xl flex flex-col justify-center items-center text-center'>
          <img src='../assets/img/achievements/products.png' alt='products'/>
          <h3 className='font-medium mt-5'>50+</h3>
          <h4>products delivered</h4>
        </div>
        <div className='text-2xl flex flex-col justify-center items-center text-center'>
          <img src='../assets/img/achievements/employees.png' alt='employees'/>
          <h3 className='font-medium mt-5'>100+</h3>
          <h4>employees</h4>
        </div>
        <div className='text-2xl flex flex-col justify-center items-center text-center'>
          <img src='../assets/img/achievements/locations.png' alt='locations'/>
          <h3 className='font-medium mt-5'>6</h3>
          <h4>office locations</h4>
        </div>
        <div className='text-2xl flex flex-col justify-center items-center text-center'>
          <img src='../assets/img/achievements/certification.png' alt='certification'/>
          <h3 className='font-medium mt-5'>2</h3>
          <h4>Magento certification</h4>
        </div>
      </div>
    </section>


    <section className='container mx-auto max-w-screen-xl px-2 mt-32 relative'>
      <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 sm:w-max w-3/4 mx-auto mb-16'>Company News</h1>
      <div className="relative">
        <img src='../assets/img/recognition.jpg' alt='recognition' className='w-full'/>
        <div className="lg:absolute bottom-0 left-0 right-0 h-auto bg-black opacity-75 flex justify-center items-center">
          <div className='p-5 flex flex-col items-start'>
            <a href="/" className="text-white text-xl font-normal hover:text-sky-400 transition-all duration-300 ease-out">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae officiis obcaecati iste hic commodi quam odit error vitae eum. Iure, dolorum qui corrupti voluptatem error quae dolorem laborum. Eos!</a>
            <div className='w-auto items-center inline-flex justify-center'>
              <a href='/' className='text-4xl w-max'><HiArrowLongRight className='text-white hover:text-sky-400 translate-x-0 hover:translate-x-6 transition-all duration-300 delay-200 ease-out'/></a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className='container mx-auto max-w-screen-xl px-2 mt-32 relative'>
      <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 sm:w-max w-3/4 mx-auto mb-16'>Our Offerings</h1>
      <div className='grid md:grid-cols-3 grid-cols-1'>
        <div className='border p-16 flex flex-col justify-center items-center'>
          <img src='../assets/img/offerings/offering-icon1.png' alt='offering-icon1' />
          <h3 className='text-2xl font-semibold text-gray-700 pt-5 pb-2 mb-5 border-b-2'>Turnkey Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis tempora quos doloremque ratione. Eaque maxime officia blanditiis itaque, perferendis</p>
        </div>
        <div className='border p-16 flex flex-col justify-center items-center'>
          <img src='../assets/img/offerings/offering-icon2.png' alt='offering-icon2' />
          <h3 className='text-2xl font-semibold text-gray-700 pt-5 pb-2 mb-5 border-b-2'>Time & Material</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis tempora quos doloremque ratione. Eaque maxime officia blanditiis itaque, perferendis</p>
        </div>
        <div className='border p-16 flex flex-col justify-center items-center'>
          <img src='../assets/img/offerings/offering-icon3.png' alt='offering-icon3' />
          <h3 className='text-2xl font-semibold text-gray-700 pt-5 pb-2 mb-5 border-b-2'>ROI Based</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis tempora quos doloremque ratione. Eaque maxime officia blanditiis itaque, perferendis</p>
        </div>
      </div>
    </section>


    <section className='container mx-auto max-w-screen-xl px-2 my-16'>
      <div className='p-10 lg:p-20 bg-zinc-50 border mt-16 text-center'>
        <div className='md:mr-12 my-auto'>
          <h2 className='lg:text-3xl text-2xl font-normal border-t-2 py-6 w-max mx-auto'>Be One of Us</h2>
          <h1 className='lg:text-4xl text-3xl font-semibold pb-6'>Join our team</h1>
          <p className='mt-6 text-lg lg:text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident magni asperiores, dicta similique aliquam error laboriosam nostrum. Architecto dicta voluptates, possimus magnam, eaque nesciunt veritatis odit itaque culpa beatae voluptas.</p>
        </div>
        <div className='mx-auto w-max mt-16'>
        <div className="block w-1 mx-auto border-r-2 border-gray-300 h-16 mb-16"></div>
          <a href="/contact-us" className="px-6 py-4 relative group overflow-hidden font-normal bg-gray-800 text-white">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-sky-400 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white mt-6 text-lg font-medium uppercase">Apply now</span>
          </a>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About

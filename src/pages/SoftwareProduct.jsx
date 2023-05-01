import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2"
import Breadcrumbs from '../components/Breadcrumbs'

function SoftwareProduct() {

  const perks = [
    {
      title: "Business Edge",
      description:
        "Give your business a distinctive voice through effective branding solutions. A powerful digital presence gives a leading-edge and works as the primary contact point for your audience.",
        img: "../assets/img/custom-software/Landing-Pages-copy.png"
    },
    {
      title: "Brand Extension",
      description:
        "Our custom sites are an extension of your brand where everything from the appearance of the very button, the typeface, and other site components represent you.",
        img: "../assets/img/custom-software/brand-extension.png"
    },
    {
      title: "Goal oriented",
      description:
        "Tell us what your business targets are, and we will develop a custom site to meet your demands. Increase conversion and make your audience stay longer on site.",
        img: "../assets/img/custom-software/Goal-oriented.png"
    },
    {
      title: "Unique UX",
      description:
        "Our sites help to develop the user experiences you want so that the customers can interact with the brand and in keeping with the business requirements.",
        img: "../assets/img/custom-software/Unique-UX.png"
    },
    {
      title: "Improved rank",
      description:
        "We write search-friendly coding for your website to rank higher on the search engines and your target market easily discovers your business.",
        img: "../assets/img/custom-software/Improved-rank.png"
    },
    {
      title: "Ready expertise",
      description:
        "The site evolves and grows as does the brand and based on the growing business needs we build additional features. Just let us know when the goals change.",
        img: "../assets/img/custom-software/Ready-expertise.png"
    },
  ]

  return (
    <>
    
    <section className='container mx-auto max-w-screen-2xl px-6 pb-16 pt-20' id='section'>
      <div className='flex flex-wrap justify-between items-center'>
        <h1 className='lg:text-6xl text-4xl font-semibold'>Software Product Development</h1>
        <p className='mt-2 lg:text-2xl text-xl lg:text-justify font-semibold text-sky-400'>Transforming digital experiences</p>
      </div>
      <Breadcrumbs/>
      <h1 className='lg:text-4xl text-2xl font-semibold pt-16 md:pb-16 pb-8'>High Quality Software Development Services at Affordable Price</h1>
        <img src='../assets/img/software-product-intro-img.jpg' alt='custom solutions intro image'/>
    </section>

    <section className='container mx-auto max-w-screen-lg px-6 mt-16'>
        <div className=''>
          <h1 className='lg:text-4xl text-2xl font-semibold border-b-2 pb-4 md:w-max  mx-auto'>We Offer Solutions For Software Product Development</h1>
          <p className='mt-6 text-lg lg:text-justify text-gray-500'>Custom experience means breaking the box and developing solutions that take your business to the next level. Our custom web application development solutions fit this label, perfectly. The aim is to create tailored experiences for your targeted users by devising associated feel and look, the outline of a user journey, and decisions about the content. We evolve a functional skeleton from the considered sketches and create wireframes. Appealing designs emerge when we combine this with business brand identity. The development phase is about building with clean codes for front and backend.</p>
        </div>
    </section>


    <section className='container mx-auto max-w-screen-2xl px-6 pt-20' id='section'>
        <h1 className='lg:text-4xl text-2xl font-semibold border-b-2 pb-4 mb-10 mx-auto md:w-max'>Advanced Technologies for Software Product Solutions</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 '>
            <img src='../assets/img/platform-expertise2.jpg' alt='platform enterprise image' className='mx-auto mt-auto'/>
            <div className='md:mx-16 mt-5'>
                <div className='flex items-start justify-center'>
                    <img src='../assets/img/custom-software/laravel.jpg' alt='custom solutions intro image' className='mr-5'/>
                    <div className=''>
                        <h4 className='md:text-2xl text-xl font-semibold mb-2'>Laravel Development</h4>
                        <p className='md:text-lg'>Build amazing applications using Laravel. We serve you better in developing a framework that helps you in coding very easily.</p>
                        <div className='w-auto inline-flex items-center justify-center mt-2'>
                            <a href='/' className='text-4xl w-max'><HiArrowLongRight className='text-gray-400 hover:text-sky-400 translate-x-0 hover:translate-x-6 transition-all duration-300 delay-200 ease-out'/></a>
                        </div>
                    </div>
                </div>
                <div className='flex items-start justify-center'>
                    <img src='../assets/img/custom-software/node.jpg' alt='custom solutions intro image' className='mr-5'/>
                    <div className=''>
                        <h4 className='md:text-2xl text-xl font-semibold mb-2'>NodeJS Development</h4>
                        <p className='md:text-lg'>We are very good at providing all the server side applications using NodeJs.</p>
                        <div className='w-auto inline-flex items-center justify-center mt-2'>
                            <a href='/' className='text-4xl w-max'><HiArrowLongRight className='text-gray-400 hover:text-sky-400 translate-x-0 hover:translate-x-6 transition-all duration-300 delay-200 ease-out'/></a>
                        </div>
                    </div>
                </div>
                <div className='flex items-start justify-center'>
                    <img src='../assets/img/custom-software/react.jpg' alt='custom solutions intro image' className='mr-5'/>
                    <div className=''>
                        <h4 className='md:text-2xl text-xl font-semibold mb-2'>ReactJS Development</h4>
                        <p className='md:text-lg'>ReactJS is an open source Javascript library, maintained by the engineers at Facebook, Instagram and individual contributors.</p>
                        <div className='w-auto inline-flex items-center justify-center mt-2'>
                            <a href='/' className='text-4xl w-max'><HiArrowLongRight className='text-gray-400 hover:text-sky-400 translate-x-0 hover:translate-x-6 transition-all duration-300 delay-200 ease-out'/></a>
                        </div>
                    </div>
                </div>
                <div className='flex items-start justify-center'>
                    <img src='../assets/img/custom-software/ror.jpg' alt='custom solutions intro image' className='mr-5'/>
                    <div className=''>
                        <h4 className='md:text-2xl text-xl font-semibold mb-2'>Ruby on Rails Development</h4>
                        <p className='md:text-lg'>We are the leading Ruby on Rails (RoR) developers capable of executing complex business transactions and processes.</p>
                        <div className='w-auto inline-flex items-center justify-center mt-2'>
                            <a href='/' className='text-4xl w-max'><HiArrowLongRight className='text-gray-400 hover:text-sky-400 translate-x-0 hover:translate-x-6 transition-all duration-300 delay-200 ease-out'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className='container mx-auto max-w-screen-2xl md:px-20 px-5 py-20 bg-zinc-100' id='section'>
        <h1 className='lg:text-4xl text-2xl font-semibold border-b-2 pb-4 mb-10 mx-auto md:w-max'>Features of Our Software Product</h1>
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {perks.map((perk) => (
                <div key={perk.title} className='flex lg:flex-row flex-col items-start justify-center bg-white p-8 border'>
                    <div className='w-max mr-5 mb-5'>
                        <img src={perk.img} alt={perk.title} className='lg:w-64 w-16'/>
                    </div>
                    <div className=''>
                        <h4 className='text-gray-500 md:text-2xl text-xl font-semibold mb-2'>{perk.title}</h4>
                        <p className='md:text-lg text-gray-400'>{perk.description}</p>
                    </div>
                </div>
            ))
                
            }
        </div>
    </section>


    <section className='container mx-auto max-w-screen-lg px-6 mt-16'>
        <div className=''>
          <h1 className='lg:text-4xl text-2xl font-semibold border-b-2 mx-auto pb-4 md:w-max'>Unique Role of MEAN Stack Components</h1>
          <img src='../assets/img/ecommerce-solutions.jpg' alt='mean stack' className='mx-auto mt-16' />
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

export default SoftwareProduct

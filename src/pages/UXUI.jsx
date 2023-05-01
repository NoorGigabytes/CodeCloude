import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { BsCheck2 } from "react-icons/bs"

export default function UXUI() {
  return (
    <>
        <section className='container mx-auto max-w-screen-2xl px-6 pb-10 pt-20' id='section'>
          <div className='flex flex-wrap justify-between items-center'>
            <h1 className='lg:text-6xl text-4xl font-semibold'>UX/UI Design</h1>
            <p className='mt-2 lg:text-2xl text-xl lg:text-justify font-semibold text-sky-400'>Transforming digital experiences</p>
          </div>
          <Breadcrumbs/>
        </section>

    
        <section className='container mx-auto max-w-screen-2xl px-6 mt-16'>
            <div className='text-center my-16 max-w-screen-lg mx-auto'>
                <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 lg:w-max mx-auto'>Lorem ipsum dolor sit</h1>
                <p className='mt-6 text-lg lg:text-justify'>Creative, attractive, engaging and usable interfaces are the soul of any designs. Technically perfect UI/UX Designs for your websites and apps give users a pleasurable experience. An overall great user experience has a great recall value. A well-thought-out UI interface is the biggest key to ensuring great user experience. RK Infotech, India provides you with a pixel perfect UI/UX Designs with user experience design details to make your app/web more addicting and engaging. We have team of designers, skilled to design your app or website clear and attractive to help users locate any information or anything with accuracy and ease. We design custom user interfaces based on your business requirements for any device platforms, including mobile apps, tablets, desktops. We are the best UI design company commitment towards researching and implementing the best practices, strategies, creativity and latest technology to brand engaging user experiences with highly interactive apps and websites for today’s customers.</p>
                <p className='mt-6 text-lg lg:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio consequuntur laborum inventore facilis reiciendis, ab nemo accusamus laboriosam quos sunt dicta soluta voluptatem laudantium, atque expedita fuga eveniet, natus molestias commodi corporis.</p>
            </div>
            <img src='../assets/img/ux-ui.jpg' alt='industries' className='w-full h-full' />
        </section>


        <section className='container mx-auto max-w-screen-2xl px-6 mt-16'>
            <div className='text-center mt-16 max-w-screen-lg mx-auto'>
                <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 lg:w-max mx-auto'>We promise to deliver UI/UX designs with</h1>
                <div className='mt-10'>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Clarity In Design</span></p>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Well Organized</span></p>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Simplicity</span></p>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Consistency</span></p>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Responsive Design</span></p>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Proper Call To Action</span></p>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Highly Affordable</span></p>
                </div>
            </div>
        </section>


        <section className='container mx-auto max-w-screen-2xl px-6 mt-16'>
            <div className='text-center mt-16 max-w-screen-lg mx-auto'>
                <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 lg:w-max mx-auto'>We aim to provide you with an authentic experience!</h1>
                <div className='mt-10'>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>New Concept Design</span></p>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Application Re-design</span></p>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Prototyping</span></p>
                    <p className='mt-4 text-lg flex items-center'><BsCheck2 className='text-2xl text-sky-400 mr-5'/> <span>Promotional Artwork for App Store</span></p>
                </div>
            </div>
        </section>
    
    
        <section className='container mx-auto max-w-screen-xl px-2 my-16'>
          <div className='p-10 lg:p-20 bg-zinc-50 border mt-16 text-center'>
            <div className='md:mr-12 my-auto'>
              <h2 className='lg:text-3xl text-2xl font-normal border-t-2 py-6 w-max mx-auto'>You have a Vision</h2>
              <h1 className='lg:text-4xl text-3xl font-semibold pb-6'>We know the way to get you there.</h1>
              <p className='mt-6 text-lg lg:text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident magni asperiores, dicta similique aliquam error laboriosam nostrum. Architecto dicta voluptates, possimus magnam, eaque nesciunt veritatis odit itaque culpa beatae voluptas.</p>
            </div>
            <div className='mx-auto w-max mt-16'>
            <div className="block w-1 mx-auto border-r-2 border-gray-300 h-16 mb-16"></div>
              <a href="/contact-us" className="px-6 py-4 relative group overflow-hidden font-normal bg-gray-800 text-white">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-sky-400 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white mt-6 text-lg font-medium uppercase">Let's Get Started</span>
              </a>
            </div>
          </div>
        </section>
        
        </>
  )
}

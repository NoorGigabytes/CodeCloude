import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { HiArrowLongDown } from "react-icons/hi2"

export default function Process() {
  return (
    <>
        <section className='container mx-auto max-w-screen-2xl px-6 pb-10 pt-20' id='section'>
          <div className='flex flex-wrap justify-between items-center'>
            <h1 className='lg:text-6xl text-4xl font-semibold'>Our Process</h1>
            <p className='mt-2 lg:text-2xl text-xl lg:text-justify font-semibold text-sky-400'>Transforming digital experiences</p>
          </div>
          <Breadcrumbs/>
        </section>
    
        <section className='container mx-auto max-w-screen-2xl px-6 mt-16'>
            <div className='text-center mt-16 max-w-screen-lg mx-auto'>
                <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 lg:w-max mx-auto'>Our design work because we think it through!</h1>
                <p className='mt-6 text-lg lg:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio consequuntur laborum inventore facilis reiciendis, ab nemo accusamus laboriosam quos sunt dicta soluta voluptatem laudantium, atque expedita fuga eveniet, natus molestias commodi corporis.</p>
                <p className='mt-6 text-lg lg:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio consequuntur laborum inventore facilis reiciendis, ab nemo accusamus laboriosam quos sunt dicta soluta voluptatem laudantium, atque expedita fuga eveniet, natus molestias commodi corporis.</p>
            </div>
            <div className='mt-32 mx-auto lg:w-max text-white font-bold flex items-center justify-center'>
                <a href='#plan' className='lg:text-6xl text-5xl px-2 text-black hover:text-sky-400 w-min'><HiArrowLongDown/></a>
            </div>
        </section>


        <section className='mx-auto mt-16' id='plan'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 px-10 bg-zinc-50 mt-16 max-w-full'>
                <div className='my-auto'>
                    <img src='../assets/img/process/plan.png' alt='plan' className='w-full h-full xl:p-32 md:p-10 p-20 sm:inline hidden'/>
                </div>
                <div className='my-auto py-20'>
                    <div className='my-auto md:pt-0 pt-10 md:border-l-4 md:border-t-0 border-t-4 border-fuchsia-700 md:pl-8 xl:pr-32'>
                        <h1 className='lg:text-3xl text-2xl font-bold w-max'>1. Plan</h1>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className='mx-auto' id=''>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 px-10 bg-white max-w-full'>
                <div className='my-auto'>
                    <img src='../assets/img/process/design.png' alt='design' className='w-full h-full xl:p-32 md:p-10 p-20 sm:inline hidden'/>
                </div>
                <div className='my-auto py-20'>
                    <div className='my-auto md:pt-0 pt-10 md:border-l-4 md:border-t-0 border-t-4 border-orange-600 md:pl-8 xl:pr-32'>
                        <h1 className='lg:text-3xl text-2xl font-bold w-max'>2. Design</h1>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className='mx-auto' id=''>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 px-10 bg-zinc-50 max-w-full'>
                <div className='my-auto'>
                    <img src='../assets/img/process/develop.png' alt='develop' className='w-full h-full xl:p-32 md:p-10 p-20 sm:inline hidden'/>
                </div>
                <div className='my-auto py-20'>
                    <div className='my-auto md:pt-0 pt-10 md:border-l-4 md:border-t-0 border-t-4 border-amber-400 md:pl-8 xl:pr-32'>
                        <h1 className='lg:text-3xl text-2xl font-bold w-max'>3. Develop</h1>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className='mx-auto' id=''>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 px-10 bg-white max-w-full'>
                <div className='my-auto'>
                    <img src='../assets/img/process/launch.png' alt='launch' className='w-full h-full xl:p-32 md:p-10 p-20 sm:inline hidden'/>
                </div>
                <div className='my-auto py-20'>
                    <div className='my-auto md:pt-0 pt-10 md:border-l-4 md:border-t-0 border-t-4 border-lime-500 md:pl-8 xl:pr-32'>
                        <h1 className='lg:text-3xl text-2xl font-bold w-max'>4. Launch</h1>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className='mx-auto' id=''>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 px-10 bg-zinc-50 max-w-full'>
                <div className='my-auto'>
                    <img src='../assets/img/process/promote.png' alt='promote' className='w-full h-full xl:p-32 md:p-10 p-20 sm:inline hidden'/>
                </div>
                <div className='my-auto py-20'>
                    <div className='my-auto md:pt-0 pt-10 md:border-l-4 md:border-t-0 border-t-4 border-teal-500 md:pl-8 xl:pr-32'>
                        <h1 className='lg:text-3xl text-2xl font-bold w-max'>5. Promote</h1>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className='mx-auto' id=''>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 px-10 bg-white max-w-full'>
                <div className='my-auto'>
                    <img src='../assets/img/process/enhance.png' alt='enhance' className='w-full h-full xl:p-32 md:p-10 p-20 sm:inline hidden'/>
                </div>
                <div className='my-auto py-20'>
                    <div className='my-auto md:pt-0 pt-10 md:border-l-4 md:border-t-0 border-t-4 border-sky-600 md:pl-8 xl:pr-32'>
                        <h1 className='lg:text-3xl text-2xl font-bold w-max'>6. Enhance</h1>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                        <p className='mt-6 text-lg lg:text-justify'>As a full-service digital agency, we have successfully created benchmarks to digitalize existing businesses, build innovative websites, and augment teams for B2B, B2C, and enterprise agencies, which want to become influential brands.</p>
                    </div>
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

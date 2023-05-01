import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2"
import Breadcrumbs from '../components/Breadcrumbs'

function Partnership() {

  const perks = [
    {
      title: "5 Days a Week",
      description:
        "We believe in work-life balance and your priorities as well.",
        img: "../assets/img/partnership/5-Days-a-Week.png"
    },
    {
      title: "Regular Training",
      description:
        "Fuelling our employees with regular new learnings from experts.",
        img: "../assets/img/partnership/Regular-Training.png"
    },
    {
      title: "Flexible Timings",
      description:
        "Creating our edge towards caring for our employees mental health.",
        img: "../assets/img/partnership/Flexible-Timings.png"
    },
    {
      title: "Rewards and Recognition",
      description:
        "Hard-work pays off! Missing no chances to appreciate our employees.",
        img: "../assets/img/partnership/Rewards-an-Recognition.png"
    },
    {
      title: "Team Building Activities",
      description:
        'Its always "WE" and not "I" when it comes to company success. Imparting our core value in our employees.',
        img: "../assets/img/partnership/Team-Building-Activities.png"
    },
    {
      title: "WFH* policy",
      description:
        "We understand the need for work-station change for better productivity.",
        img: "../assets/img/partnership/WFH0.png"
    },
  ]

  const openings = [
    {
        position: "Laravel Developer",
        seats: 5,
        experience: "2+ years",
        url: "/"
    },
    {
        position: "WordPress Developer",
        seats: 2,
        experience: "5+ years",
        url: "/"
    },
    {
        position: "FrontEnd Developer",
        seats: 2,
        experience: "2+ years",
        url: "/"
    },
  ]

  return (
    <>
    
    <section className='container mx-auto max-w-screen-2xl px-6 pt-20' id='section'>
      <div className='flex flex-wrap justify-between items-center'>
        <h1 className='lg:text-6xl text-4xl font-semibold'>Partner With Us</h1>
        <p className='mt-2 lg:text-2xl text-xl lg:text-justify font-semibold text-sky-400'>We carve your career</p>
      </div>
      <Breadcrumbs/>
      <h1 className='lg:text-4xl text-2xl font-semibold pt-16 md:pb-16 pb-8'>High Quality Software Development Services at Affordable Price</h1>
    </section>

    <section className='container mx-auto max-w-screen-lg px-6 mt-16'>
        <div className=''>
          <h1 className='lg:text-4xl text-2xl font-semibold border-b-2 pb-4 md:w-max  mx-auto'>We Offer Custom Solutions For Software Development</h1>
          <p className='mt-6 text-lg lg:text-justify text-gray-500'>Custom experience means breaking the box and developing solutions that take your business to the next level. Our custom web application development solutions fit this label, perfectly. The aim is to create tailored experiences for your targeted users by devising associated feel and look, the outline of a user journey, and decisions about the content. We evolve a functional skeleton from the considered sketches and create wireframes. Appealing designs emerge when we combine this with business brand identity. The development phase is about building with clean codes for front and backend.</p>
        </div>
    </section>


    <section className='container mx-auto max-w-screen-2xl px-6 pt-20' id='section'>
      <div className='flex flex-wrap justify-between items-center gap-x-16'>
        <div className=''>
            <p className='lg:text-2xl text-xl lg:text-justify border-t w-max pt-2'>We want you</p>
            <h1 className='lg:text-4xl text-2xl font-semibold pt-5 md:pb-16 pb-8'>Do you want to be a partner?</h1>
        </div>
        <div className='border bg-zinc-50'>
            <a href='/'  className='lg:text-2xl text-lg w-max text-gray-400 hover:text-sky-400 transition-all duration-300 delay-200 ease-out'>
                <div className='flex justify-center items-center py-16 px-5'>
                    <span>View Recent Openings</span>
                    <HiArrowLongRight className='md:ml-5 ml-2 text-4xl mt-1'/>
                </div>
            </a>
        </div>
      </div>
    </section>


    <section className='container mx-auto max-w-screen-xl px-2 pb-20 mt-32'>
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


    <section className='container mx-auto max-w-screen-2xl md:px-20 px-5 py-20 bg-zinc-100' id='section'>
        <h1 className='lg:text-4xl text-2xl font-semibold border-b-2 pb-4 mb-10 mx-auto md:w-max'>Privileges of being a part of CodeCloude culture!</h1>
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {perks.map((perk) => (
                <div key={perk.title} className='flex lg:flex-row flex-col items-start justify-center bg-white p-8 border'>
                    <div className='w-max mr-5 mb-5'>
                        <img src={perk.img} alt={perk.title} className='lg:w-32 w-16'/>
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


    <section className='container mx-auto max-w-screen-xl px-6 mt-16'>
        <h1 className='lg:text-4xl text-2xl font-semibold border-b-2 mx-auto pb-4 md:w-max'>Interested? We’re hiring.</h1>
        <div className=''>
          <div className='mt-10'>
            {openings.map((opening) => (
                <div key={opening.position} className='mb-10 grid sm:grid-cols-4 grid-cols-1 gap-x-8 justify-between content-center'>
                    <p className='text-sky-400 text-xl'><a href={opening.url} >{opening.position}</a></p>
                    <p className='text-xl sm:mt-0 mt-2 sm:text-center'>{opening.seats} opening(s)</p>
                    <p className='text-xl sm:mt-0 mt-2 sm:text-center'>{opening.experience} experience</p>
                    <div className='sm:mt-0 mt-6 sm:text-end'>
                      <a href={opening.url} className='border-2 border-sky-400 px-5 py-3 font-medium text-sky-400 hover:bg-sky-400 hover:text-white transition-all duration-300 ease-in-out'>Apply</a>
                    </div>
                </div>
            ))}
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

export default Partnership

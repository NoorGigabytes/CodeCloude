import React, { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import RangeSliderBudget from './includes/RangeSliderBudget';
import RangeSliderTime from './includes/RangeSliderTime';



const Form1 = () => {
    const inputStyle= "appearance-none sm:text-lg text-sm shadow-sm border border-gray-100 w-full p-4 text-gray-700 leading-tight focus:outline-sky-400"
    const errorStyle= "text-red-500 text-sm mt-1 pl-1"
    const findOptions = [
      "Search Engine",
      "Online Advertisement",
      "Social Media",
      "Recommendation",
      "Meetup",
      "Others",
    ]
    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      find: "",
      message: "",
    };
  
    const validationSchema = Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      phone: Yup.number().typeError("Invalid phone number"),
    });
  
    const onSubmit = (values) => {
      console.log(values);
    };
  
    return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6 mt-16'>
                <div className="lg:mb-8 mb-4">
                    <Field className={inputStyle} type="text" name="firstName" id="firstName" placeholder="First Name" />
                    <ErrorMessage name="firstName" component="div" className={errorStyle} />
                </div>
                <div className="lg:mb-8 mb-4">
                    <Field className={inputStyle} type="text" name="lastName" id="lastName" placeholder="Last Name" />
                    <ErrorMessage name="lastName" component="div" className={errorStyle} />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
                <div className="lg:mb-8 mb-4">
                    <Field className={inputStyle} type="email" name="email" id="email" placeholder="Email Address" />
                    <ErrorMessage name="email" component="div" className={errorStyle} />
                </div>
                <div className="lg:mb-8 mb-4">
                    <Field className={inputStyle} type="tel" name="phone" id="phone" placeholder="Phone Number (Optional)" />
                    <ErrorMessage name="phone" component="div" className={errorStyle} />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
                <div className="lg:mb-8 mb-4">
                    <Field className={inputStyle} type="text" name="company" id="company" placeholder="Company Name (Optional)" />
                    <ErrorMessage name="company" component="div" className={errorStyle} />
                </div>
                <div className="lg:mb-8 mb-4">
                    <Field className={inputStyle} as="select" name="find" id="find">
                        <option value='' disabled >Where did you find us?</option>
                        {findOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="find" component="div" className={errorStyle} />
                </div>
            </div>
            <div className="lg:mb-8 mb-4">
                <Field className={`${inputStyle} h-32`} as="textarea" name="message" id="message" placeholder="Enter your message here" />
                <ErrorMessage name="message" component="div" className={errorStyle} />
            </div>
          <button className="md:text-lg hover:bg-sky-400 bg-transparent hover:text-white text-sky-400 font-semibold py-3 px-5 border-2 border-sky-400 focus:outline-none transition-all duration-300 ease-out" type="submit">
            Send Message
          </button>
        </Form>
      </Formik>
    );
};





const Form2 = () => {
  const inputStyle= "appearance-none sm:text-lg text-sm shadow-sm border border-gray-100 w-full p-4 text-gray-700 leading-tight focus:outline-sky-400"
  const errorStyle= "text-red-500 text-sm mt-1 pl-1"

  const [selectedServices, setSelectedServices] = useState([]);
  const servicesList = [
    {name: "Design", description: "Branding & Logo Design, Web/App Design, UX Strategy, Video Animation"}, 
    {name: "Development", description: "Front-end Development, CMS, eCommerce, Web Applications"}, 
    {name: "Digital Marketing", description: "Search Engine Optimization, Social Media Optimization, Paid Marketing, Content Marketing"},
  ]

  const handleServicesSelect = (e) => {
    const serviceValue = e.target.value;
    setSelectedServices((prevSelected) => {
      if (prevSelected.includes(serviceValue)) {
        return prevSelected.filter((service) => service !== serviceValue);
      }
      return [...prevSelected, serviceValue];
    })
  }

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    prods: "",
    employees: "",
    target: "",
    brand: "",
    competitors: "",
    services: [],
    budget: [0, 200],
    time: [0, 20],
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.number().typeError("Invalid phone number"),
    location: Yup.string().required("Required"),
    prods: Yup.string().required("Required"),
    employees: Yup.string().required("Required"),
    target: Yup.string().required("Required"),
    brand: Yup.string().required("Required"),
    competitors: Yup.string().required("Required"),
    services: Yup.array().min(1, 'Please select at least one'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values }) => (
      <Form>
          <h4 className='md:mb-10 mb-5 md:mt-16 mt-12 text-center md:text-xl text-lg font-medium'>All About Yourself</h4>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
              <div className="lg:mb-8 mb-4">
                  <Field className={inputStyle} type="text" name="fullName" id="fullName" placeholder="Full Name" />
                  <ErrorMessage name="fullName" component="div" className={errorStyle} />
              </div>
              <div className="lg:mb-8 mb-4">
                  <Field className={inputStyle} type="email" name="email" id="email" placeholder="Email Address" />
                  <ErrorMessage name="email" component="div" className={errorStyle} />
              </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
              <div className="lg:mb-8 mb-4">
                  <Field className={inputStyle} type="tel" name="phone" id="phone" placeholder="Phone Number (Optional)" />
                  <ErrorMessage name="phone" component="div" className={errorStyle} />
              </div>
              <div className="lg:mb-8 mb-4">
                  <Field className={inputStyle} type="text" name="company" id="company" placeholder="Company Name (Optional)" />
                  <ErrorMessage name="company" component="div" className={errorStyle} />
              </div>
          </div>
          <h4 className='md:mb-10 mb-5 text-center md:text-xl text-lg font-medium'>All About Your Company</h4>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
              <div className="lg:mb-8 mb-4">
                  <Field className={inputStyle} type="text" name="location" id="location" placeholder="Where's your company located?" />
                  <ErrorMessage name="location" component="div" className={errorStyle} />
              </div>
              <div className="lg:mb-8 mb-4">
                  <Field className={inputStyle} type="text" name="prods" id="prods" placeholder="What Products/Services do you sell?" />
                  <ErrorMessage name="prods" component="div" className={errorStyle} />
              </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
              <div className="lg:mb-8 mb-4">
                  <Field className={inputStyle} type="text" name="employees" id="employees" placeholder="How many employees do you have?" />
                  <ErrorMessage name="employees" component="div" className={errorStyle} />
              </div>
              <div className="lg:mb-8 mb-4">
                  <Field className={inputStyle} type="text" name="target" id="target" placeholder="Who is your target market?" />
                  <ErrorMessage name="target" component="div" className={errorStyle} />
              </div>
          </div>
          <h4 className='md:mb-10 mb-5 text-center md:text-xl text-lg font-medium'>What help do you need from us?</h4>
          <div className='grid md:grid-cols-1 grid-cols-1 gap-x-6'>
              <div className="lg:mb-8 mb-4">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 w-full">
                    {servicesList.map((service) => (<label key={service.name}
                      className={`transition-all duration-300 ease-out text-gray-400 border py-4 px-4 cursor-pointer hover:border-sky-400 bg-white shadow-sm ${
                        selectedServices.includes(service.name)
                          ? "border-sky-400 bg-slate-50 text-sky-500"
                          : ""
                      }`}
                    >
                      <Field
                        type="checkbox"
                        name="services"
                        value={service.name}
                        className="sr-only"
                        onClick={handleServicesSelect}
                      />
                      <div className="">
                        <h4 className='font-medium md:text-xl text-lg text-sky-500'>{service.name}</h4>
                        <p className='md:text-base text-sm mt-2 '>{service.description}</p>
                      </div>
                    </label>))}
                </div>
                <ErrorMessage name="services" component="div" className={errorStyle} />
              </div>
          </div>
          <h4 className='md:mb-10 mb-5 text-center md:text-xl text-lg font-medium'>What’s your budget & time duration for this project?</h4>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
              <div className="lg:mb-8 mb-4">
                <Field
                  name="budget"
                  value={values.range}
                  component={RangeSliderBudget}
                  min={0}
                  max={1000}
                  step={1}
                />
              </div>
              <div className="lg:mb-8 mb-4">
                <Field
                    name="time"
                    value={values.range}
                    component={RangeSliderTime}
                    min={0}
                    max={100}
                    step={1}
                  />
              </div>
          </div>
          <h4 className='md:mb-10 mb-5 text-center md:text-xl text-lg font-medium'>Other Details</h4>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
              <div className="lg:mb-8 mb-4">
                  <Field className={`${inputStyle} sm:h-52 h-32`} as="textarea" name="competitors" id="competitors" placeholder="Who are your competitors and how do they position themselves? How do you differ from them? (Please provide links of your comptetitors)" />
                  <ErrorMessage name="competitors" component="div" className={errorStyle} />
              </div>
              <div className="lg:mb-8 mb-4">
                  <Field className={`${inputStyle} sm:h-52 h-32`} as="textarea" name="brand" id="brand" placeholder="What is the overall message you wish to portray with your brand? What should people feel when they see or think of your brand? Or any other details." />
                  <ErrorMessage name="brand" component="div" className={errorStyle} />
              </div>
          </div>
        <button className="md:text-lg hover:bg-sky-400 bg-transparent hover:text-white text-sky-400 font-semibold py-3 px-5 border-2 border-sky-400 focus:outline-none transition-all duration-300 ease-out" type="submit">
          Send Message
        </button>
      </Form>
      )}
    </Formik>
  );
};






export default function Contact() {
    const [activeTab, setActiveTab] = useState("form1");
    const offices = [
      {
        location: "Knoxville",
        address: "4434 Sutherland Ave., #10804 Knoxville, TN 37939-0804",
        addressUrl: "https://www.google.com/maps/place/4434+Sutherland+Ave,+Knoxville,+TN+37919,+USA/@35.9361981,-83.9958757,17z/data=!3m1!4b1!4m5!3m4!1s0x885c2335a5be9235:0xd1b32038a7e6563b!8m2!3d35.9361981!4d-83.993687",
        phone: "+1-310-606-2426",
        phoneUrl: "+13106062426",
        img: "../assets/img/offices/Knoxville.jpg",
      },
      {
        location: "Virginia",
        address: "4434 Sutherland Ave., #10804 Knoxville, TN 37939-0804",
        addressUrl: "https://www.google.com/maps/place/4434+Sutherland+Ave,+Knoxville,+TN+37919,+USA/@35.9361981,-83.9958757,17z/data=!3m1!4b1!4m5!3m4!1s0x885c2335a5be9235:0xd1b32038a7e6563b!8m2!3d35.9361981!4d-83.993687",
        phone: "+1-310-606-2426",
        phoneUrl: "+13106062426",
        img: "../assets/img/offices/Virginia.jpg",
      },
      {
        location: "Denver",
        address: "4434 Sutherland Ave., #10804 Knoxville, TN 37939-0804",
        addressUrl: "https://www.google.com/maps/place/4434+Sutherland+Ave,+Knoxville,+TN+37919,+USA/@35.9361981,-83.9958757,17z/data=!3m1!4b1!4m5!3m4!1s0x885c2335a5be9235:0xd1b32038a7e6563b!8m2!3d35.9361981!4d-83.993687",
        phone: "+1-310-606-2426",
        phoneUrl: "+13106062426",
        img: "../assets/img/offices/Denver.png",
      },
      {
        location: "Hamilton",
        address: "4434 Sutherland Ave., #10804 Knoxville, TN 37939-0804",
        addressUrl: "https://www.google.com/maps/place/4434+Sutherland+Ave,+Knoxville,+TN+37919,+USA/@35.9361981,-83.9958757,17z/data=!3m1!4b1!4m5!3m4!1s0x885c2335a5be9235:0xd1b32038a7e6563b!8m2!3d35.9361981!4d-83.993687",
        phone: "+1-310-606-2426",
        phoneUrl: "+13106062426",
        img: "../assets/img/offices/Hamilton.png",
      },
      {
        location: "Amsterdam",
        address: "4434 Sutherland Ave., #10804 Knoxville, TN 37939-0804",
        addressUrl: "https://www.google.com/maps/place/4434+Sutherland+Ave,+Knoxville,+TN+37919,+USA/@35.9361981,-83.9958757,17z/data=!3m1!4b1!4m5!3m4!1s0x885c2335a5be9235:0xd1b32038a7e6563b!8m2!3d35.9361981!4d-83.993687",
        phone: "+1-310-606-2426",
        phoneUrl: "+13106062426",
        img: "../assets/img/offices/Amsterdam.jpg",
      },
      {
        location: "Ahmedabad",
        address: "4434 Sutherland Ave., #10804 Knoxville, TN 37939-0804",
        addressUrl: "https://www.google.com/maps/place/4434+Sutherland+Ave,+Knoxville,+TN+37919,+USA/@35.9361981,-83.9958757,17z/data=!3m1!4b1!4m5!3m4!1s0x885c2335a5be9235:0xd1b32038a7e6563b!8m2!3d35.9361981!4d-83.993687",
        phone: "+1-310-606-2426",
        phoneUrl: "+13106062426",
        img: "../assets/img/offices/Ahmedabad.jpg",
      },
    ]
  return (
    <>
        <section className='container mx-auto max-w-screen-2xl px-6 pb-10 pt-20' id='section'>
          <div className='flex flex-wrap justify-between items-center'>
            <h1 className='lg:text-6xl text-4xl font-semibold'>Contact Us</h1>
            <p className='mt-2 lg:text-2xl text-xl lg:text-justify font-semibold text-sky-400'>Transforming digital experiences</p>
          </div>
          <Breadcrumbs/>
          <h1 className='lg:text-4xl text-2xl font-semibold pt-16'>“Dream, Believe, Work, Achieve, Celebrate.”</h1>
        </section>


        <section className='container mx-auto max-w-screen-xl my-16'>
          <div className='p-5 lg:p-20 bg-zinc-50 border mt-16'>
            <div className='my-auto'>
                <div className='text-center my-16 max-w-screen-lg mx-auto'>
                    <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 lg:w-max mx-auto'>We’re Listening</h1>
                    <p className='mt-6 text-lg lg:text-justify'>You can contact us using the contact form below. If you have a project in mind, our Project Planner might be more suitable.</p>
                </div>
                <div className="mx-auto">
                    <div className="mb-4 text-center sm:text-xl text-md font-medium flex flex-wrap justify-center items-center gap-6 lg:gap-8">
                        <button className={`py-2 px-1 border-b-2 hover:text-sky-400 hover:border-sky-400 transition-all duration-300 ease-out ${activeTab === "form1" ? "border-sky-400 text-sky-400" : "border-transparent"}`} onClick={() => setActiveTab("form1")}>
                        Quick Contact
                        </button>
                        <button className={`py-2 px-1 border-b-2 hover:text-sky-400 hover:border-sky-400 transition-all duration-300 ease-out ${activeTab === "form2" ? "border-sky-400 text-sky-400" : "border-transparent"}`} onClick={() => setActiveTab("form2")}>
                        Project Planner
                        </button>
                    </div>
                    {activeTab === "form1" ? <Form1 /> : <Form2 />}
                </div>
            </div>
          </div>
        </section>
        

        <section className='container mx-auto max-w-screen-xl px-2 mt-32 mb-16 relative'>
          <h1 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-4 sm:w-max w-3/4 mb-16'>Our Offices</h1>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
             {offices.map((office) => (
              <div key={office.location} className='text-gray-500 mx-auto mb-5'>
                <img src={office.img} alt={office.location}/>
                <p className='mt-5 text-2xl font-semibold'>{office.location}</p>
                <p className='mt-2 md:text-lg hover:text-sky-400 transition-all duration-300 ease-out'><a href={office.addressUrl} target="_blank" >{office.address}</a></p>
                <p className='mt-3 text-xl font-semibold'>Phone</p>
                <p className='mt-2 md:text-lg hover:text-sky-400 transition-all duration-300 ease-out'><a href={`tel:${office.phoneUrl}`} >{office.phone}</a></p>
              </div>
             ))}
          </div>
        </section>

        </>
  )
}

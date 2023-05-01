import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    sliderRef.slickGoTo(slideIndex);
  };

  let sliderRef;

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-y-4 gap-x-8 p-5 lg:p-20 bg-zinc-50 border mt-16'>
      <div className='md:px-4 py-4 flex flex-col justify-center items-center'>
        <h2 className='lg:text-4xl text-3xl font-semibold border-b-2 pb-6 w-auto'>Trusted by 1k+ happy customers</h2>
        <h2 className='lg:text-2xl text-xl font-normal py-6 w-auto'>They’ve experienced our services and they know what we did it. Know more on what our customers think of us.</h2>
        <div className='flex justify-center items-center mt-4 w-1/4 gap-4'>
          <button className='text-5xl text-black hover:text-sky-400 transition-all ease-out duration-300' onClick={() => goToSlide(currentSlide - 1)}>&larr;</button>
          <button className='text-5xl text-black hover:text-sky-400 transition-all ease-out duration-300' onClick={() => goToSlide(currentSlide + 1)}>&rarr;</button>
        </div>
      </div>
      <div className='col-span-2'>
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
            <div className='mb-5'>
                <div className='bg-white lg:p-8 p-4 mb-6'>
                    <p className='text-lg italic '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora provident consectetur amet ut consequatur nam qui iure accusamus magni iste, quaerat expedita a libero corporis assumenda quod id omnis repellendus? Inventore similique natus autem beatae ab, fugit aut soluta? Est praesentium reiciendis quod dignissimos?</p>
                    <p className='text-lg italic '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero deleniti magnam recusandae. Ab laudantium expedita distinctio accusantium quasi, quas voluptate quaerat voluptatem quod. Optio consequatur ab aliquid illo dicta!</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className=''>
                        <img src='./assets/img/testimonials/testimonial-1.png' alt='testimonial 1' className='rounded-full'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>David</h3>
                        <p className='text-gray-400'>Client, Colorado</p>
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <div className='bg-white lg:p-8 p-4 mb-6'>
                    <p className='text-lg italic '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora provident consectetur amet ut consequatur nam qui iure accusamus magni iste, quaerat expedita a libero corporis assumenda quod id omnis repellendus? Inventore similique natus autem beatae ab, fugit aut soluta? Est praesentium reiciendis quod dignissimos?</p>
                    <p className='text-lg italic '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero deleniti magnam recusandae. Ab laudantium expedita distinctio accusantium quasi, quas voluptate quaerat voluptatem quod. Optio consequatur ab aliquid illo dicta!</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className=''>
                        <img src='./assets/img/testimonials/testimonial-2.jpg' alt='testimonial 1' className='rounded-full'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Peyton Warren</h3>
                        <p className='text-gray-400'>Business Analyst</p>
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <div className='bg-white lg:p-8 p-4 mb-6'>
                    <p className='text-lg italic '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora provident consectetur amet ut consequatur nam qui iure accusamus magni iste, quaerat expedita a libero corporis assumenda quod id omnis repellendus? Inventore similique natus autem beatae ab, fugit aut soluta? Est praesentium reiciendis quod dignissimos?</p>
                    <p className='text-lg italic '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero deleniti magnam recusandae. Ab laudantium expedita distinctio accusantium quasi, quas voluptate quaerat voluptatem quod. Optio consequatur ab aliquid illo dicta!</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className=''>
                        <img src='./assets/img/testimonials/testimonial-3.jpg' alt='testimonial 1' className='rounded-full'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Gary Burton</h3>
                        <p className='text-gray-400'>CEO of A-MFM</p>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;

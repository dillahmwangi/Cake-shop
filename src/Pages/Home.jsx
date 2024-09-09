
import {Link} from 'react-router-dom'
import cake from '../assets/cake-one.png'
import cake3 from '../assets/cake3.png'
import { Icon } from '@iconify/react';
import Layout from '../Components/Layout';



export const Home = () => {

return (
  <Layout>
  <div className="bg-pink-100">
  
    <div className="bg-pink-100 p-4">
      <section className="mt-4 mx-auto max-w-screen-xl pb-8 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Where Every Cake Tells a Delicious Story.
            <span className="text-pink-500 font-semibold">
              Savor the Sweet Moments
            </span>
          </h1>
          <p className="text-gray-700 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link
              to="/checkOut"
              className="px-8 py-3 w-full bg-pink-500 text-white text-center rounded-md shadow-md block sm:w-auto"
            >
              Order Now
            </Link>
            <Icon
              icon="line-md:phone-call-twotone-loop"
              width="32"
              height="32"
              style={{ color: "#ec4899" }}
            />
            <Link to="0713289622">0713289622</Link>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src={cake3}
            className="w-full mx-auto sm:w-10/12  lg:w-full"
            alt=""
          />
        </div>
      </section>
    </div>
 {/* <div id="default-carousel" className="relative w-full" data-carousel="slide">
     <!-- Carousel wrapper --> 
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 --> 
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
             <div className="transition-all duration-1000 ease-in-out transform bg-pink-200 p-4">
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Discover the Art of Cake Perfection with Every Slice.
            <span className="text-pink-500"> Savor the Sweet Moments </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Where
            Every Cake Tells a Delicious Story
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <Link
            to="/checkOut"
            className="px-8 py-3 w-full bg-pink-500 text-white text-center rounded-md shadow-md block sm:w-auto"
          >
            Order Now
          </Link>
          <Icon
            icon="line-md:phone-call-twotone-loop"
            width="32"
            height="32"
            style={{ color: "#ec4899" }}
          />
          <Link to="0713289622">0713289622</Link>
        </div>
      </section>
    </div>
        </div>
       Item 2  
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
           <div className="transition-all duration-1000 ease-in-out transform bg-pink-200 p-4">
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Discover the Art of Cake Perfection with Every Slice.
            <span className="text-pink-500"> Savor the Sweet Moments </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Where
            Every Cake Tells a Delicious Story
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <Link
            to="#"
            className="px-8 py-3 w-full bg-pink-500 text-white text-center rounded-md shadow-md block sm:w-auto"
          >
            Order Now
          </Link>
          <Icon
            icon="line-md:phone-call-twotone-loop"
            width="32"
            height="32"
            style={{ color: "#ec4899" }}
          />
          <Link to="0713289622">0713289622</Link>
        </div>
      </section>
    </div>
        </div>
        <!-- Item 3 --> 
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="transition-all duration-1000 ease-in-out transform bg-pink-200 p-4">
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Discover the Art of Cake Perfection with Every Slice.
            <span className="text-pink-500"> Savor the Sweet Moments </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Where
            Every Cake Tells a Delicious Story
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <Link
            to="#"
            className="px-8 py-3 w-full bg-pink-500 text-white text-center rounded-md shadow-md block sm:w-auto"
          >
            Order Now
          </Link>
          <Icon
            icon="line-md:phone-call-twotone-loop"
            width="32"
            height="32"
            style={{ color: "#ec4899" }}
          />
          <Link to="0713289622">0713289622</Link>
        </div>
      </section>
    </div>
        </div>
        {/* <!-- Item 4 --> 
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
             <div className="transition-all duration-1000 ease-in-out transform bg-pink-200 p-4">
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Discover the Art of Cake Perfection with Every Slice.
            <span className="text-pink-500"> Savor the Sweet Moments </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Where
            Every Cake Tells a Delicious Story
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <Link
            to="#"
            className="px-8 py-3 w-full bg-pink-500 text-white text-center rounded-md shadow-md block sm:w-auto"
          >
            Order Now
          </Link>
          <Icon
            icon="line-md:phone-call-twotone-loop"
            width="32"
            height="32"
            style={{ color: "#ec4899" }}
          />
          <Link to="0713289622">0713289622</Link>
        </div>
      </section>
    </div>
        </div>
        {/* <!-- Item 5 --> 
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
           <div className="transition-all duration-1000 ease-in-out transform bg-pink-200 p-4">
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Discover the Art of Cake Perfection with Every Slice.
            <span className="text-pink-500"> Savor the Sweet Moments </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Where
            Every Cake Tells a Delicious Story
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <Link
            to="#"
            className="px-8 py-3 w-full bg-pink-500 text-white text-center rounded-md shadow-md block sm:w-auto"
          >
            Order Now
          </Link>
          <Icon
            icon="line-md:phone-call-twotone-loop"
            width="32"
            height="32"
            style={{ color: "#ec4899" }}
          />
          <Link to="0713289622">0713289622</Link>
        </div>
      </section>
    </div>
        </div>
    </div>
    {/* // Slider indicators  
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> 
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button> 
 </div>  */}

 

<div id="gallery" className="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>


<div  className=' bg-pink-100'>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
            </svg>
            <span className="relative">We offer Cake for Every Occassion</span>
          </span>
          </h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">

      <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

<div className="p-6">
  <div
    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
      <path
        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
        data-original="#000000"></path>
    </svg>
  </div>
  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
    <img src={cake} alt="Product 3" className="h-full w-full object-contain" />
  </div>
</div>
<div className="text-center bg-gray-100 p-6">
  <h3 className="text-lg font-bold text-gray-800">Vanilla Velvet Brew</h3>
  <h4 className="text-lg text-gray-800 font-bold mt-6">$15 
  </h4>
  <button 
       
        className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
        View Description
      </button>
</div>
</div>

<div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

<div className="p-6">
  <div
    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
      <path
        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
        data-original="#000000"></path>
    </svg>
  </div>
  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
    <img src={cake} alt="Product 3" className="h-full w-full object-contain" />
  </div>
</div>
<div className="text-center bg-gray-100 p-6">
  <h3 className="text-lg font-bold text-gray-800">Vanilla Velvet Brew</h3>
  <h4 className="text-lg text-gray-800 font-bold mt-6">$15 
  </h4>
  <button 
       
        className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
        View Description
      </button>
</div>
</div>

<div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

<div className="p-6">
  <div
    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
      <path
        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
        data-original="#000000"></path>
    </svg>
  </div>
  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
    <img src={cake} alt="Product 3" className="h-full w-full object-contain" />
  </div>
</div>
<div className="text-center bg-gray-100 p-6">
  <h3 className="text-lg font-bold text-gray-800">Vanilla Velvet Brew</h3>
  <h4 className="text-lg text-gray-800 font-bold mt-6">$15 
  </h4>
  <button 
       
        className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
        View Description
      </button>
</div>
</div>
</div>
 <div className="mt-12 flex justify-center items-center">
<Link
  to="/gallery"
  className="px-8 py-3 bg-pink-500 text-white text-center rounded-md shadow-md"
>
  View More
</Link>
</div>
</div>

      
    </div>
  </div>
  </Layout>
);
}
    
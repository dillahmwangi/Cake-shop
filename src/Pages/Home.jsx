import { Link } from "react-router-dom";
import cake from "../assets/cake-one.png";
import cake3 from "../assets/cake3.png";
import { Icon } from "@iconify/react";
import Layout from "../Components/Layout";
import Carousel from '../Components/Carousel';

export const Home = () => {
  return (
    <Layout>
      <div className="bg-pink-200">
        <div className="bg-pink-200 bg-opacity-75 p-4 relative">
          <section className="mt-4 mx-auto max-w-screen-xl pb-8 items-center lg:flex md:px-8">
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
              <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                Where Every Cake Tells a Delicious Story.
                <span className="text-pink-500 font-semibold">
                  Savor the Sweet Moments
                </span>
              </h1>
              <p className="text-gray-700 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
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
                <Link to="tel:+254713289622">0713289622</Link>
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

        <div className="bg-pink-100">
          <section className="mt-4 mx-auto max-w-screen-xl p-8 items-center lg:flex md:px-8">

          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            
        <Carousel/>
        </div>
          </section>
        </div>

        <div className="bg-pink-100 p-2">
          <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                Discover the Art of Cake Perfection with Every Slice.
                <span className="text-pink-500"> Savor the Sweet Moments </span>
              </h1>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                Where Every Cake Tells a Delicious Story
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

        <div className=" bg-pink-200 ">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  ></svg>
                  <span className="relative">
                    We offer Cake for Every Occassion
                  </span>
                </span>
              </h2>
            </div>
            <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
                <div className="p-6">
                  <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src={cake}
                      alt="Product 3"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    Vanilla Velvet Brew
                  </h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$15</h4>
                  <button className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                    View Description
                  </button>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
                <div className="p-6">
                  <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src={cake}
                      alt="Product 3"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    Vanilla Velvet Brew
                  </h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$15</h4>
                  <button className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
                    View Description
                  </button>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
                <div className="p-6">
                  <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src={cake}
                      alt="Product 3"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    Vanilla Velvet Brew
                  </h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$15</h4>
                  <button className="w-full flex items-center justify-center gap-3 mt-6 px-8 py-3 bg-pink-500 text-base text-white font-semibold rounded-xl">
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

          <div className="bg-pink-100 p-6">
            <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-pink-200 mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-pink-500 before:h-full max-md:before:hidden">
              <div>
                <h2 className="text-gray-800 text-3xl font-extrabold">
                  Get In Touch
                </h2>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                  Have a specific inquiry or looking to explore new
                  opportunities? Our experienced team is ready to engage with
                  you.
                </p>

                <form>
                  <div className="space-y-4 mt-8">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-pink-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Street"
                      className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-pink-500 outline-none"
                    />
                    <div className="grid grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="City"
                        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-pink-500 outline-none"
                      />

                      <input
                        type="text"
                        placeholder="Postcode"
                        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-pink-500 outline-none"
                      />
                    </div>
                    <input
                      type="number"
                      placeholder="Phone No."
                      className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-pink-500 outline-none"
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-pink-500 outline-none"
                    />

                    <textarea
                      placeholder="Write Message"
                      className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-pink-500 outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="#fff"
                      className="mr-2"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clip-rule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                    Send Message
                  </button>
                </form>

                <ul className="mt-4 flex flex-wrap justify-center gap-6">
                  <li className="flex items-center text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="currentColor"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                    <Link to="#" className="text-sm ml-4">
                      <strong>info@example.com</strong>
                    </Link>
                  </li>
                  <li className="flex items-center text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="currentColor"
                      viewBox="0 0 482.6 482.6"
                    >
                      <path
                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <Link to="#" className="text-sm ml-4">
                      <strong>+158 996 888</strong>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="z-10 relative h-full max-md:min-h-[350px]">
                <iframe
                  src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  frameborder="0"
                  title="Map"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

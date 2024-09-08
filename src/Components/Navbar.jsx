import { useState } from 'react'
import {Link} from 'react-router-dom'
// import cake from '../assets/cake-one.png'
import { Icon } from '@iconify/react';
// import cake3 from '../assets/cake3.png'



export const Navbar = () => {

const [state, setState] = useState(false)

// Replace # path with your path
const navigation = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/preview" },
    { title: "Menu", path: "/menu" },
    { title: "Gallery", path: "/gallery" }
];

return (

<header className= "bg-pink-200">
<nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
  <div className="flex justify-between ">
    <Icon
      icon="wpf:wedding-cake"
      width="40"
      height="40"
      style={{ color: "#ec4899" }}
    />
    <span className="p-2 font-serif  font-semibold font-800">
      Homemade <span>Sweetness</span>
    </span>

    <button
      className="text-gray-500 outline-none md:hidden font-semibold"
      onClick={() => setState(!state)}
    >
      {state ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  </div>

  <ul
    className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
      state ? "" : "hidden"
    }`}
  >
    <li className="order-2  md:pb-3">
      <Link
        to="/"
        className="py-3 px-6 rounded-md shadow-md text-white text-center bg-pink-500 font-semibold focus:shadow-none block md:inline"
      >
        SIGN IN
      </Link>
    </li>
    <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
      {navigation.map((item, idx) => (
        <li
          className="text-black-500 hover:text-pink-500 font-semibold active:underline py-3"
          key={idx}
        >
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </div>
  </ul>
</nav>
</header>

    )}
import React from 'react'
// import { Link } from 'react-router-dom'
import cake from '../assets/cake-one.png'
// import cake3 from '../assets/cake3.png'
import Layout from '../Components/Layout'


export const Cart = () => {
  return (
    <Layout>
    {/* <div className="bg-pink-100">
    <div className="font-sans py-16 items-center mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
    <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto py-4">
            <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-pink-200 p-4 rounded-md">
                    <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                    <hr className="border-gray-300 mt-4 mb-8" />

                    <div className="space-y-4">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <div className="col-span-2 flex items-center gap-4">
                                <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                    <img src={cake} className="w-full h-full object-contain" alt='' />
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-gray-800">Velvet Sneaker</h3>
                                    <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                    <div className="flex gap-4 mt-4">
                                        <div className="relative group">
                                            <button type="button"
                                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                XL
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-gray-500 inline ml-2.5" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                        clipRule="evenodd" data-original="#000000" />
                                                </svg>
                                            </button>

                                            <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <button type="button"
                                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                </svg>

                                                <span className="mx-2.5">1</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <h4 className="text-base font-bold text-gray-800">$20.00</h4>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 items-center gap-4">
                            <div className="col-span-2 flex items-center gap-4">
                                <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                    <img src={cake3} className="w-full h-full object-contain" alt=''/>
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-gray-800">Smart Watch Timex</h3>
                                    <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                    <div className="flex gap-4 mt-4">
                                        <div className="relative group">
                                            <button type="button"
                                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                XL
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-gray-500 inline ml-2.5" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                        clipRule="evenodd" data-original="#000000" />
                                                </svg>
                                            </button>

                                            <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <button type="button"
                                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                </svg>

                                                <span className="mx-2.5">1</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <h4 className="text-base font-bold text-gray-800">$120.00</h4>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 items-center gap-4">
                            <div className="col-span-2 flex items-center gap-4">
                                <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                    <img src={cake} className="w-full h-full object-contain" alt=''/>
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-gray-800">Sun Glass</h3>
                                    <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                    <div className="flex gap-4 mt-4">
                                        <div className="relative group">
                                            <button type="button"
                                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                XL
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-gray-500 inline ml-2.5" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                        clipRule="evenodd" data-original="#000000" />
                                                </svg>
                                            </button>

                                            <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <button type="button"
                                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                </svg>

                                                <span className="mx-2.5">1</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <h4 className="text-base font-bold text-gray-800">$50.00</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-pink-50 rounded-md p-4 md:sticky top-0 border border-pink-600">
                    <div className="flex border border-pink-600 overflow-hidden rounded-md">
                        <input type="email" placeholder="Promo code"
                            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
                        <button type='button' className="flex items-center justify-center font-semibold tracking-wide bg-pink-500 hover:bg-pink-600 px-4 text-sm text-white">
                            Apply
                        </button>
                    </div>

                    <ul className="text-gray-800 mt-8 space-y-4">
                        <li className="flex flex-wrap gap-4 text-base">Sub Total <span className="ml-auto font-bold">$0.00</span></li>
                        <li className="flex flex-wrap gap-4 text-base">Shipping <span className="ml-auto font-bold">$2.00</span></li>
                        <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">$4.00</span></li>
                        <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">$52.00</span></li>
                    </ul>

                    <div className="mt-8 space-y-2">
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-pink-500 hover:bg-pink-600 text-white rounded-md">Checkout</button>
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-pink-500 rounded-md">Continue Shopping  </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div> */}
<div className='bg-pink-100'>
<div class="font-sans max-w-6xl mx-auto p-4">
      <h2 class="text-3xl font-bold text-gray-800">Your Cart</h2>
      <div class="overflow-x-auto">
        <table class="mt-12 w-full border-collapse divide-y">

          <thead class="whitespace-nowrap text-left">
            <tr>
              <th class="text-base text-gray-500 font-medium p-2">Description</th>
              <th class="text-base text-gray-500 font-medium p-2">Size</th>
              <th class="text-base text-gray-500 font-medium p-2">Quantity</th>
              <th class="text-base text-gray-500 font-medium p-2">Remove</th>
              <th class="text-base text-gray-500 font-medium p-2">Price</th>
            </tr>
          </thead>

          <tbody class="whitespace-nowrap divide-y">
            <tr>
              <td class="px-2 py-4">
                <div class="flex items-center gap-4 w-max">
                  <div class="h-32 shrink-0">
                    <img src={cake} class="w-full h-full object-contain rounded-lg" alt=''/>
                  </div>
                  <div>
                    <p class="text-base font-bold text-gray-800">Black T-Shirt</p>
                  </div>
                </div>
              </td>

              <td class="px-2 py-4">
                <span class="bg-transparent border flex items-center justify-center w-11 h-10 rounded-lg text-base">
                  M
                </span>
              </td>

              <td class="px-2 py-4">
                <div class="flex overflow-hidden border w-max rounded-lg">
                  <button type="button" class="bg-gray-100 flex items-center justify-center w-11 h-10 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 124 124">
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                    </svg>
                  </button>
                  <span class="bg-transparent flex items-center justify-center w-11 h-10 font-semibold text-gray-800 text-base">
                    1
                  </span>
                  <button type="button" class="bg-gray-800 text-white flex items-center justify-center w-11 h-10 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 42 42">
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                    </svg>
                  </button>
                </div>
              </td>

              <td class="px-2 py-4">
                <button type="button" class="bg-transparent border flex items-center justify-center w-11 h-10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-red-500 inline" viewBox="0 0 24 24">
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"></path>
                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"></path>
                  </svg>
                </button>
              </td>

              <td class="px-2 py-4">
                <h4 class="text-base font-bold text-gray-800">$18.5</h4>
              </td>
            </tr>

            <tr>
              <td class="px-2 py-4">
                <div class="flex items-center gap-4 w-max">
                  <div class="h-32 shrink-0">
                    <img src={cake} class="w-full h-full object-contain rounded-lg" alt=''/>
                  </div>
                  <div>
                    <p class="text-base font-bold text-gray-800">Gray T-Shirt</p>
                  </div>
                </div>
              </td>

              <td class="px-2 py-4">
                <span class="bg-transparent border flex items-center justify-center w-11 h-10 rounded-lg text-base">
                  M
                </span>
              </td>

              <td class="px-2 py-4">
                <div class="flex overflow-hidden border w-max rounded-lg">
                  <button type="button" class="bg-gray-100 flex items-center justify-center w-11 h-10 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 124 124">
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                    </svg>
                  </button>
                  <span class="bg-transparent flex items-center justify-center w-11 h-10 font-semibold text-gray-800 text-base">
                    1
                  </span>
                  <button type="button" class="bg-gray-800 text-white flex items-center justify-center w-11 h-10 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 42 42">
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                    </svg>
                  </button>
                </div>
              </td>

              <td class="px-2 py-4">
                <button type="button" class="bg-transparent border flex items-center justify-center w-11 h-10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"></path>
                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"></path>
                  </svg>
                </button>
              </td>

              <td class="px-2 py-4">
                <h4 class="text-base font-bold text-gray-800">$18.5</h4>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div class="max-w-xl ml-auto">
        <ul class="text-gray-800 divide-y">
          <li class="flex flex-wrap gap-3 text-base py-3">Subtotal <span class="ml-auto font-bold">$37.00</span></li>
          <li class="flex flex-wrap gap-3 text-base py-3">Shipping <span class="ml-auto font-bold">$4.00</span></li>
          <li class="flex flex-wrap gap-3 text-base py-3">Tax <span class="ml-auto font-bold">$4.00</span></li>
          <li class="flex flex-wrap gap-3 text-base py-3 font-bold">Total <span class="ml-auto">$45.00</span></li>
        </ul>
        <button type="button" class="mt-6 text-base tracking-wide px-5 py-2.5 w-full bg-gray-800 hover:bg-gray-900 text-white rounded-lg">Make Payment</button>
      </div>
    </div>
    </div>
        </Layout>
  )
}

export default Cart
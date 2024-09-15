import React from "react";
// import { useState } from "react"
import Layout from "../Components/Layout";

const Checkout = () => {
  return (
    <Layout>
      <div className="bg-pink-200 p-6">
        <div class="font-sans bg-pink-100 p-12 py-10">
          <section className=" ">
            <div class="max-w-4xl mx-auto">
              <div class="text-center">
                <h2 class="text-3xl font-semibold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
                  Checkout
                </h2>
              </div>

              <div class="mt-12">
                <div class="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 class="text-3xl font-bold text-pink-500">01</h3>
                    <h3 class="text-xl font-bold text-gray-800 mt-1">
                      Cake Design
                    </h3>
                  </div>
                  <div class="md:col-span-2">
                    <form>
                      <div class="grid sm:grid-cols-2 gap-4">
                        <div
                          class="group max-w-[20em] min-w-0 grow mb-4 data-[disabled]:select-none data-[disabled]:opacity-50 text-base formkit-outer"
                          data-type="select"
                          data-empty="true"
                        >
                          <div class="relative flex items-center bg-white border border-neutral-400 rounded focus-within:ring-1 focus-within:!ring-blue-500 focus-within:!border-blue-500 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-neutral-100 group-data-[disabled]:!cursor-not-allowed shadow group-[]/repeater:shadow-none group-[]/multistep:shadow-none group-data-[multiple]:rounded dark:bg-transparent dark:border-neutral-500 dark:group-data-[disabled]:bg-neutral-800/5 dark:group-data-[invalid]:border-red-500 dark:group-data-[invalid]:ring-red-500 formkit-inner">
                            <select
                              class="appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-neutral-700 group-data-[has-overlay]:selection:!text-transparent grow p-2 py-2 px-3 pr-[2em] text-base text-neutral-700 text-ellipsis min-w-0 outline-none bg-transparent group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-neutral-400 group-data-[multiple]:!p-0 selection:bg-blue-100 dark:data-[placeholder]:text-neutral-400/50 dark:text-neutral-300 border-none focus:ring-0 bg-none formkit-input"
                              id="input_0"
                              data-placeholder="true"
                              name="select_1"
                            >
                              <option
                                hidden=""
                                disabled=""
                                data-is-placeholder="true"
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                selected=""
                                value=""
                              >
                                Select Cake Flavour
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Apple"
                              >
                                Apple
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Peach"
                              >
                                Peach
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Pear"
                              >
                                Pear
                              </option>
                            </select>
                            <span class="absolute w-[1em] text-neutral-700 pointer-events-none right-2 group-data-[suffix-icon]:mr-[1.5em] dark:text-neutral-300 formkit-selectIcon formkit-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 7"
                              >
                                <path
                                  d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div
                          class="group max-w-[20em] min-w-0 grow mb-4 data-[disabled]:select-none data-[disabled]:opacity-50 text-base formkit-outer"
                          data-type="select"
                          data-empty="true"
                        >
                          <div class="relative flex items-center bg-white border border-neutral-400 rounded focus-within:ring-1 focus-within:!ring-blue-500 focus-within:!border-blue-500 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-neutral-100 group-data-[disabled]:!cursor-not-allowed shadow group-[]/repeater:shadow-none group-[]/multistep:shadow-none group-data-[multiple]:rounded dark:bg-transparent dark:border-neutral-500 dark:group-data-[disabled]:bg-neutral-800/5 dark:group-data-[invalid]:border-red-500 dark:group-data-[invalid]:ring-red-500 formkit-inner">
                            <select
                              class="appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-neutral-700 group-data-[has-overlay]:selection:!text-transparent grow p-2 py-2 px-3 pr-[2em] text-base text-neutral-700 text-ellipsis min-w-0 outline-none bg-transparent group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-neutral-400 group-data-[multiple]:!p-0 selection:bg-blue-100 dark:data-[placeholder]:text-neutral-400/50 dark:text-neutral-300 border-none focus:ring-0 bg-none formkit-input"
                              id="input_0"
                              data-placeholder="true"
                              name="select_1"
                            >
                              <option
                                hidden=""
                                disabled=""
                                data-is-placeholder="true"
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                selected=""
                                value=""
                              >
                                Select Cake Weight
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Apple"
                              >
                                Apple
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Peach"
                              >
                                Peach
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Pear"
                              >
                                Pear
                              </option>
                            </select>
                            <span class="absolute w-[1em] text-neutral-700 pointer-events-none right-2 group-data-[suffix-icon]:mr-[1.5em] dark:text-neutral-300 formkit-selectIcon formkit-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 7"
                              >
                                <path
                                  d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div
                          class="group max-w-[20em] min-w-0 grow mb-4 data-[disabled]:select-none data-[disabled]:opacity-50 text-base formkit-outer"
                          data-type="select"
                          data-empty="true"
                        >
                          <div class="relative flex items-center bg-white border border-neutral-400 rounded focus-within:ring-1 focus-within:!ring-blue-500 focus-within:!border-blue-500 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-neutral-100 group-data-[disabled]:!cursor-not-allowed shadow group-[]/repeater:shadow-none group-[]/multistep:shadow-none group-data-[multiple]:rounded dark:bg-transparent dark:border-neutral-500 dark:group-data-[disabled]:bg-neutral-800/5 dark:group-data-[invalid]:border-red-500 dark:group-data-[invalid]:ring-red-500 formkit-inner">
                            <select
                              class="appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-neutral-700 group-data-[has-overlay]:selection:!text-transparent grow p-2 py-2 px-3 pr-[2em] text-base text-neutral-700 text-ellipsis min-w-0 outline-none bg-transparent group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-neutral-400 group-data-[multiple]:!p-0 selection:bg-blue-100 dark:data-[placeholder]:text-neutral-400/50 dark:text-neutral-300 border-none focus:ring-0 bg-none formkit-input"
                              id="input_0"
                              data-placeholder="true"
                              name="select_1"
                            >
                              <option
                                hidden=""
                                disabled=""
                                data-is-placeholder="true"
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                selected=""
                                value=""
                              >
                                Select Add-ons
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Apple"
                              >
                                Apple
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Peach"
                              >
                                Peach
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Pear"
                              >
                                Pear
                              </option>
                            </select>
                            <span class="absolute w-[1em] text-neutral-700 pointer-events-none right-2 group-data-[suffix-icon]:mr-[1.5em] dark:text-neutral-300 formkit-selectIcon formkit-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 7"
                              >
                                <path
                                  d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div
                          class="group max-w-[20em] min-w-0 grow mb-4 data-[disabled]:select-none data-[disabled]:opacity-50 text-base formkit-outer"
                          data-type="select"
                          data-empty="true"
                        >
                          <div class="relative flex items-center bg-white border border-pink-500 rounded focus-within:ring-1 focus-within:!ring-pink-500 focus-within:!border-pink-500 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-neutral-100 group-data-[disabled]:!cursor-not-allowed shadow group-[]/repeater:shadow-none group-[]/multistep:shadow-none group-data-[multiple]:rounded dark:bg-transparent dark:border-neutral-500 dark:group-data-[disabled]:bg-neutral-800/5 dark:group-data-[invalid]:border-red-500 dark:group-data-[invalid]:ring-red-500 formkit-inner">
                            <select
                              class="appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-neutral-700 group-data-[has-overlay]:selection:!text-transparent grow p-2 py-2 px-3 pr-[2em] text-base text-neutral-700 text-ellipsis min-w-0 outline-none bg-transparent group-data-[disabled]:!cursor-not-allowed group-data-[prefix-icon]:!pl-0 group-data-[suffix-icon]:!pr-0 data-[placeholder]:text-neutral-400 group-data-[multiple]:!p-0 selection:bg-blue-100 dark:data-[placeholder]:text-neutral-400/50 dark:text-neutral-300 border-none focus:ring-0 bg-none formkit-input"
                              id="input_0"
                              data-placeholder="true"
                              name="select_1"
                            >
                              <option
                                hidden=""
                                disabled=""
                                data-is-placeholder="true"
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                selected=""
                                value=""
                              >
                                Select Cake Froasting
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Apple"
                              >
                                Apple
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Peach"
                              >
                                Peach
                              </option>
                              <option
                                class="bg-white text-neutral-700 group-data-[disabled]:opacity-50 group-data-[disabled]:select-none group-data-[multiple]:checked:bg-blue-100 group-data-[multiple]:focus:bg-blue-100 group-data-[multiple]:text-sm group-data-[multiple]:outline-none group-data-[multiple]:border-none group-data-[multiple]:py-1.5 group-data-[multiple]:px-2 dark:bg-neutral-800 dark:text-neutral-300 dark:group-data-[multiple]:focus:bg-blue-800 dark:group-data-[multiple]:checked:bg-blue-800 formkit-option"
                                value="Pear"
                              >
                                Pear
                              </option>
                            </select>
                            <span class="absolute w-[1em] text-neutral-700 pointer-events-none right-2 group-data-[suffix-icon]:mr-[1.5em] dark:text-neutral-300 formkit-selectIcon formkit-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 7"
                              >
                                <path
                                  d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z"
                                  fill="currentColor"
                                >
                                </path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="font-[sans-serif]  p-2">
                        <label class="text-base text-gray-500 font-semibold mb-2 block">
                          Upload Design Image or Print
                        </label>
                        <input
                          type="file"
                          class="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
                        />
                        <p class="text-xs text-gray-400 mt-2">
                          PNG, JPG SVG, WEBP, and GIF are Allowed.
                        </p>
                      </div>

                      <div className="p-2">
                        <label
                          for="website-url"
                          className="block py-2 text-black"
                        >
                          Paste Link to Design
                        </label>
                        <div className="flex items-center text-black border rounded-md">
                          <div className="px-3 py-2.5 rounded-l-md bg-gray-100 border-r">
                            https://
                          </div>
                          <input
                            type="text"
                            placeholder="www.example.com"
                            id="website-url"
                            className="w-full p-2.5 ml-2 bg-white border border-pink-500 outline-none"
                          />
                        </div>
                      </div>

                      <div className="p-2">
                        <textarea
                          id="message"
                          rows="4"
                          class="block p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-pink-500 focus:ring-pink-500 focus:border-pink-50 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Provide Message to be Added on the cake here..."
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="mt-12">
                <div class="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 class="text-3xl font-bold text-pink-500">02</h3>
                    <h3 class="text-xl font-bold text-gray-800 mt-1">
                      Shipping / Collection
                    </h3>
                  </div>

                  <div class="md:col-span-2">
                    <form>
                      <div class="grid sm:grid-cols-2 gap-4">
                        <div class="flex items-center">
                          <input
                            type="radio"
                            class="w-5 h-5 cursor-pointer"
                            id="paypal"
                          />
                          <label
                            for="paypal"
                            class="ml-4 flex gap-2 cursor-pointer"
                          >
                            Store Pick Up
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            type="radio"
                            class="w-5 h-5 cursor-pointer"
                            id="paypal"
                          />
                          <label
                            for="paypal"
                            class="ml-4 flex gap-2 cursor-pointer"
                          >
                            Delivery (KES.250 Around CBD)
                          </label>
                        </div>
                      </div>
                     <div className="p-2">
                      <label class="text-md font-bold mb-4 p-2">
                        Schedule Pick Up / Delivery Date
                      </label>
                      <div
                        class="group max-w-[20em] min-w-0 grow mb-4 data-[disabled]:select-none data-[disabled]:opacity-50 text-base formkit-outer"
                        data-family="text"
                        data-type="date"
                        data-empty="true"
                      >
                        <div class="flex flex-col items-start justify-start mb-1.5 last:mb-0 formkit-wrapper p-2">
                          <div class="text-base flex items-center w-full py-2 px-3 rounded border border-neutral-400 bg-white focus-within:ring-1 focus-within:!ring-blue-500 focus-within:!border-blue-500 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-neutral-100 group-data-[disabled]:!cursor-not-allowed shadow group-[]/repeater:shadow-none group-[]/multistep:shadow-none dark:bg-transparent dark:border-neutral-500 dark:group-data-[disabled]:bg-neutral-800/5 dark:group-data-[invalid]:border-red-500 dark:group-data-[invalid]:ring-red-500 formkit-inner">
                            <input
                              class="appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-neutral-700 group-data-[has-overlay]:selection:!text-transparent text-base text-neutral-700 min-w-0 min-h-[1.5em] grow outline-none bg-transparent selection:bg-blue-100 placeholder:text-neutral-400 group-data-[disabled]:!cursor-not-allowed dark:placeholder-neutral-400/50 dark:text-neutral-300 border-none p-0 focus:ring-0 focus:[&amp;::-webkit-datetime-edit-day-field]:bg-blue-100 focus:[&amp;::-webkit-datetime-edit-month-field]:bg-blue-100 focus:[&amp;::-webkit-datetime-edit-year-field]:bg-blue-100 formkit-input"
                              type="date"
                              name="date"
                              id="input_1"
                              aria-describedby="help-input_1"
                              aria-required="true"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-2">
                        <textarea
                          id="message"
                          rows="4"
                          class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-pink-500 focus:ring-pink-500 focus:border-pink-50 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Provide Delivery Location here..."
                        ></textarea>
                      </div>
                      </div>
                     
                    </form>
                  </div>
                </div>

                <div class="grid md:grid-cols-3 gap-4 mt-12">
                  <div>
                    <h3 class="text-3xl font-bold text-pink-500">03</h3>
                    <h3 class="text-xl font-bold text-gray-800 mt-1">
                     Customer Details
                    </h3>
                  </div>

                  <div class="md:col-span-2">
                    <form>
                      <div class="grid sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Full Name"
                            class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-pink-500 outline-none"
                          />
                        </div>
                        <div>
                          <input
                            type="phone"
                            placeholder="Phone Number"
                            class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-pink-500 outline-none"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email Address"
                            class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-pink-500 outline-none"
                          />
                        </div>
                       
                      </div>
                    </form>
                  </div>
                </div>

                {/* <div class="grid md:grid-cols-3 gap-4 mt-12">
                  <div>
                    <h3 class="text-3xl font-bold text-pink-500">04</h3>
                    <h3 class="text-xl font-bold text-gray-800 mt-1">
                      Payment method
                    </h3>
                  </div>

                  <div class="md:col-span-2">
                    <div class="grid gap-4 sm:grid-cols-3">
                      <div class="flex items-center">
                        <input
                          type="radio"
                          class="w-5 h-5 cursor-pointer"
                          id="paypal"
                        />
                        <label
                          for="paypal"
                          class="ml-4 flex gap-2 cursor-pointer"
                        >
                          <img
                            src="https://images.app.goo.gl/A59Z9PkprPPak48CA"
                            class="w-20"
                            alt="M-pesa"
                          />
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          type="radio"
                          class="w-5 h-5 cursor-pointer"
                          id="card"
                          checked
                        />
                        <label
                          for="card"
                          class="ml-4 flex gap-2 cursor-pointer"
                        >
                          <img
                            src="https://readymadeui.com/images/visa.webp"
                            class="w-12"
                            alt="card1"
                          />
                          <img
                            src="https://readymadeui.com/images/american-express.webp"
                            class="w-12"
                            alt="card2"
                          />
                          <img
                            src="https://readymadeui.com/images/master.webp"
                            class="w-12"
                            alt="card3"
                          />
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          type="radio"
                          class="w-5 h-5 cursor-pointer"
                          id="paypal"
                        />
                        <label
                          for="paypal"
                          class="ml-4 flex gap-2 cursor-pointer"
                        >
                          <img
                            src="https://readymadeui.com/images/paypal.webp"
                            class="w-20"
                            alt="paypalCard"
                          />
                        </label>
                      </div>
                    </div>

                    <div class="grid sm:grid-cols-4 gap-4 mt-4">
                      <div class="col-span-2">
                        <input
                          type="number"
                          placeholder="Card number"
                          class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-pink-500 outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="EXP."
                          class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-pink-500 outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="CVV"
                          class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-pink-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

                <div class="flex flex-wrap justify-end gap-4 mt-12">
                  {/* <button
                    type="button"
                    class="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 border-pink-500 text-gray-800 rounded-md hover:bg-pink-300"
                  >
                    Pay later
                  </button> */}
                  <button
                    type="button"
                    class="px-6 py-3 text-sm font-semibold tracking-wide bg-pink-500 text-white rounded-md hover:bg-pink-600"
                  >
                    Complete Order
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;

import React, { useEffect, useState } from 'react';

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])
    return (
        <div className='grid grid-cols-3'>
            <div>
                <aside class="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">


                    <div class="flex flex-col justify-between flex-1 mt-6">


                        <div>
                            <div class="flex items-center justify-between">
                                <h2 class="text-base font-semibold text-gray-800 dark:text-white">Categories</h2>
                            </div>

                            <nav class="mt-4 -mx-3 space-y-3 ">


                                <button class="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <div class="flex items-center gap-x-2 ">

                                        <span>All items</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                                <button class="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                    <div class="flex items-center gap-x-2 ">

                                        <span>Bird</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                                <button class="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                    <div class="flex items-center gap-x-2 ">

                                        <span>Cat</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                                <button class="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                    <div class="flex items-center gap-x-2 ">

                                        <span>Dog</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                                <button class="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                    <div class="flex items-center gap-x-2 ">

                                        <span>Fish</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    </div>
                </aside>
            </div>
            <div>
                <div>
                    <img className='p-5 mb-10' src="https://texaslifestylemag.com/wp-content/uploads/2018/06/Mi-Golondrina-dresses1_cover-e1530291397597.jpg" alt="" />
                </div>
                <div>
                    <h2 className='text-xl my-5'>All items</h2>
                    {items.map((item, i) => <div key={i}><div class="flex max-w-md mb-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div class="w-1/3 bg-cover" ><img src={item.image} alt=''></img></div>

                        <div class="w-2/3 p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h1>

                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{item.price}</h1>
                                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add</button>
                            </div>
                        </div>
                    </div> </div>)}
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;
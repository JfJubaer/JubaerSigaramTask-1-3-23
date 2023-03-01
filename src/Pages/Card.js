import React from 'react';

const Card = ({ item }) => {
    const { id, price, description, title, image } = item;
    const addToCart = (id) => {
        localStorage.setItem('Id', id);
    }
    return (
        <div class="flex max-w-md mb-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div class="w-1/3 bg-cover" ><img src={image} alt=''></img></div>

            <div class="w-2/3 p-4 md:p-4">
                <h1 class="text-xl font-bold text-gray-800 dark:text-white">{title}</h1>

                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                <div class="flex justify-between mt-3 item-center">
                    <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{price}</h1>
                    <button onClick={() => addToCart(id)} class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
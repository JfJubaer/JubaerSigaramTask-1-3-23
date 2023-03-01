import React, { useEffect, useState } from 'react';

const Cart = () => {
    const id = localStorage.getItem('Id');
    console.log(id);

    const [item, setItem] = useState('');
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setItem(json);
                console.log(json);
            })
    }, [id]);
    const { title, image, price } = item;
    return (
        <div>
            <h2 className='text-xl m-5'>My Cart</h2>
            <div class="flex max-w-md mb-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="w-1/3 bg-cover" ><img src={image} alt=''></img></div>
                <div class="w-2/3 p-4 md:p-4">
                    <h1 class="text-xl font-bold text-gray-800 dark:text-white">{title}</h1>
                    <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{price}</h1>

                </div>
            </div>
        </div>
    );
};

export default Cart;
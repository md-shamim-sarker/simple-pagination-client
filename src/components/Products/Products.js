import React, {useEffect} from 'react';
import {useState} from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

    const pages = Math.ceil(count / size);

    const paginationHandler = (event) => {
        setPage(event.target.innerText);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setCount(data.count);
            })
            .catch(err => console.log(err));
    }, [page, size]);

    return (
        <>
            <h2 className='text-xl font-bold text-center'>Total Result {count}</h2>
            <h2 className='text-center'>Total Pages: {pages}</h2>
            <div className='w-4/5 mx-auto my-5 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    products.map((product, index) => <div key={index}>
                        <div className='border border-blue-500 p-2 hover:shadow-xl cursor-pointer'>
                            <h2 className='text-xl font-bold'>{product.serial}. {product.title}</h2>
                            <p>{product.details}</p>
                            <p>Price: ${product.price}</p>
                            <p>Available: ${product.quantity}</p>
                        </div>
                    </div>)
                }
            </div>
            <h2 className='text-center'>Current Page: {page}, Result Size: {size}</h2>
            <div className='w-full flex justify-center flex-wrap gap-y-1'>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={`w-7 border border-blue-600`}
                        onClick={paginationHandler}
                    >
                        {number + 1}
                    </button>)
                }
                <select onChange={(event) => setSize(event.target.value)} className='w-auto border border-blue-600'>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                    <option value="30">30</option>
                </select>
            </div>
        </>
    );
};

export default Products;
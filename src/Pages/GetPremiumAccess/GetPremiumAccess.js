import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GetPremiumAccess = () => {
    const course = useLoaderData();
    const { price, title, author, videoduration, videos } = course;
    return (
        <div className='flex justify-center py-20 bg-gray-100'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure style={{ backgroundColor: '#000033' }} className='text-white py-16 text-6xl font-semibold'>${price}</figure>
                <div className="card-body">
                    <h2 className="card-title">Course Name: {title}</h2>
                    <p>
                        Instructor: {author.name} <br></br>
                        Course Time: {videoduration}<br></br>
                        Total Video: {videos}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GetPremiumAccess;
import { AuthErrorCodes } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { image, title, description, price, author } = course;
    return (
        <div style={{ width: '100%' }} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="course" /></figure>
            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p className='text-red-600 font-semibold'>Price: ${price}</p>
                <p> {
                    description.length > 250 ?
                        <p className=' text-gray-600 leading-7'>{description.slice(0, 120) + '..'} <Link className='text-blue-500' to={`/course/${course._id}`} >More</Link></p>
                        :
                        <p>{description}</p>
                }</p>
                <p className='mb-4'>Instructor: {author.name}</p>
                <div className="card-actions justify-start">
                    <Link to={`/course/${course._id}`}><button className="btn btn-bg btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;
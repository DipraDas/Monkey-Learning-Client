import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { image, title, description } = course;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="course" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p> {
                    description.length > 250 ?
                        <p>{description.slice(0, 250) + '......'} <Link className='btn btn-bg' to={`/course/${course._id}`} >More</Link></p>
                        :
                        <p>{description}</p>
                }</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-bg btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default Course;
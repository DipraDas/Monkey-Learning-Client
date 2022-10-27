import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCertificate, FaChild, FaCrown, FaDollarSign } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import './CourseDetails.css';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    const { _id, image, title, description, author, price, totalenrolled, completed, videos, videoduration } = course;
    return (
        <div ref={ref} className="bg-gray-200">
            <div className="back">
                <h1 style={{ fontSize: '70px', color: '#fff' }} className=''>Course: {title}</h1>
            </div>
            <div className="container mx-auto py-10">
                <figure><img className='mx-auto' src={image} alt="course" /></figure>
                <div className='px-10 py-10'>
                    <h2 className='text-3xl font-medium text-gray-800 mb-3'>Description</h2>
                    <p className='text-justify tracking-wide text-lg  text-gray-600 leading-8'>{description}</p>
                    <div className='mx-auto text-center my-5'>
                        <Link className='btn btn-success text-slate-50 ' to={`/premiumAccess/${_id}`}> Enroll Now</Link>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 bg-gray-300 mt-5 p-6 rounded-lg">
                        <div className='pb-3'>
                            <h2 className='text-xl font-medium text-gray-800 pt-3 mb-3'>What Includes?</h2>
                            <div className='flex items-center mb-1'><FaCertificate className='text-indigo-800 mr-3'></FaCertificate>Certification</div>
                            <div className='flex items-center mb-1'><FaVideo className='text-indigo-800 mr-3'></FaVideo>Watch Offline</div>
                            <div className='flex items-center mb-1'><FaBusinessTime className='text-indigo-800 mr-3'></FaBusinessTime>Lifetime Access</div>
                        </div>
                        <div>
                            <h2 className='text-xl font-medium text-gray-800 pt-3 mb-3'>Video Details</h2>
                            <div className='flex items-center mb-1'><FaVideo className='text-indigo-800 mr-3'></FaVideo>Total Videos: {videos}</div>
                            <div className='flex items-center mb-1'><FaVideo className='text-indigo-800 mr-3'></FaVideo>Video Duration: {videoduration}</div>
                            <div className='flex items-center mb-1'><FaVideo className='text-indigo-800 mr-3'></FaVideo>1080p High Resulation Video</div>
                        </div>
                        <div>
                            <h2 className='text-xl font-medium text-gray-800 pt-3 mb-3'>Course Details</h2>
                            <div className='flex items-center mb-1'><FaDollarSign className='text-indigo-800 mr-3'></FaDollarSign>Price: ${price}</div>
                            <div className='flex items-center mb-1'><FaChild className='text-indigo-800 mr-3'></FaChild>Total Enrolled: {totalenrolled}</div>
                            <div className='flex items-center mb-1'><FaCrown className='text-indigo-800 mr-3'></FaCrown>Successfully Completed: {completed}</div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl mt-10 sm:w-full md:w-2/4 mx-auto">
                        <figure className='sm:pt-5 md:pt-0'><img src={author.img} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mt-7">Instractor: {author.name}</h2>
                            <p>Published On: {author.publisheddate}<br></br> Position: {author.position}</p>
                        </div>
                    </div>
                </div>
                <div className='mx-auto text-center'>
                    <Pdf targetRef={ref} filename="Monkey_Learning.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className="btn btn-active btn-primary text-center">Download PDF</button>}
                    </Pdf>
                </div>

            </div>
        </div>
    );
};

export default CourseDetails;
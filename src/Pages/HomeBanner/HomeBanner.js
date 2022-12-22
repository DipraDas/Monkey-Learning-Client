import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/mb.png';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='py-20 bannerBack'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                <div className='w-3/4 mx-auto'>
                    <h1 className='text-6xl mb-7 font-semibold'>Monkey Learning</h1>
                    <h1 className='text-3xl font-light mb-7 tracking-wide'>Test your skill from anywhere.</h1>
                    <Link to="/courses"><button className='btn btn-primary shadow-2xl shadow-blue-400 rounded-full'>Explore Courses</button></Link>
                </div>
                <div className='w-4/5 mx-auto py-10'>
                    <img src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
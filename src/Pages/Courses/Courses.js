import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AsideNav from '../AsideNav/AsideNav';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <>
            <div className="courses-back">
                <h1>Our Courses</h1>
            </div>
            <div className='mx-2 py-16'>
                <div class="grid grid-cols-1 lg:grid-cols-7 gap-10">
                    <div class="lg:col-start-2 lg:col-end-3... "><AsideNav></AsideNav></div>
                    <div class="lg:col-start-3 lg:col-span-4 ...">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            {
                                courses.map(course =>
                                    <Course
                                        key={course._id}
                                        course={course}>
                                    </Course>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
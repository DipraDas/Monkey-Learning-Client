import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AsideNav from '../AsideNav/AsideNav';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='container mx-auto'>
            {/* <AsideNav></AsideNav>
            {
                courses.map(course =>
                    <Course
                        key={course._id}
                        course={course}>
                    </Course>)
            } */}
            <div className="flex sm:flex-col md:flex-row ">
                <div className='sm:w-full md:w-3/12'>
                    <AsideNav></AsideNav>
                </div>
                <div className="sm:w-full md:w-9/12">
                    <div className='flex flex-wrap gap-10'>
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

    );
};

export default Courses;
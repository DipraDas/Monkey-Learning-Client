import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AsideNav from '../AsideNav/AsideNav';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <AsideNav></AsideNav>
            {
                courses.map(course =>
                    <Course
                        key={course._id}
                        course={course}>
                    </Course>)
            }

        </div>
    );
};

export default Courses;
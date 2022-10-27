import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AsideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='text-center bg-gray-200 py-10 rounded-2xl shadow-xl'>
            <h4 className='d-none d-lg-block font-semibold text-3xl text-blue-900 mb-6'>Courses</h4>
            <div>
                {
                    courses.map(course => <p className='text-xl mb-5' key={course._id}>
                        <Link to={`/course/${course._id}`}>{course.title}</Link>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default AsideNav;
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
        <div>
            <h4 className='d-none d-lg-block'>Total Categories: {courses.length} </h4>
            <div>
                {
                    courses.map(course => <p key={course._id}>
                        <Link to={`/course/${course._id}`}>{course.title}</Link>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default AsideNav;
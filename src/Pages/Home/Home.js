import React from 'react';
import './Home.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="h-back">
                <img style={{ width: '60px' }} src={logo} alt="" />
                <h1>Monkey Learning</h1>
                <p className='text-gray-200 text-xl tracking-wide'>- - - Love to learn something new - - -</p>
                <Link to="/courses"><button className="btn btn-primary mt-7">Visit Our Courses</button></Link>
            </div>
        </div>
    );
};

export default Home;
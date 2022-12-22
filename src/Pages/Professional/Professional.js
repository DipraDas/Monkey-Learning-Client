import React from 'react';
import './Professional.css';
import professionalImage from '../../assets/professional.png';
import { FaReadme } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Professional = () => {
    return (
        <div className=''>
            <div className="container mx-auto grid grid-cols-2 gap-6 p-20 mt-5 mb-20 items-center bg-blue-500 justify-center">
                <div>
                    <div className='flex items-center text-xl gap-2 text-white mb-5'>
                        <div className='text-2xl mt-1'><FaReadme></FaReadme></div>
                        <div>OUR PROFESSIONALS</div>
                        <div className='flex mt-1 animationP'><FaAngleRight></FaAngleRight><FaAngleRight></FaAngleRight><FaAngleRight></FaAngleRight><FaAngleRight></FaAngleRight><FaAngleRight></FaAngleRight><FaAngleRight></FaAngleRight></div>
                    </div>
                    <h1 className='text-white text-6xl font-semibold'>Do You Want To Test Your Skill?</h1>
                    <Link to="/courses"><button className='btn btn-success rounded-full text-xl text-white mt-6 btn-lg border border-white'>Visit Now</button></Link>
                </div>
                <div className='m-auto'>
                    <img src={professionalImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Professional;
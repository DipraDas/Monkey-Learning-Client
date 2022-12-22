import React from 'react';
import './Video.css';
import videoImage from '../../assets/video.png';

const Video = () => {
    return (
        <div className='videoBack py-20'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <div className='w-3/4 mx-auto' >
                    <h1 className='text-3xl font-semibold mb-6'>Video Training for Monkey Learners</h1>
                    <p className='mb-6 text-gray-400'>Human quality, professional grade, resources of the most modern, permanent access to all the resources we need. A prestigious University in which all those involved in the educational process they are all interested in learning others. Begin your Journey Today. Depending on the field you follow, our University has signed partnerships with the private sector.</p>
                    <div className="py-3 px-7 bg-blue-400 text-white border-2 shadow-xl border-blue-600 inline-block text-xl">COMMING SOON</div>
                </div>
                <div>
                    <img className='w-3/4 mx-auto' src={videoImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Video;
import React from 'react';
import './Adventages.css';
import glass from '../../assets/glass.png';
import ai1 from '../../assets/ai1.png';
import ai2 from '../../assets/ai2.png';
import ai3 from '../../assets/ai3.png';
import ai4 from '../../assets/ai4.png';

const Adventages = () => {
    return (
        <div className='advBack py-20'>
            <div className="container mx-auto">
                <h1 className='text-center text-5xl tracking-wider'>THE ADVANTAGES</h1>
                <img className='mx-auto my-3' src={glass} alt="" />
                <p className='text-center text-gray-500'>You must learn to be still in the midst of activity and to be vibrantly alive in repose.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-3 md:px-20 py-16'>
                    <div className='flex gap-10'>
                        <div>
                            <img style={{ width: '120px' }} src={ai1} alt="" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-3xl mb-4'>You will learn all you need for a proffesional career</h1>
                            <p className='text-gray-400'>To organize many activities and events at our University is very important because it helps us.</p>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <div>
                            <img style={{ width: '120px' }} src={ai2} alt="" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-3xl mb-4'>You will learn all you need for a proffesional career</h1>
                            <p className='text-gray-400'>To organize many activities and events at our University is very important because it helps us.</p>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <div>
                            <img style={{ width: '120px' }} src={ai3} alt="" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-3xl mb-4'>You will learn all you need for a proffesional career</h1>
                            <p className='text-gray-400'>To organize many activities and events at our University is very important because it helps us.</p>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <div>
                            <img style={{ width: '120px' }} src={ai4} alt="" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-3xl mb-4'>You will learn all you need for a proffesional career</h1>
                            <p className='text-gray-400'>To organize many activities and events at our University is very important because it helps us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adventages;
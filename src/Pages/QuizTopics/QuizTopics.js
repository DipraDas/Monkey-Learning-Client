import React from 'react';
import './QuizTopics.css';
import glass from '../../assets/glass.png';
import reactI from '../../assets/react.png';
import angular from '../../assets/angular.png';
import graph from '../../assets/graph.png';
import js from '../../assets/js.png';
import python from '../../assets/python.png';
import css from '../../assets/css.png';

const QuizTopics = () => {
    return (
        <div className='QuizBB py-20'>
            <h1 className='text-center text-5xl tracking-wider'>QUIZ TOPICS</h1>
            <img className='mx-auto my-3' src={glass} alt="" />
            <p className='text-center text-gray-500'>We have a lot of opportunities for you. Come check them out</p>
            <div className="container mx-auto grid grid-cols-3 gap-7 px-20 mt-10">
                <div className='flex items-center gap-5 justify-center'>
                    <div><img style={{ width: '70px' }} src={reactI} alt="" /></div>
                    <div>
                        <h2 className='text-3xl font-semibold'>React</h2>
                    </div>
                </div>
                <div className='flex items-center gap-5 justify-center'>
                    <div><img style={{ width: '70px' }} src={angular} alt="" /></div>
                    <div>
                        <h2 className='text-3xl font-semibold'>Angular</h2>
                    </div>
                </div>
                <div className='flex items-center gap-5 justify-center'>
                    <div><img style={{ width: '70px' }} src={graph} alt="" /></div>
                    <div>
                        <h2 className='text-3xl font-semibold'>GraphQL</h2>
                    </div>
                </div>
                <div className='flex items-center gap-5 justify-center'>
                    <div><img style={{ width: '70px' }} src={js} alt="" /></div>
                    <div>
                        <h2 className='text-3xl font-semibold'>JavaScript</h2>
                    </div>
                </div>
                <div className='flex items-center gap-5 justify-center'>
                    <div><img style={{ width: '70px' }} src={python} alt="" /></div>
                    <div>
                        <h2 className='text-3xl font-semibold'>Python</h2>
                    </div>
                </div>
                <div className='flex items-center gap-5 justify-center'>
                    <div><img style={{ width: '70px' }} src={css} alt="" /></div>
                    <div>
                        <h2 className='text-3xl font-semibold'>CSS3</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizTopics;
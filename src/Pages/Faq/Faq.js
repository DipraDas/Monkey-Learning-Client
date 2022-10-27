import React from 'react';
import './Faq.css';

const Faq = () => {
    return (
        <div>
            <div className='faq-back'>
                <h2>FAQ</h2>
            </div>
            <div className="container mx-auto py-20">
                <div className="question sm:w-100 md:w-2/4 mx-auto bg-gray-100 p-5 text-center rounded-lg shadow-lg">
                    <h1 className='text-2xl mb-5'>What do you used to build this website?</h1>
                    <p>1. React</p>
                    <p>2. React-Router-Dom</p>
                    <p>3. Tailwind CSS</p>
                    <p>4. DaisyUI</p>
                    <p>5. Firebase</p>
                    <p>6. React Icons</p>
                    <p>7. React-to-PDF</p>
                </div>
                <div className="question sm:w-100 md:w-2/4 mx-auto bg-gray-100 p-5 text-center rounded-lg mt-10 shadow-lg">
                    <h1 className='text-2xl mb-5'>Which route do you used in this site?</h1>
                    <p>1. Home</p>
                    <p>2. Courses</p>
                    <p>3. Blog</p>
                    <p>4. Faq</p>
                    <p>5. Login</p>
                    <p>6. Register</p>
                    <p>7. 404</p>
                </div>
                <div className="question sm:w-100 md:w-2/4 mx-auto bg-gray-100 p-5 text-center rounded-lg mt-10 shadow-lg">
                    <h1 className='text-2xl mb-5'  >Which course do you provide?</h1>
                    <p>1. React</p>
                    <p>2. GraphQl</p>
                    <p>3. Angular</p>
                    <p>4. Python</p>
                    <p>5. Javascript</p>
                    <p>6. CSS3</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
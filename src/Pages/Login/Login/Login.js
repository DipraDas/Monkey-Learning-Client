import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Login = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} className="mt-16">
            <div style={{ marginLeft: '30px' }} className="card card-compact w-96 bg-base-100 shadow-xl  py-5">
                <div className="card-body">
                    <img style={{ width: '40px' }} src={logo} alt="Shoes" />
                    <h1 style={{ fontSize: '35px', marginTop: '10px' }} className="card-title">Sign In</h1>
                    <p>Do you have an account? <Link className='text-blue-600 underline font-semibold' to='/register'>Register</Link> </p>
                    <label className='mt-3' htmlFor="">Email</label>
                    <input type="email" placeholder="Enter your email" className="input input-bordered outline-none" />
                    <label className='mt-2' htmlFor="">Password</label>
                    <input type="email" placeholder="Enter your password" className="input input-bordered outline-none" />
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block mt-5">Sign In</button>
                    </div>
                    <div className="googleGithub flex justify-between">
                        <div className='w-2/4 mr-2'><button className="btn btn-outline btn-block mt-1"><FaGoogle></FaGoogle></button></div>
                        <div className='w-2/4 ml-2'><button className="btn btn-outline btn-block mt-1"> <FaGithub></FaGithub></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
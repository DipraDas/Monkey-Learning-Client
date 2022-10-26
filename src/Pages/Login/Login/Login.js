import React, { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const nevigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        setError('');

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                nevigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }} className="mt-16">
            <div style={{ marginLeft: '30px' }} className="card card-compact w-96 bg-base-100 shadow-xl  py-5">
                <div className="card-body">
                    <img style={{ width: '40px' }} src={logo} alt="Shoes" />
                    <h1 style={{ fontSize: '35px', marginTop: '10px' }} className="card-title">Sign In</h1>
                    <p>Do you have an account? <Link className='text-blue-600 underline font-semibold' to='/register'>Register</Link> </p>
                    <form onSubmit={handleSubmit} >
                        <label className='mt-3' htmlFor="">Email</label><br />
                        <input name='email' type="email" placeholder="Enter your email" className="input input-bordered w-full" /><br />
                        <label className='mt-2' htmlFor="">Password</label><br />
                        <input name='password' type="password" placeholder="Enter your password" className="input input-bordered w-full" />
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block mt-5">Sign In</button>
                        </div>
                    </form>
                    <div className="googleGithub flex justify-between">
                        <div className='w-2/4 mr-2'><button className="btn btn-outline btn-block mt-1"><FaGoogle style={{ fontSize: '20px' }}></FaGoogle></button></div>
                        <div className='w-2/4 ml-2'><button className="btn btn-outline btn-block mt-1"> <FaGithub style={{ fontSize: '24px' }}></FaGithub></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [clicked, setClicked] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        console.log('dsgsd')
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        setError('');

        createUser(email, password)
            .then(result => {
                handleUpdateUser(name, photoURL);
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile);

    }
    const handleClicked = event => {
        setClicked(event.target.checked);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }} className="mt-16">
            <div className="card card-compact w-96 bg-base-100 shadow-xl  py-5">
                <div className="card-body">
                    <img style={{ width: '40px' }} src={logo} alt="Shoes" />
                    <h1 style={{ fontSize: '35px', marginTop: '10px' }} className="card-title">Sign Up</h1>
                    <p>Already Registered? <Link className='text-blue-600 underline font-semibold' to='/login'>Login</Link> </p>
                    <form onSubmit={handleSubmit}>
                        <label className='mt-3' htmlFor="">Full Name</label><br />
                        <input name='name' type="text" placeholder="Enter your name" className="input input-bordered w-full" /><br />
                        <label className='' htmlFor="">Photo URL</label><br />
                        <input name='photo' type="text" placeholder="Enter your Photo URL" className="input input-bordered w-full" /><br />
                        <label className='mt-3' htmlFor="">Email</label><br />
                        <input name='email' type="email" placeholder="Enter your email" className="input input-bordered w-full" /><br />
                        <label className='mt-3' htmlFor="">Password</label><br />
                        <input name='password' type="password" placeholder="Enter your password" className="input input-bordered w-full" /><br />
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block mt-4">Register</button>
                        </div>
                    </form>
                    <p className='label-text-alt text-red-600'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;
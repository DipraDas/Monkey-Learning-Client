import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error('error', error))
    }
    return (
        <div >
            <div style={{ backgroundColor: '#000033' }} className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-black'><Link to='/'>Home</Link></li>
                            <li className='text-black'><Link to='/courses'>Courses</Link></li>
                            <li className='text-black'><Link to='/blogs'>Blog</Link></li>
                            <li className='text-black'><Link to='/faq'>Faq</Link></li>
                        </ul>
                    </div>
                    <img style={{ width: '35px', marginLeft: '20px' }} src={logo} alt="" />
                    <h1 className='text-xl pl-3'>Monkey Learning</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blogs'>Blog</Link></li>
                        <li><Link to='/faq'>Faq</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                {/* <Link href="#deets">{user?.displayName}</Link> */}
                                <div>
                                    {
                                        user?.photoURL ?
                                            <div title={user.displayName} className="avatar ">
                                                <div className="w-8 rounded-full">
                                                    <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            :
                                            <FaUserAlt title={user.displayName} />
                                    }
                                </div>
                                <button className='btn btn-error btn-sm my-2 mr-8 ml-5' onClick={handleLogOut} variant="primary">Log out</button>
                            </>
                            :
                            <>
                                <Link className='text-light mr-6' to='/login'><button className='btn btn-sm my-2  btn-outline btn-accent' variant="primary">Log in</button></Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;
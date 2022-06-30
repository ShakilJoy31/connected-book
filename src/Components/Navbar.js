import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from "react-router-dom";
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = ({photo}) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate(); 
    const handleSignOut = () =>{
        signOut(auth); 
        navigate('/'); 
    }
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl"><Link to='/'>Home</Link></a>
                    <div class="form-control">
                        <input type="text" placeholder="Search People" class="input input-bordered" />
                    </div>
                </div>
                <div class="flex-none gap-2">
                    <ul className='flex'>
                        <li className='hidden lg:block md:block'><a class="btn btn-ghost normal-case text-xl"><Link to='/'>Notification</Link></a></li>

                        <li className='hidden lg:block md:block'><a class="btn btn-ghost normal-case text-xl"><Link to='/people'>People</Link></a></li>

                        <li className='hidden lg:block md:block'><a class="btn btn-ghost normal-case text-xl"><Link to='/'>Blogs</Link></a></li>

                        <li className='hidden lg:block md:block'><a class="btn btn-ghost normal-case text-xl"><Link to='/'>Review</Link></a></li>
                    </ul>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                {
                                    user ? <img src={photo} alt=''/> : <img src="https://img.freepik.com/free-photo/businessman-working-with-new-modern-computer-show-social-network-structure_488220-31494.jpg?w=996" alt=''/>
                                }   
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li className='block lg:hidden md:hidden'><a class="btn btn-ghost normal-case"><Link to='/'>Notification</Link></a></li>

                            <li className='block lg:hidden md:hidden'><a class="btn btn-ghost normal-case"><Link to='/people'>People</Link></a></li>

                            <li className='block lg:hidden md:hidden'><a class="btn btn-ghost normal-case "><Link to='/'>Blogs</Link></a></li>

                            <li className='block lg:hidden md:hidden'><a class="btn btn-ghost normal-case"><Link to='/'>Review</Link></a></li>

                            <li><a class="btn btn-ghost normal-case"><Link to='/'>My Profile</Link></a></li>

                            <li><a class="btn btn-ghost normal-case"><Link to='/'>Settings</Link></a></li>

                            {
                                user && <li onClick={handleSignOut}><a class="btn btn-ghost normal-case"><Link to='/'>Logout</Link></a></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
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

                        <li className='hidden lg:block md:block'><a class="btn btn-ghost normal-case text-xl"><Link to='/'>People</Link></a></li>

                        <li className='hidden lg:block md:block'><a class="btn btn-ghost normal-case text-xl"><Link to='/'>Blogs</Link></a></li>

                        <li className='hidden lg:block md:block'><a class="btn btn-ghost normal-case text-xl"><Link to='/'>Review</Link></a></li>
                    </ul>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li className='block lg:hidden md:hidden'><a class="btn btn-ghost normal-case"><Link to='/'>Notification</Link></a></li>

                            <li className='block lg:hidden md:hidden'><a class="btn btn-ghost normal-case"><Link to='/'>People</Link></a></li>

                            <li className='block lg:hidden md:hidden'><a class="btn btn-ghost normal-case "><Link to='/'>Blogs</Link></a></li>

                            <li className='block lg:hidden md:hidden'><a class="btn btn-ghost normal-case"><Link to='/'>Review</Link></a></li>

                            <li><a class="btn btn-ghost normal-case"><Link to='/'>My Profile</Link></a></li>

                            <li><a class="btn btn-ghost normal-case"><Link to='/'>Settings</Link></a></li>

                            <li><a class="btn btn-ghost normal-case"><Link to='/'>Logout</Link></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
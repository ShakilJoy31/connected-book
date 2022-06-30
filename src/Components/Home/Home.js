import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex items-center justify-center'>
            <div class="hero min-h-screen" style={{ backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/04/25/10/55/1000_F_425105540_6CBmURbfytH2u9kyrjrdCoq15rwFCWS9.jpg")` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold text-green-300">Hello there...</h1>
                        <p className='text-xl text-green-200'>Welcome to Connected book application. Let's have some fun with your family and friend. Stay Connected and stay happy forever.</p>
                        <p className='mb-6 text-xl text-green-300'>To be connected, Sign in first. Or if you already have an account Login to it.</p>
                        <Link to='/signup'><button class="btn btn-outline btn-info"><Link to='/signup'>Let's Get Started</Link></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

// https://as2.ftcdn.net/v2/jpg/04/16/87/27/1000_F_416872788_JFFjsiWjhRH5IzncU3r8J1ATl2yvsM52.jpg
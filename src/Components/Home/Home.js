import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex items-center justify-center'>
            <div class="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-133.jpg?t=st=1656404900~exp=1656405500~hmac=ada65bf62a5e0daa56e94e5399369d6faee1461b201d22a5386405465ad68f95&w=996")` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold text-green-300">Hello there...</h1>
                        <p>Welcome to Connected book application. Let's have some fun with your family and friend. Stay Connected and stay happy forever.</p>
                        <p className='mb-6 text-xl'>To be connected, Sign in first. Or if you already have an account Login to it.</p>
                        <Link to='/signup'><button class="btn btn-outline btn-success"><Link to='/signup'>Let's Get Started</Link></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
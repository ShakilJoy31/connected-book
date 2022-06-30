import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = (event) => {
        event.preventDefault(); 
        const email = event.target.email.value; 
        const password = event.target.password.value; 
        signInWithEmailAndPassword(email, password); 
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1656419620~exp=1656420220~hmac=7905a0412c072479bdde89ec1141e1affce8f9dc78e2eeb4d7b33af7ce080f97&w=996" class="max-w-sm lg:max-w-lg md:max-w-lg rounded-lg shadow-2xl" />
                    <div className='w-full max-w-lg'>
                        <div class="card flex-shrink-0 w-full shadow-2xl">
                            <h1 class="text-5xl font-bold mb-2 mt-4 flex justify-center text-info lg:ml-8 lg:mr-8">Log in here!</h1>
                            <div class="card-body">
                                <form onSubmit={handleLogin}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered input-info w-full max-w-lg" required />
                                    </div>


                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="Password" class="input input-bordered input-info w-full max-w-lg" />
                                    </div>


                                    <div class="form-control">
                                        
                                        <label class="label flex justify-center">
                                            <a class="label-text-alt link link-hover text-xl text-white ">Forgot password?</a>
                                        </label>
                                        <p className='flex justify-center text-xl text-white'>New to Connected book?<span className='ml-2'> <Link to='/signup'><a class="label-text-alt link link-hover text-xl text-white ">Sign up</a></Link></span></p>
                                    </div>
                                    <div class="form-control mt-6">
                                        <input type='submit' value='Login'
                                            className='block w-full max-w-lg mx-auto mt-2 text-xl text-white btn btn-info'
                                        />
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
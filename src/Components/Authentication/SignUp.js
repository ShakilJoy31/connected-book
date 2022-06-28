import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleSignUp = (event) => {
        event.preventDefault(); 
        const name = event.target.name.value; 
        const email = event.target.email.value; 
        const password = event.target.password.value; 
        const confirmPassword = event.target.confirmPassword.value;
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password); 
            console.log('button is clicked'); 
        console.log(name, email, password, confirmPassword); 
        }
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?t=st=1656414896~exp=1656415496~hmac=a9a1571bf1c03fbcd25c71d841f8b18d83c11bbebf8044f7d4507498a6da0e2d&w=826" class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-full max-w-lg'>
                        <div class="card flex-shrink-0 w-full shadow-2xl bg-orange-200">
                            <h1 class="text-5xl font-bold mb-2 mt-4 flex justify-center text-info lg:ml-8 lg:mr-8">Sign Up here!</h1>
                            <div class="card-body">
                                <form onSubmit={handleSignUp}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Full Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Full Name" class="input input-bordered input-info w-full max-w-xs" />
                                    </div>


                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered input-info w-full max-w-xs" required />
                                    </div>


                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="Password" class="input input-bordered input-info w-full max-w-xs" />
                                    </div>


                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" name='confirmPassword' placeholder="Confirm Password" class="input input-bordered input-info w-full max-w-xs" />

                                        <label class="label">
                                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div class="form-control mt-6">
                                        <input type='submit' value='Sign up'
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

export default SignUp;
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const SignUp = ({ setPhoto, setName }) => {
    const [image, setImage] = useState('');
    const [generalUser, generalLoading, generalError] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const address = event.target.address.value;
        const info = event.target.info.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
            const imageStorageKey = '94a65109650a1be14f24d43dd19fd874';
            const formData = new FormData();
            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        console.log(result);
                        const hostedImage = result?.data?.display_url
                        console.log(result?.data?.display_url);
                        console.log(hostedImage);
                        console.log('In if statement');
                        setPhoto(result?.data?.display_url);
                        setName(name); 
                        const usersInfo = { name, email, address, info, hostedImage }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(usersInfo)
                        })
                            .then(res => res.json())
                            .then(data => {

                            })
                    }
                })
        }
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?t=st=1656414896~exp=1656415496~hmac=a9a1571bf1c03fbcd25c71d841f8b18d83c11bbebf8044f7d4507498a6da0e2d&w=826" class="max-w-sm lg:max-w-lg md:max-w-lg rounded-lg shadow-2xl" />
                    <div className='w-full max-w-lg'>
                        <div class="card flex-shrink-0 w-full shadow-2xl">
                            <h1 class="text-5xl font-bold mb-2 mt-4 flex justify-center text-info lg:ml-8 lg:mr-8">Sign Up here!</h1>
                            <div class="card-body">
                                <form onSubmit={handleSignUp}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Full Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Full Name" class="input input-bordered input-info w-full max-w-lg" />
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered input-info w-full max-w-lg" required />
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Your Address</span>
                                        </label>
                                        <input type="text" name='address' placeholder="Where do you live in?" class="input input-bordered input-info w-full max-w-lg" required />
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Upload Image</span>
                                        </label>
                                        <input onChange={handleChange} type="file" class="input input-bordered input-info w-full max-w-lg" />
                                    </div>



                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="Password" class="input input-bordered input-info w-full max-w-lg" />
                                    </div>


                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Confirm Password</span>
                                        </label>
                                        <input type="password" name='confirmPassword' placeholder="Confirm Password" class="input input-bordered input-info w-full max-w-lg" />
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">About yourself</span>
                                        </label>
                                        <input type="text" placeholder="Something About Yourself" name='info' class="input input-bordered input-lg w-full input-info max-w-lg" />
                                    </div>

                                    <p className='flex justify-center mt-2 text-xl text-white'>Already have an account?<span className='ml-2'> <Link to='/login'><a class="label-text-alt link link-hover text-xl text-white ">Log in</a></Link></span></p>

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
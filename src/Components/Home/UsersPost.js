import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const UsersPost = ({ photo, name }) => {
    const [user, loading, error] = useAuthState(auth);
    const [post, setPost] = useState(''); 
    const email = user.email; 
    const postInformation = {name, email, post}
    const handleTypeButton = (event) =>{
        setPost(event.target.value); 
    }
    const handlePostButton = () =>{
        console.log(name, post); 
        fetch('http://localhost:5000/sendPost', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(postInformation)
        })
    }
    return (
        <div className='mx-4'>
            <div>
            <div className='flex items-center justify-center'>
                <div class="avatar online">
                    <div class="w-24 rounded-full">
                        <img src={photo} alt='' />
                    </div>
                </div>
                <input onChange={handleTypeButton} type="text" placeholder="What's on your mind?" class="input input-info input-bordered input-lg w-full max-w-xs lg:max-w-lg md:max-w-lg ml-4" />
            </div>
            {
                post && <button onClick={handlePostButton} class="btn btn-outline btn-accent w-full my-4 text-white text-2xl"> <span className="text-white">Post</span> </button>
            }
            </div>
        </div>
    );
};

export default UsersPost;
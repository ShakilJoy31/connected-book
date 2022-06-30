import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const UsersPost = ({ photo, name }) => {
    const [user, loading, error] = useAuthState(auth);
    const [post, setPost] = useState('');
    const [userPosts, setUserPosts] = useState([]);
    const email = user.email;
    const postInformation = { name, email, photo, post }
    const handleTypeButton = (event) => {
        setPost(event.target.value);
    }
    useEffect(() => {
        fetch('http://localhost:5000/getPost')
            .then(res => res.json())
            .then(data => {
                setUserPosts(data);
            })
    }, [userPosts])
    const handlePostButton = () => {
        // sending users post to the database. 
        fetch('http://localhost:5000/sendPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postInformation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        
            fetch('http://localhost:5000/getPost')
            .then(res => res.json())
            .then(data => {
                setUserPosts(data);
            })
    }
    console.log(userPosts);
    return (
        <div className='mx-4'>
            <div>
                <div className='flex items-center justify-center'>
                    <div class="avatar online">
                        <div class="w-20 lg:w-24 md:w-24 rounded-full">
                            <img src={photo} alt='' />
                        </div>
                    </div>
                    <input onChange={handleTypeButton} type="text" placeholder="What's on your mind?" class="input input-info input-bordered input-lg w-full max-w-xs lg:max-w-lg md:max-w-lg ml-4" />
                </div>
                {
                    post && <button onClick={handlePostButton} class="btn btn-outline btn-accent w-full my-4 text-white text-2xl"> <span className="text-white">Post</span> </button>
                }
            </div>

            <div className='flex justify-center'>
                <div>
                    {
                        userPosts?.map(post => <div class="card w-full bg-stone-300 text-primary-content my-6">
                            <div class="card-body">
                            <div class="card-actions justify-end">
                            <button class="btn btn-accent btn-xs">See {post.name}'s Profile</button>
                                </div>
                                <div className='flex items-center justify-center'>
                                <div class="avatar mr-4">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={post.photo} alt='' />
                                    </div>
                                </div>
                                <h2 class="card-title text-black">{post.name}</h2>
                                </div>
                                <p className='text-black'>{post.post}</p>
                                
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default UsersPost;
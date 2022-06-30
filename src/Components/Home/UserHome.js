import React, { useEffect } from 'react';
import { useState } from 'react';

const UserHome = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getuser')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])
    console.log(users);
    return (
        <div className='mx-4 lg:mx-12'>
            <div className='grid'>
                <div className='grid gap-6 lg:grid-cols-2 md:grid-cols-1'>
                    {
                        users.map(user =>
                            <div class="card w-full shadow-xl hover:shadow-2xl bg-base-100 my-8"  data-aos="zoom-out">
                                <figure><img className='w-full lg:h-[52rem]' src={user.hostedImage} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <div className='block mx-auto my-4'>
                                    <div>
                                    <h2 class="text-3xl">{user.name}</h2>
                                    <p className='text-xl'>{user.info}</p>
                                    <p className='text-xl'>Lives in: {user.address}</p>
                                    </div>
                                    </div>
                                    <div class="card-actions flex justify-center">
                                        <button class="btn btn-primary">Send Friend Request</button>

                                        <button class="btn btn-secondary">See More about {user.name}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default UserHome;
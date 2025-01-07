import React, { useContext, useState } from 'react';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUsers, updateProfileData } = useContext(AuthContext)
    const navigate = useNavigate()

    const [isvalid, setIsvalid] = useState(null)
    const [isregister, setregister] = useState(false)





    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        setIsvalid()

        if (!regex.test(password)) {
            toast.error('please Uppercase, lowercase and at least 6 charecters')
            return;
        }


        createUsers(email, password)
            .then(res => {
                // console.log(res);

                const updateData = {
                    displayName: name,
                    photoURL: photo
                }

                updateProfileData(updateData)
                    .then(res => {
                        // console.log(res);

                    })
                    .catch(err => {
                        console.log(err.message);

                    })
                navigate("/")
                toast.success('Successfully created!');

            })
            .catch(error => {
                console.log(error.message);

            }
            )






    }


    return (
        <div className='flex flex-col justify-center items-center'>
            <form onSubmit={handleRegister} className="card-body border shadow-lg w-[40%] my-4">
                <h1 className='text-5xl font-semibold text-center py-2'>Registration</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">photo</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    
                </div>
                <div className="form-control mt-6">
                    <button className="bg-slate-600 text-white py-3 rounded-lg btn">register</button>
                </div>
                <div>

                </div>
            </form>
        </div>
    );
};

export default Register;
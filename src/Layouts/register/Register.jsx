import React, { useContext, useState } from 'react';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import registerLottie from '../../assets/lottie/register.json'
import Lottie from 'lottie-react';
import googleimg from '../../assets/google.png'
import gitimg from '../../assets/git.png'
import fbimg from '../../assets/fb.png'
import twitimg from '../../assets/twitter.png'

const Register = () => {
    const { createUsers, updateProfileData } = useContext(AuthContext)
    const navigate = useNavigate()
    const { LoginUser, SigninWithGoogle, twitterSignIn, githubSignIn } = useContext(AuthContext)

    const [isvalid, setIsvalid] = useState(null)
    const [isregister, setregister] = useState(false)
        const [errorText ,setErrorText] = useState()





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

    const handleGoogleLogin = () => {
        SigninWithGoogle()
            .then(res => {
                // console.log(res);
                navigate("/")

            })
            .catch(err => {
                console.log(err);

            })
    }
    const handletwitterlogin = () => {
        twitterSignIn()
            .then(res => {
                // console.log(res);

            })
            .catch(err => {
                console.log(err);

            })
    }
    const handlegithublogin = () => {
        githubSignIn()
            .then(res => {
                // console.log(res);
                navigate("/")

            })
            .catch(err => {
                console.log(err.message);
                // handleError(err)
                if(err.message == 'Firebase: Error (auth/account-exists-with-different-credential).'){
                    setErrorText('this email is already login by google please login with google');
                    
                }


            })
    }



    return (
        <div className='flex lg:flex-row md:flex-row flex-col justify-center items-center py-20 w-[90%] m-auto'>
            <div className='md:w-[50%] p-20'>
            <Lottie animationData={registerLottie} loop={true} />
            </div>
            <div className='md:w-[50%] w-[95%] m-auto'>
            <form onSubmit={handleRegister} className="card-body border shadow-lg lg:w-[70%] w-[100%] my-4">
                <h1 className='text-4xl font-semibold text-center py-2'>Registration</h1>
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
                    <button className="bg-sky-600 text-white py-3 rounded-lg btn">register</button>
                </div>
                  <p className='text-center'>----------OR-----------</p>
                                <div className='flex justify-center gap-7'>
                                    <h1 onClick={handleGoogleLogin} className='font-bold cursor-pointer '><img className='w-10' src={googleimg} alt="google" /></h1>
                                    {/* <h1 className='font-bold cursor-pointer '><img className='w-16 rounded-full' src={fbimg} alt="facebook" /></h1> */}
                                    {/* <h1 onClick={handletwitterlogin} className='font-bold cursor-pointer '><img className='w-10' src={twitimg} alt="" /></h1>
                                    <h1 onClick={handlegithublogin} className='font-bold cursor-pointer '><img className='w-10' src={gitimg} alt="" /></h1> */}
                
                                </div>
                                {/* <p className='text-red-600 text-sm py-2'>{errorText}</p> */}
            </form>
            </div>
        </div>
    );
};

export default Register;
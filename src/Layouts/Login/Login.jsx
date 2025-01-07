import React, { useContext, useState } from 'react';
import { AuthContext } from '../../componants/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import googleimg from '../../assets/google.png'
import gitimg from '../../assets/git.png'
import fbimg from '../../assets/fb.png'
import twitimg from '../../assets/twitter.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';


const Login = () => {
    const { LoginUser, SigninWithGoogle, twitterSignIn, githubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const [errorText ,setErrorText] = useState()



    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        LoginUser(email, password)
            .then(res => {
                // console.log('login user');
                navigate("/")

            })
            .catch(err => {
                console.log(err.message);
                toast.error('Invalid User, please register')

            })

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

    const [eye,setEye] = useState(true)

    const handleEye=()=>{
        setEye(!eye)
    }

    return (
        <div className={`flex flex-col justify-center items-center py-8`}>

            <form onSubmit={handleLogin} className="card-body shadow-lg border w-[40%]">
                <h1 className='text-5xl font-semibold text-center py-2'>Login</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={`${eye ? 'password': 'text'}`} placeholder="password" name='password' className="input input-bordered" required />
                    {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                    <p className='text-xl absolute right-10 top-12' onClick={handleEye}>{eye ? <FaEye /> : <FaEyeSlash />}</p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn py-3 bg-slate-600 text-white">Login</button>
                </div>
                <p className='text-center'>----------OR-----------</p>
                <div className='flex justify-center gap-7'>
                    <h1 onClick={handleGoogleLogin} className='font-bold cursor-pointer '><img className='w-10' src={googleimg} alt="google" /></h1>
                    {/* <h1 className='font-bold cursor-pointer '><img className='w-16 rounded-full' src={fbimg} alt="facebook" /></h1> */}
                    <h1 onClick={handletwitterlogin} className='font-bold cursor-pointer '><img className='w-10' src={twitimg} alt="" /></h1>
                    <h1 onClick={handlegithublogin} className='font-bold cursor-pointer '><img className='w-10' src={gitimg} alt="" /></h1>

                </div>
                <p className='text-red-600 text-sm py-2'>{errorText}</p>
            </form>

        </div>
    );
};

export default Login;
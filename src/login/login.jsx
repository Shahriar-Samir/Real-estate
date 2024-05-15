import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub} from "react-icons/fa6";
import {BsEye , BsEyeSlash} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../authProvider/authProvider';
import { toast, ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const [passInputType ,setPassInputType] = useState('password')
    const {signIn,signInWithGoogle,signInWithGithub,setLoading} = useContext(authContext)
    const Navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        signIn(email,password)
        .then(()=>{
            setLoading(false)
            toast.success('Logged in Successfully')
            setTimeout(()=>{
                Navigate('/')
            },3000)
        })
        .catch(err=>{
            setLoading(false)
            if(err.message === 'Firebase: Error (auth/invalid-credential).'){
                toast.error(`Invalid email or password`)
            }
            else{
                toast.error(`Something went wrong!`)
            }
        })
    }

    function signInWithGoogleHandler(){
        signInWithGoogle()
        .then(()=>{setLoading(false);Navigate('/')})
        .catch(()=>{setLoading(false);toast.error('Something went wrong!')})
    }

    function signInWithGithubHandler(){
        signInWithGithub()
        .then(()=>{setLoading(false);Navigate('/')})
        .catch(()=>{setLoading(false);toast.error('Something went wrong!')})
    }

    function handleShowPassword(){

        if(passInputType === 'password'){
            setPassInputType('text')
            setShowPass(true)
        }
        else{
            setPassInputType('password')
            setShowPass(false)
        }
}

    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>Residence Realm || Login</title>
            </Helmet>
            </HelmetProvider>
            <ToastContainer autoClose={1200}/>
        <div className='w-full h-[100vh] flex justify-center items-center rounded-md'>
                <div className='flex flex-col items-center shadow-md w-10/12 max-w-[350px] p-4'>
                    <h1 className='text-4xl font-semibold'>Log In</h1>
                    <div className='flex gap-10 mt-10'>
                        <FcGoogle className='text-3xl' onClick={signInWithGoogleHandler} role='button'/>
                        <FaSquareGithub className='text-3xl' onClick={signInWithGithubHandler} role='button'/>
                    </div>
                    <div className="flex flex-col w-full">
                    <div className="divider">Or</div>
                    </div>
                    <form className='flex flex-col gap-5 w-full' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor='email'>Email:</label>
                    <input type="email" required name='email' id='email' className='w-full border p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor='password'>Password:</label>
                    <div className='relative'>
                    <input type={`${passInputType}`} id='password' required className='w-full border p-2'/>
                    {
                showPass ? <BsEye onClick={handleShowPassword} role="button" className='absolute top-3 right-3 text-xl'/> : <BsEyeSlash onClick={handleShowPassword} role="button" className='absolute top-3 right-3 text-xl'/>
            }
                    </div>
                    </div>
                    <button className='py-2 border border-black font-semibold'>Log In</button>
                    </form>
                    <p className='mt-5 '>Don't Have an account? <Link className='font-semibold underline' to='/signup'>Create a new account</Link></p>
                </div>
        </div>
        </>
    );
};

export default Login;
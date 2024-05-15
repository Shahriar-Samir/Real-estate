import { useContext, useState } from "react";
import { BsEye , BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from "../authProvider/authProvider";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const [passInputType ,setPassInputType] = useState('password')
    const {register,updateUser,setLoading} = useContext(authContext)
    const navigate = useNavigate()

    function handleSubmit(e){
            e.preventDefault()
            const name = e.target.name.value
            const email = e.target.email.value
            const photoUrl = e.target.photoUrl.value
            const password = e.target.password.value
            if(password.length < 6){
                toast.error('Password must have at least 6 characters')
                
            }
            else if(!/[A-Z]/.test(password) || !/[a-z]/.test(password)){
                toast.error('You must have an uppercase letter and a lowercase letter in the password')
            }
            else{
                register(email,password)
                .then(()=>{
                    updateUser({displayName:name, photoURL: photoUrl})
                    .then(()=>{
                        setLoading(false)
                        toast.success('Registration successful') 
                        setTimeout(()=>{
                            navigate('/')
                        },3000)
                })
                })
                .catch(err=>{
                    setLoading(false)
                   if(err.message === 'Firebase: Error (auth/email-already-in-use).'){
                    toast.error('Already have an user with this email')
                   }
                   else{
                    toast.error('Something went Wrong!')
                   }
                })
            }
  
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
        <ToastContainer autoClose={1200}/>
        <HelmetProvider>
            <Helmet>
                <title>Residence Realm || Sign Up</title>
            </Helmet>
        </HelmetProvider>
        <div className='w-full flex justify-center items-center mb-[100px] mt-[50px]'>
        <div className='flex flex-col items-center shadow-md w-10/12 max-w-[350px] p-4'>
            <h1 className='text-4xl font-semibold text-center'>Create a new account</h1>
            <form className='flex flex-col gap-5 mt-10 w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
            <label className='font-semibold' htmlFor='name'>Name:</label>
            <input type="text" name='name' id='name' required className='w-full border p-2' />
            </div>
            <div className='flex flex-col gap-2 w-full'>
            <label className='font-semibold' htmlFor='email'>Email:</label>
            <input type="email" required name='email' id='email' className='w-full border p-2' />
            </div>
            <div className='flex flex-col gap-2'>
            <label className='font-semibold' htmlFor='photoUrl'>PhotoUrl:</label>
            <input type="text" required name='photoUrl' id='photoUrl' className='w-full border p-2' />
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
            <button className='py-2 border border-black font-semibold'>Submit</button>
            </form>
            <p className='mt-5 '>Already Have an account? <Link className='font-semibold underline' to='/login'>Sign In</Link></p>
        </div>
</div>
</>
    );
};

export default Register;
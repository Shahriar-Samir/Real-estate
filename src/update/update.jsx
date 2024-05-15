import { useContext, useState} from 'react';
import { authContext } from '../authProvider/authProvider';
import { getAuth } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';


const Update = () => {
    const navigate = useNavigate()
    const {updateUser,setLoading} = useContext(authContext)
    const auth = getAuth()
    const currentUser = auth.currentUser
    const {photoURL,email,displayName} = currentUser
    const [nameInput, nameInputState] = useState(displayName)
    const [emailInput, emailInputState] = useState(email)
    const [photoUrlInput, photoUrlInputState] = useState(photoURL)
    
    function setNameInput(e){
            nameInputState(e.target.value)
    }

    function setEmailInput(e){
            emailInputState(e.target.value)
    }

    function setPhotoUrlInput(e){
            photoUrlInputState(e.target.value)
    }
   

    function updateHandler(e){
        e.preventDefault()
        const newName = e.target.name.value
        const newEmail = e.target.email.value
        const newPhotoUrl = e.target.photoUrl.value
        updateUser({photoURL:newPhotoUrl,displayName:newName,email:newEmail})
        .then(()=> {
            setLoading(false)
            navigate('/')
  
        } )
        .catch(()=>{
            setLoading(false)
            toast.error('Something went Wrong')
        })
    }

    return (
        <div>
   
          <HelmetProvider>
            <Helmet>
                <title>Residence Realm || Update</title>
            </Helmet>
            </HelmetProvider>
        <div className='w-full flex justify-center items-center mb-[100px] mt-[50px]'>

        <div className='flex flex-col items-center shadow-md p-7 rounded-md gap-5 w-10/12 max-w-[350px]' >
            <img src={`${photoURL}`} className='w-[80px] h-[80px] rounded-full object-cover'/>
        <h1 className='text-4xl font-semibold text-center'>Update your profile</h1>
            <form className='flex flex-col gap-5 w-full mt-10' onSubmit={updateHandler}>
            <div className='flex flex-col gap-2'>
            <label className='font-semibold' htmlFor='name'>Name:</label>
            <input type="text" name='name' value={nameInput} onChange={setNameInput} id='name' required className='w-full border p-2' />
            </div>
            <div className='flex flex-col gap-2'>
            <label className='font-semibold' htmlFor='email'>Email:</label>
            <input type="email" required name='email' value={emailInput} onChange={setEmailInput} id='email' className='w-full border p-2' />
            </div>
            <div className='flex flex-col gap-2'>
            <label className='font-semibold' htmlFor='photoUrl'>PhotoUrl:</label>
            <input type="text" required name='photoUrl' value={photoUrlInput} onChange={setPhotoUrlInput} id='photoUrl' className='w-full border p-2' />
            </div>
            <button className='py-2 border border-black font-semibold'>Update Profile</button>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Update;
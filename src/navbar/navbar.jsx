import { useContext } from 'react'
import { Link, NavLink} from 'react-router-dom'
import { authContext } from '../authProvider/authProvider'
import { Tooltip } from '@material-tailwind/react'
import { LuLogOut } from "react-icons/lu";
import { toast} from 'react-toastify';
import icon from '../../public/icons/icon.png'


export default function Navbar() {
  const {user,logOut,loading} = useContext(authContext)
  function handleLogOut(){
      logOut()
      .then(()=>{
        toast.success('Logged out successfully')

     })
      .catch(()=>{
        toast.error('Something went wrong!')
      })
  }


  return (
    <div className='w-full shadow-lg bg-[#d78f3c] text-white' id='navbar'>
    <div className="flex gap-10 flex-col md:flex-row items-center justify-between p-0 py-3 mx-auto w-11/12 max-w-[1200px]">
  <div className="flex justify-between gap-3 flex-row-reverse md:flex-row w-full">
  <div className="dropdown md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-36 text-black right-0">
      <li><NavLink to='/' className={({isActive})=> isActive? 'underline p-2 rounded-md text-[#9a5936]': 'rounded-md text-black p-2'}>Home</NavLink></li>
      <li><NavLink to='/update' className={({isActive})=> isActive? 'underline p-2 rounded-md text-[#9a5936]': 'rounded-md text-black p-2'}>Update</NavLink></li>
      <li><NavLink to='/profile/favorites' className={({isActive})=> isActive? 'underline p-2 rounded-md text-[#9a5936]': 'rounded-md text-black p-2'}>Profile</NavLink></li>
      {loading? <span className="loading loading-spinner loading-lg"></span> : user ? <div className='flex flex-col gap-3 mt-2 items-center text-2xl'>
    <Tooltip content={`${user.displayName}`} className='bg-gray-500 z-10 text-white px-1'>
   <img src={`${user.photoURL}`} className='w-[50px] h-[50px] object-cover rounded-full' /> 
    </Tooltip>
   <div role='button' onClick={handleLogOut} className='flex items-center gap-2'>
   <span className='text-lg'>Logout</span>
    <LuLogOut />
   </div>

   </div>: <Link to='/login' className="px-5 py-2 btn bg-black text-white text-base border-none">Login</Link>}
      </ul>
    </div>  
    <a className="font-bold flex items-center text-center gap-2 text-xl md:text-2xl lg:text-3xl animate__flash">
    <img src={icon} className='w-8 md:w-10 lg:w-12'/>
      Residence <span className='text-[#9a5936] font-extrabold'>Realm</span></a>
  </div>
    <ul className="hidden md:flex font-medium px-1 gap-5">
      <li><NavLink to='/' className={({isActive})=> isActive? 'underline p-2 rounded-md text-[#9a5936]': 'rounded-md text-white p-2'}>Home</NavLink></li>
      <li><NavLink to='/update' className={({isActive})=> isActive? 'underline p-2 rounded-md text-[#9a5936]': 'rounded-md text-white p-2'}>Update</NavLink></li>
      <li><NavLink to='/profile/favorites' className={({isActive})=> isActive? 'underline p-2 rounded-md text-[#9a5936]': 'rounded-md text-white p-2'}>Profile</NavLink></li>
    </ul>
  <div className="hidden md:block">
   {loading? <span className="loading loading-spinner loading-lg"></span> : user ? <div className='flex items-center text-2xl'>
    <Tooltip content={`${user.displayName}`} className='bg-gray-500 z-10 text-white px-2'>
   <img src={`${user.photoURL}`} className='w-[50px] h-[50px] object-cover rounded-full' /> 
    </Tooltip>
    <Tooltip content='Logout' className='bg-gray-500 z-10 text-white px-1'>
    <LuLogOut role='button' className='w-[100px] text-2xl' onClick={handleLogOut} />
    </Tooltip>
  </div>: <Link to='/login' className="px-5 py-2 btn bg-[#9a5936] text-white text-base border-none">Login</Link>}
  </div>
</div>
</div>
  )
}

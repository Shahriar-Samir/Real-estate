import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import 'animate.css'
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useEffect, useState } from 'react';

const EstateDetails = () => {
    const {id} = useParams()
    const idParam = parseInt(id)
    const data = useLoaderData()
    const estate = data.find(item=>{
        return item.id === idParam
    })
    const {estate_title, segment_name, image, description, price, status, area, location, facilities} = estate
    
    const favorites = JSON.parse(localStorage.getItem('favorites'))
 
    
    const [favorite,setFavorite] = useState(false)

    const addToFavorites = ()=>{
        setFavorite(true)
        if(favorites){
            localStorage.setItem('favorites',JSON.stringify([...favorites,estate]))
        }    
        else{
            localStorage.setItem('favorites',JSON.stringify([estate]))
        }
    }

    useEffect(()=>{
        if(favorites){
            const isFavorite = favorites.find(item=>{
                return item.id === idParam
            })
            if(isFavorite){
            setFavorite(true)
        }
        }
        else{
            setFavorite(false)
        }
        
    },[])

    return (
        <>
          <HelmetProvider>
            <Helmet>
                <title>Residence Realm || {estate_title}</title>
            </Helmet>
            </HelmetProvider>
        <div className='w-10/12 max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-10 mt-20 overflow-hidden'>
            <img className='w-full h-[400px] lg:w-1/2 lg:h-[500px] object-cover animate__animated animate__backInLeft' src={image}/>
            <div className='w-full flex flex-col gap-5 lg:gap-1 lg:w-1/2 lg:h-[500px] justify-between animate__animated animate__backInRight'>
                <h1 className='text-4xl md:text-3xl lg:text-2xl font-bold'>{estate_title}</h1>
                <p className='text-2xl md:text-xl'><span className='font-bold '>Segment Name:</span> {segment_name}</p>
                <p className='text-2xl md:text-xl'><span className='font-bold'>Description:</span> {description}</p>
                <p className='flex text-2xl md:text-xl flex-col gap-3'><span className='font-bold'>Facilities:</span> <span className='flex flex-wrap gap-3 lg:text-xl animate__animated animate__backInRight animate__delay-1s'>{facilities.map(item=>{ return <span className='bg-[#d78f3c] text-center px-2 py-1 text-white rounded-lg lg:text-xl' key={item}>{item}</span>})}</span></p>
                <p className='text-2xl md:text-xl'><span className='font-bold'>Status:</span> {status}</p>
                <p className='text-2xl md:text-xl'><span className='font-bold'>Area:</span> {area}</p>
                <p className='text-2xl md:text-xl'><span className='font-bold'>Location:</span> {location}</p>
                <p className=' text-2xl md:text-xl'><span className='font-bold '>Price:</span> {price}</p>
                {
                    favorite===true? <p className=''>
                    <p className='text-xl flex items-center gap-2'><MdFavorite className='text-3xl' /> Added to favorites</p>
                    </p> : <button onClick={addToFavorites} className='border w-fit py-2 px-2 border-orange-500'>
                    <p className='text-xl flex items-center gap-2'><MdFavoriteBorder className='text-3xl'/> Add to favorites</p>
                    </button>
                }
            </div>
        </div>
            </>
    );
};

export default EstateDetails;
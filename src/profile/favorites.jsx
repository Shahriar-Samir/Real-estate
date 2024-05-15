import { useState } from "react";
import { Link } from "react-router-dom";


const Favorites = () => {
    const [favorites,setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))

    function removeItem(id){
        const favs = JSON.parse(localStorage.getItem('favorites'))
        const newFavs = favs.filter(item=>{
            return item.id !== id
        })
        localStorage.setItem('favorites',JSON.stringify(newFavs))
        setFavorites(JSON.parse(localStorage.getItem('favorites')))
    }


    return (
        <div className=' w-11/12 max-w-[1200px] mx-auto mt-10'>
            <h1 className="text-center text-2xl font-bold">Your Favorite Estates</h1>
            <div className='flex flex-col items-start w-11/12 max-w-[500px] mx-auto gap-10 mt-10'>
             {!favorites? <p className="text-center w-full">You haven't add anything</p> : favorites.length>0? favorites.map(item=>{
                const {estate_title, segment_name, image, price, status, area, location,id}=item
                return <div key={id} className="w-full flex justify-between items-center gap-3">
                  <div className="flex gap-5 items-center">
                  <Link to={`/details/${id}`}><img src={`${image}`} className="w-[100px] h-[100px] object-cover"/></Link>
                    <div className='flex flex-col gap-1'>  
                    <p className='font-bold'>{estate_title}</p>
                    <p>{segment_name}</p>
                    <p>{status}</p>
                    <p>{location}</p>
                    </div>
                  </div>
                    <div>
                    <p>{price}</p>
                    <p>{area}</p>
                    <button onClick={()=>{removeItem(id)}} className="mt-8 bg-[#9A5936] text-white px-2 py-1">Remove</button>
                    </div>
                    
                    
                </div>
             }) : <p className="text-center w-full">You haven't add anything</p> }
        </div>
        </div>
    );
};

export default Favorites;
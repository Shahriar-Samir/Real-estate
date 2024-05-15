
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useLoaderData } from 'react-router-dom';
import Estate from './estate';
import { useEffect} from 'react';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const data = useLoaderData()

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return (
        
    <div className=' mx-auto'>
        <ToastContainer autoClose={1200}/>
            <HelmetProvider>
            <Helmet>
                <title>Residence Realm || Home</title>
            </Helmet>
            </HelmetProvider>

<div className=''>
<Swiper className='w-full h-[600px]'    
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        navigation={false}
        >
      <SwiperSlide> 
        <div className="flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner1.jpg')] bg-no-repeat bg-cover h-full" >
        <div className='flex flex-col items-center gap-5' >
        <h1 className='text-white text-center font-bold w-10/12 text-3xl md:text-5xl'>Discover Modern Living</h1>
        <p className='text-white w-10/12 max-w-[700px] text-center text-xl'>Explore our selection of stylish single-family homes with contemporary designs and spacious living areas. Find the perfect home for your family today.</p>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide> 
        <div className="flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner2.jpg')] bg-no-repeat bg-cover h-full" >
        <div className='flex flex-col items-center gap-5'>
        <h1 className='text-white text-center font-bold w-10/12 text-3xl md:text-5xl'>Experience City Life</h1>
        <p className='text-white w-10/12 max-w-[700px] text-center text-xl'>Live in the heart of the city! Check out our range of chic urban apartments with premium amenities and stunning views. Your dream city apartment awaits!</p>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide> 
        <div className="flex justify-center items-center bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner3.jpg')] bg-no-repeat bg-cover h-full" >
        <div className='flex flex-col items-center gap-5'>
        <h1 className='text-white text-center font-bold w-10/12 text-3xl md:text-5xl'>Escape to Nature's Retreat</h1>
        <p className='text-white w-10/12 max-w-[700px] text-center text-xl'>Discover the tranquility of our vacation rental cabins nestled in picturesque settings. Unwind in cozy interiors, enjoy breathtaking views, and create lasting memories with loved ones.</p>
        </div>
        </div>
        </SwiperSlide>
      ...
    </Swiper>
</div>

        <section className='mt-[100px] w-11/12 mx-auto max-w-[1200px]'>
          <h1 className='text-center text-3xl font-bold'>Explore Our Exclusive Properties</h1>
          <p className='text-center mt-5'>Discover a curated selection of homes, apartments, and rentals to match your lifestyle. Browse our diverse range of properties, from cozy apartments to spacious family homes. Find your perfect home today</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10' data-aos="zoom-in-right" data-aos-once='true'>
          {data.map(estate=>{
            return <Estate key={estate.id} estate={estate}/>
          })}          
        </div>
        </section>
        </div>
    );
};

export default Home;



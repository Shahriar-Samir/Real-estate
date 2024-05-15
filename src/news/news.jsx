

const News = () => {
    return (
        <div className='flex flex-col items-center gap-10 mt-10'>
            <div className='flex flex-col items-start w-10/12 max-w-[500px]'>
                <h1 className='font-bold text-lg'>Green Building Practices on the Rise</h1>
                <p>Sustainable construction methods and green building practices are becoming increasingly popular in the real estate industry. Developers and builders are focusing on energy-efficient designs and eco-friendly materials to meet the growing demand for environmentally conscious housing</p>
            </div>
            <div className='flex flex-col items-start w-10/12 max-w-[500px]'>
                <h1 className='font-bold text-lg'>Remote Work Fuels Suburban Real Estate Boom</h1>
                <p>The shift to remote work has prompted a surge in demand for suburban properties. With more flexibility in work locations, homebuyers are opting for spacious homes in quieter neighborhoods, driving up prices and competition in these areas.</p>
            </div>
            <div className='flex flex-col items-start w-10/12 max-w-[500px]'>
                <h1 className='font-bold text-lg'>Virtual Reality Transforming Property ToursDescription</h1>
                <p>The use of virtual reality (VR) technology is revolutionizing property tours in the real estate industry. Potential buyers can now explore homes remotely with immersive 3D tours, saving time and providing a more comprehensive view of properties from the comfort of their own homes.</p>
            </div>
        </div>
    );
};

export default News;
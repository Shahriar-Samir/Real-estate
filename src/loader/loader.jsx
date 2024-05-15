
const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full h-[100vh]'>
            <div className="flex gap-5 items-center">
                <h1 className="font-bold text-3xl">Loading</h1>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </div>
    );
};

export default Loader;
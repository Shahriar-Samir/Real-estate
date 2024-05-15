import { useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate()
    const goBack = ()=>{
        navigate(-1)
    }

    return (
        <div className='w-full h-[100vh] flex justify-center items-center flex-col gap-5'>
            <h1 className="text-red-600 text-2xl font-bold">404 Error !</h1>
            <h2 className="font-bold text-lg">Page your looking for not found !</h2>
            <button onClick={goBack} className="border px-5 py-3 rounded-md border-black font-bold hover:bg-black hover:text-white">Go Back</button>
        </div>
    );
};

export default NotFound;
import { Link } from 'react-router-dom';

const Estate = ({estate}) => {
    const {id, estate_title, segment_name, image, description, price, status, area, location, facilities} = estate
    return (
        <div className="bg-base-100 shadow-xl border border-gray-200">
        <figure className="px-5 pt-5">
          <img src={`${image}`} alt={`${estate_title}`} className="rounded-xl w-full h-[300px] object-cover" />
        </figure>
        <div className="card-body items-center text-center gap-3">
          <h2 className="card-title">{estate_title}</h2>
          <p><span className='font-bold'>Type:</span> {status}</p>
          <p><span className='font-bold'>Price</span> {price}</p>
          <div className="card-actions">
          <Link to={`/details/${id}`}><button className='shadow-sm text-white border-black p-3 font-semibold rounded-md bg-[#dd933e] px-4'>View Property</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Estate;



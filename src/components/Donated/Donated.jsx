import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Donated = ({ donate }) => {
    const { id, picture, title, category, price, category_bg } = donate;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-lg">
                <figure><img className=" w-4/5" src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <div className={`w-1/3 bg-[${category_bg?.health}] text-center rounded`}><h2>{category}</h2></div>
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <div className="card-actions ">
                        <Link to={`/donationDetails/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Donated.propTypes = {
    donate: PropTypes.object,
};
export default Donated;
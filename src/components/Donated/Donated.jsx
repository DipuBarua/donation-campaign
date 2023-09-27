import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Donated = ({ donate }) => {
    const { id, picture, title, category, price, category_bg, card_bg, button_text_color } = donate;

    // card style using json data 
    const colorCard =
        category === "Health" ? card_bg.healthCard :
            (category === "Education" ? card_bg.educationCard :
                (category === "Clothing" ? card_bg.clothingCard :
                    (category === "Food" ? card_bg.foodCard : "")));

    const colorCategory =
        category === "Health" ? category_bg.health :
            (category === "Education" ? category_bg.education :
                (category === "Clothing" ? category_bg.clothing :
                    (category === "Food" ? category_bg.food : "")));

    const colorText = (category === "Health") ? button_text_color.healthText :
        ((category === "Education") ? button_text_color.educationText :
            ((category === "Clothing") ? button_text_color.clothingText :
                ((category === "Food") ? button_text_color.foodText : '')));

    return (
        <div>
            <div style={{ backgroundColor: colorCard }} className="card lg:card-side  shadow-lg">
                <figure><img className=" w-full h-full" src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <div style={{ backgroundColor: colorCategory, color: colorText }} className="w-1/3 text-center rounded"><h2>{category}</h2></div>
                    <h2 className="card-title">{title}</h2>
                    <p className=" font-semibold" style={{ color: colorText }}>{price}</p>
                    <div className="card-actions ">
                        <Link to={`/donationDetails/${id}`}><button className="btn text-white" style={{ backgroundColor: colorText }}>View Details</button></Link>
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
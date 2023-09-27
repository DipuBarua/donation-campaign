import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, button_text_color } = donation;

    const colorCategory =
        category === "Health" ? category_bg.health :
            category === "Education" ? category_bg.education :
                category === "Clothing" ? category_bg.clothing :
                    category === "Food" ? category_bg.food : "";

    const colorCard =
        category === "Health" ? card_bg.healthCard :
            category === "Education" ? card_bg.educationCard :
                category === "Clothing" ? card_bg.clothingCard :
                    category === "Food" ? card_bg.foodCard : "";
    // console.log(card_bg.foodCard);

    const colorText = (category === "Health") ? button_text_color.healthText :
        (category === "Education") ? button_text_color.educationText :
            (category === "Clothing") ? button_text_color.clothingText :
                (category === "Food") ? button_text_color.foodText : '';
    // console.log(button_text_color.foodText);

    return (
        <Link to={`/donationDetails/${id}`}>

            <div className="card card-compact  shadow-lg">
                <div className={`bg-[${colorCard}]`}>
                    <figure><img src={picture} alt="donation image" /></figure>
                    <div className="card-body">
                        {/* <div className= { "w-fit px-3 py-1 rounded"}> */}
                        <div className={`w-fit px-3 py-1 rounded bg-[${colorCategory}]`}>

                            <p className={`text-[${colorText}]`}>{category}</p>
                        </div>
                        <h2 className={` card-title text-[${colorText}] bg-[${colorText}]} `}>{title}</h2>
                    </div>
                </div>
            </div>

        </Link>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object,
};
export default DonationCard;
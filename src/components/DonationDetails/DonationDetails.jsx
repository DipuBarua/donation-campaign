import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonateApplication } from "../../utility/localStorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const donation = donations.find(donation => intId === donation.id);
    // console.log(donation);

    // btn bg style form json data 
    const { category, button_text_color } = donation;
    const colorText = (category === "Health") ? button_text_color.healthText :
        ((category === "Education") ? button_text_color.educationText :
            ((category === "Clothing") ? button_text_color.clothingText :
                ((category === "Food") ? button_text_color.foodText : '')));


    // handle toasst 
    const handleDonateApplication = () => {
        saveDonateApplication(intId);
        toast("Successfully Donated!");
    }

    return (
        <div className=" mt-12">
            <ToastContainer></ToastContainer>
            <img className="w-full" src={donation.picture} alt="" />
            <div className="p-12 w-full relative bottom-24 opacity-60 bg-black">
            </div>
            <button onClick={handleDonateApplication} className="btn relative bottom-40 text-white border-none ml-5 mb-2" style={{ backgroundColor: colorText }}>Donate {donation.price}</button>
            <div className=" relative bottom-24">
                <h1 className=" mb-6 text-4xl font-bold">{donation.title}</h1>
                <p>{donation.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;
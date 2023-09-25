import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const donation = donations.find(donation => intId === donation.id);
    // console.log(donation);

    const handleDonate = () => {
        toast("Successfully Donated!");
    }

    return (
        <div className=" my-12 ">
            <ToastContainer></ToastContainer>
            <img className="w-full" src={donation.picture} alt="" />
            <div className="p-4 w-full">
                <button onClick={handleDonate} className={`btn ${donation.button_text_color}`}>Donate ${donation.price}</button>
            </div>
            <h1 className=" my-6 text-4xl font-bold">{donation.title}</h1>
            <p>{donation.description}</p>
        </div>
    );
};

export default DonationDetails;
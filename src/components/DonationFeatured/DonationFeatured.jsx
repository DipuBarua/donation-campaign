import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const DonationFeatured = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch("donation.json")
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    return (
        <div>
            <div className=" grid md:grid-cols-4 gap-10 mt-8">
                {
                    donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationFeatured;
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
            <h1 className=" text-3xl">donations: {donations.length}</h1>
            <div className=" grid md:grid-cols-4 gap-10">
                {
                    donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationFeatured;
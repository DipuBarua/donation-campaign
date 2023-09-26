import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import Donated from "../Donated/Donated";

const Donation = () => {
    const donations = useLoaderData();
    const [donateApplications, setDonateApplications] = useState([]);

    useEffect(() => {
        const storedDonateIds = getStoredDonation();
        if (donations.length > 0) {
            const donateIds = [];
            for (const id of storedDonateIds) {
                const donate = donations.find(donation => donation.id === id)
                if (donate) {
                    donateIds.push(donate);
                }
            }
            setDonateApplications(donateIds);
        }
    }, [])

    return (
        <div className=" grid md:grid-cols-2 gap-14 mt-10">
            {
                donateApplications.map(donate => <Donated key={donate.id} donate={donate}></Donated>)
            }
        </div>
    )
};

export default Donation;
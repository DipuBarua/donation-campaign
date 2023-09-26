import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import Donated from "../Donated/Donated";

const Donation = () => {
    const donations = useLoaderData();
    const [donateApplications, setDonateApplications] = useState([]);
    // handle see all button 
    const [seeDonate, setSeeDonate] = useState(4);
    const handleSeeAll = () => {
        setSeeDonate(donations.length)
    }

    // console.log(donations);
    // console.log(donateApplications);

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
    }, []);

    return (
        <div>
            <div className=" grid md:grid-cols-2 gap-14 mt-10">
                {
                    donateApplications.slice(0, seeDonate).map(donate => <Donated key={donate.id} donate={donate}></Donated>)
                }
            </div>
            <div className={`text-center my-10 ${seeDonate > 4 ? "hidden" : ""}`}>
                <button onClick={handleSeeAll} className=" btn btn-accent">See All</button>
            </div>

        </div>
    )
};

export default Donation;
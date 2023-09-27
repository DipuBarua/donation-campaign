import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    // part0 >> load data for pai chart value 
    const totalDonation = useLoaderData();
    const givenDonation = getStoredDonation();

    // part1 
    const data = [
        { name: "Total Donation", value: (totalDonation.length - givenDonation.length) },
        { name: "Total Donate", value: givenDonation.length },
    ];

    // part2
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    // part3 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    // part4 
    return (
        <div className=" md:ml-96">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            <div className=" md:flex items-center gap-24 mx-5">
                <div className=" flex gap-4">
                    <p>Total Donation</p>
                    <hr className=" p-1 mt-2 bg-[#0088FE] rounded-xl w-32" />
                </div>
                <div className=" flex gap-4">
                    <p>I Donated</p>
                    <hr className=" p-1 mt-2 bg-[#00C49F] rounded-xl w-32" />
                </div>
            </div>

        </div>
    )
};
export default Statistics;
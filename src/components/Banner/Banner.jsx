
const Banner = () => {
    return (
        <div>
            <h2 className=" text-5xl font-bold text-center mt-16">I Grow By Helping People In Need</h2>
            <div className=" text-center mt-10">
                <input type="text" placeholder="Search here..." className="input input-bordered w-full max-w-xs" />
                <button type="submit" className="btn bg-[#FF444A]">Search</button>
            </div>
        </div>
    );
};

export default Banner;
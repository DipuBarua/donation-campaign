import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2 className=" text-3xl text-center mb-5">Opps!</h2>
            <p className=" text-xl text-center">{error.statusText || error.message}</p>
            {
                error.status === 404 && <div className=" text-center">
                    <p className=" text-center text-4xl mb-4">Error {error.status}! <br /> page not found</p>
                    <Link to={'/'}> <button className=" bg-gray-300 rounded p-2">Home</button> </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
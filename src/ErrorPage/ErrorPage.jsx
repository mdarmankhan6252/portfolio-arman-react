import { Link } from "react-router-dom";
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center flex-col h-screen errorPage">
            <h1 className="text-4xl font-semibold text-white">404 page is not found</h1>
            <Link className="mt-6 py-2 px-6 bg-blue-500 text-white font-semibold border-2 border-blue-500 hover:bg-transparent hover:text-blue-200 duration-200" to="/">Go To Home</Link>
        </div>
    );
};

export default ErrorPage;
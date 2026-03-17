import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to acess non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="text-center color-blue">
                <h1 className="text-5xl text-white font-bold mb-4">ERRO 404</h1>
                <p className="text-3xl text-gray-400 mb-4 ">Oops! Essa página não existe!!!</p>
                <a href="/" className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-400 hover:scale-105 transition">
                 Retornar para página inicial.
                </a>
            </div>
        </div>
    )
}

export default NotFound;
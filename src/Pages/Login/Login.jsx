import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
    }
    return (
        <div className="bg-[url('https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Flogin_hero.webp&w=1920&q=75')] bg-cover bg-center min-h-[78%] flex items-center h-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl font-bold pb-4">Log in</h1>
            <p className="text-white text-2xl">Login to unlock the full Nolan Experience</p>

            <div className="bg-slate-600 mt-5 w-[600px] h-[400px] rounded-xl bg-opacity-40 z-0 flex flex-col items-center justify-center">
                <button onClick={handleGoogleLogin} className="opacity-100 bg-red-400 text-white active:bg-red-700 rounded-2xl w-60 py-2 text-normal font-bold my-2">Continue with Google</button>
                <button className="opacity-100 bg-red-400 text-white active:bg-red-700 rounded-2xl w-60 py-2 text-normal font-bold my-2">Continue with Facebook</button>
                <button className="opacity-100 bg-red-400 text-white active:bg-red-700 rounded-2xl w-60 py-2 text-normal font-bold my-2">Continue with Email</button>
                <p className="text-white">Forgot Password?</p>
                <p className="text-white text-xs mt-5">By signing up, you agree to the Terms of Service and Privacy Policy</p>
            </div>

        </div>
    );
};

export default Login;
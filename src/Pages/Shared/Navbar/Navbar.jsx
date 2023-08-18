import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    
    return (
        <nav className="fixed flex w-full justify-between items-center px-16 py-2 text-white">
            <div className="w-24">
                <img className="w-full" src="https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_logo.png&w=640&q=75" alt="" />
            </div>
            <div className="flex gap-10">
                <Link to='/'>About Us</Link>
                { user ?
                    <>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link onClick={logOut}>Logout</Link>
                    </>
                    :
                    <Link to='/login'>Login</Link>
                }
                <Link to='/'>Pricing</Link>
                <Link onClick={()=>window.create_script_modal.showModal()} to='/'>Create Script</Link>
                <Link to='/'>Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;
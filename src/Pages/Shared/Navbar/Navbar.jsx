import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="fixed flex w-full justify-between items-center px-16 py-2 text-white">
            <div className="w-24">
                <img className="w-full" src="https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_logo.png&w=640&q=75" alt="" />
            </div>
            <div className="flex gap-10">
                <Link to='/'>Home</Link>
                <Link to='/'>Login</Link>
                <Link to='/'>Pricing</Link>
                <Link to='/'>Create Script</Link>
                <Link to='/'>Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;
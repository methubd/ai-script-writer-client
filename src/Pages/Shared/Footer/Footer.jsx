import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-24 pb-5 px-5 flex justify-between">
            <div>
                <h1 className="text-sm font-bold">© Nolan 2023</h1>
                <Link className="text-xs">Privacy Policy</Link> | <Link className="text-xs">Terms of Service</Link>
            </div>            
            <div>
                <h1 className="text-sm font-bold">Follow Us:</h1>
            </div>            
            <div>
                <h1 className="text-sm font-bold">hello@nolanai.app</h1>
            </div>            
        </footer>
    );
};

export default Footer;
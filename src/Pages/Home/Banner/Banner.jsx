import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Banner = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const synopsis = form.synopsis.value;
        const genre = form.genre.value;
        const email = user?.email;
        const demandScript = {title, synopsis, genre, email}

        if (user) {
            const res = axios.post('http://localhost:5000/scripts', demandScript)
            console.log(res.data);
            form.reset();
        }
        else{
            swal({
                title: "Please login to generate script!",
                text: "You have to login to generate a or ton of script.",
                timer: 2000
              });
            navigate('login')
        }
    }

    const handleCloseModal = () => {
        window.create_script_modal.close();
    };
    return (
        <div className="bg-[url('https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_1.webp&w=1920&q=75')] bg-cover bg-center min-h-[78%] flex items-center">
            <div className="pl-6 md:pl-16">
                <div className="w-[220px] md:w-[350px]">
                    <img className="w-full" src="https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_logo.png&w=640&q=75" alt="" />
                </div>
                <h1 className="text-white font-bold text-5xl py-5">Free Script Writing Software</h1>
                <p className="text-white text-2xl md:text-2xl font-normal mb-5">Unleash creativity with AI Copilot - craft compelling <br /> screenplays</p>
                
                {
                    user ?                     
                    <div className="py-5">
                    <Link to='/dashboard' className="bg-red-400 text-white text-normal font-bold px-8 py-5 rounded-lg active:bg-red-700 transition-colors hover:bg-red-300 mt-11">Go to Dashboard</Link>
                    </div>
                    :
                    <>
                    <button
                    onClick={()=>window.create_script_modal.showModal()}
                    className="bg-red-400 text-white text-normal font-bold px-8 py-5 rounded-lg active:bg-red-700 transition-colors hover:bg-red-300">Start Writing</button>
                    <Link to='/login'
                    className="px-8 py-5 border mx-4 border-white rounded-lg text-white text-normal font-bold active:text-red-700 active:border-red-700 transition-colors hover:border-red-300 hover:text-red-300">Log in</Link>
                    </>
                }

                
            </div>

            {/* Create Script Modal */}
            <dialog id="create_script_modal" className="modal modal-bottom sm:modal-middle">
            <form onSubmit={handleSubmit} method="dialog" className="modal-box">
                <h3 className="font-bold text-lg pb-5">Create Script</h3>

                <div>
                    <label htmlFor="title"><span className="text-red-500">*</span> Title</label>
                    <input className="w-full border rounded-lg p-1 px-2 font-semibold hover:border-red-300 transition-colors my-2 outline-none" type="text" name="title" defaultValue="Untitled Screenplay" required/>
                </div>

                <div className="pt-5">
                    <label htmlFor="synopsis">Synopsis</label>
                    <textarea className="w-full border rounded-lg p-1 px-2 font-normal hover:border-red-300 transition-colors my-2 outline-none" type="text" name="synopsis" placeholder="Sci-fi adventure across multiverse"/>
                </div>

                <div className="py-3 px-5 border rounded-xl border-emerald-200 bg-emerald-50 my-5">
                    <p className="text-sm">Suggest screenplay titles based on the synopsis. <button className="border p-2 rounded-xl border-emerald-200 cursor-not-allowed" disabled>Suggest titles</button> </p>
                </div>

                <div>
                    <label htmlFor="genre">Genre</label>
                    <input className="w-full border rounded-lg p-1 px-2 hover:border-red-300 transition-colors my-2 outline-none" type="text" name="genre" placeholder="Action, Comedy, Drama... etc"/>
                </div>

                <h1 className="text-center font-bold">OR</h1>

                <div className="py-3 px-5 border rounded-xl border-blue-300 bg-blue-50 my-5">                   
                    <p className="text-sm">When uploading a PDF file, please ensure that the screenplay is in the industry-standard format. Otherwise, it might be parsed incorrectly.</p>
                </div>

                <div className="flex gap-4 justify-center">
                    <button className="border px-6 py-2 rounded-lg text-sm font-semibold hover:text-red-400 hover:border-red-400 transition-all">Upload .PDF</button>
                    <button className="border px-6 py-2 rounded-lg text-sm font-semibold hover:text-red-400 hover:border-red-400 transition-all">Upload .FDX</button>
                </div>

                <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <input onClick={() => handleCloseModal()} className="btn" type="button" value="Close"/>
                <input className="btn bg-red-700 text-white hover:bg-red-700" type="submit" value='Submit'/>
                </div>
            </form>
            </dialog>
        </div>
    );
};

export default Banner;
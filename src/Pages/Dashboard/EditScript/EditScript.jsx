import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const EditScript = () => {
    const script = useLoaderData();
    const navigate = useNavigate();

    const handleScriptEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const generatedScript = form.script.value;
        const newGeneratedScript = {title, generatedScript};

        axios.put(`http://localhost:5000/edit-scripts/${script._id}`, newGeneratedScript)
        .then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully Edited!',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/dashboard/my-scripts')
        })

    }
    return (
        <div className="bg-slate-900 flex justify-between gap-5 p-10 m-2 rounded-2xl">
            <form onSubmit={handleScriptEdit} className="w-full">
                <input className="py-1 px-2 w-[50%] rounded-lg font-bold text-black outline-none" type="text" name="title" placeholder="Title" defaultValue={script?.title}/>
                <textarea cols="30" rows="15" className="py-1 px-2 w-full rounded-lg text-black mt-5 outline-none" type="text" name="script" placeholder="Title" defaultValue={script?.generatedScript}/>
                
                <div className="text-center">
                    <input className="bg-red-400 px-5 py-2 text-white font-semibold rounded-lg my-4 cursor-pointer hover:bg-red-300 active:bg-red-800 transition-colors" type="submit" value="Confirm Edit" />
                </div>
            </form>
        </div>
    );
};

export default EditScript;
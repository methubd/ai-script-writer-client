import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyScripts = () => {
    const {user} = useContext(AuthContext)

    const {data: myScripts = [], refetch} = useQuery({
        queryKey: ['myScripts'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/scripts/${user?.email}`, {
                headers: {
                    // TODO: have to use axiosSecure for more flexibility
                    Authorization: `Bearer ${localStorage.getItem('AuthSecret')}`
                }
            })
            return res.data;
        }
    })

    const handleScriptDelete = (script) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/scripts/${script._id}`)
                .then(() => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    refetch()
                })              
            }
          }) 
    }

    return (
        <div className="lg:w-[80%]">
            {
                myScripts?.map(script => <div className="bg-slate-900 flex justify-between gap-5 p-10 m-2 rounded-2xl"
                key={script._id}
                >
                <div className="text-white">
                    <h1 className="text-2xl font-bold py-3">{script?.title}</h1>
                    <p><span className="font-semibold">Genre:</span> {script?.genre}</p>
                    <p><span className="font-semibold">Synopsis:</span> {script?.prompt} </p>
                    <p><span className="font-semibold">Last Edited:</span> {script?.createdAt}</p>
                </div>
                <div className="flex flex-col items-end">
                    <Link to={`/dashboard/edit-script/${script._id}`} className="bg-red-400 px-5 py-2 text-white font-semibold rounded-lg my-2">Edit</Link>
                    <button className="bg-red-400 px-5 py-2 text-white font-semibold rounded-lg my-2">Screen Breakdown</button>
                    <button onClick={() => handleScriptDelete(script)} className="bg-white text-red-400 border border-red-400 px-5 py-2 text-red-400 font-semibold rounded-lg my-2">Delete</button>
                </div>
            </div>)
            }

            

        </div>
    );
};

export default MyScripts;
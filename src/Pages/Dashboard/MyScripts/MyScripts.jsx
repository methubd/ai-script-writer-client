import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";



const MyScripts = () => {
    const {user} = useContext(AuthContext)

    const {data: myScripts = []} = useQuery({
        queryKey: ['myScripts'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/scripts/${user?.email}`)
            return res.data;
        }
    })

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
                    <button className="bg-red-400 px-5 py-2 text-white font-semibold rounded-lg my-2">Edit</button>
                    <button className="bg-red-400 px-5 py-2 text-white font-semibold rounded-lg my-2">Screen Breakdown</button>
                    <button className="bg-white text-red-400 border border-red-400 px-5 py-2 text-red-400 font-semibold rounded-lg my-2">Delete</button>
                </div>
            </div>)
            }

            

        </div>
    );
};

export default MyScripts;
import { Outlet } from "react-router-dom";
import DashboardMenu from "../Pages/Dashboard/DashboardMenu/DashboardMenu";


const Dashboard = () => {
    return (
        <div className="bg-[url('https://www.nolanai.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flatest_scripts_hero.ed2ecad1.webp&w=1920&q=75')] bg-cover bg-center h-screen flex flex-col bg-slate-900">
            <div className="text-center mt-48 w-full lg:w-[70%] mx-auto">
                <h1 className="text-5xl font-bold text-white">Your Latest Scripts</h1>
                <button className="bg-red-400 text-white text-normal font-bold px-8 py-5 rounded-lg active:bg-red-700 transition-colors hover:bg-red-300 mt-5">Upgrade your plan</button>
                    <DashboardMenu></DashboardMenu>
                <div className="text-left z-0">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
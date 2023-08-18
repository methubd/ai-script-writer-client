import ActiveLink from "../../../components/CreateScriptModal/ActiveLink";


const DashboardMenu = () => {
    return (
        <div className="bg-slate-900 text-white flex gap-6 py-1 px-1 mt-10 rounded-3xl w-fit">
            <ActiveLink onClick={()=>window.create_script_modal.showModal()} to='/dashboard/create-script'>Create script</ActiveLink>
            <ActiveLink to='/dashboard/my-scripts'>My Scripts</ActiveLink>
            <ActiveLink to='/dashboard/demo-scripts'>Demos</ActiveLink>
        </div>
    );
};

export default DashboardMenu;
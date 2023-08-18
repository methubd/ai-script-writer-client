import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive}) => isActive ? "bg-red-400 text-white flex items-center gap-1 px-10 py-2 rounded-2xl" : "flex items-center gap-1 px-10 py-2 rounded-2xl transition" }
                  >
                    {children}
                  </NavLink>
    );
};

export default ActiveLink;
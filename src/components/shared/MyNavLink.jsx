import { NavLink } from "react-router";

const MyNavLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` ${className} ${isActive && "bg-green-800 text-white  rounded"}`
      }
    >
      {children} 
    </NavLink>
  );
};

export default MyNavLink;

import { NavLink } from "react-router";

const MyNavLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold pb-2  ${className} ${isActive && "bg-green-800 text-white p-2 rounded  px-4 "}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;

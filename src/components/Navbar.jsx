import{FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
          <img src="../logo.png" className="h-14"/>
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100">
          <NavLink to="/">
          <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
            <FaShoppingCart/>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;

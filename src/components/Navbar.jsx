import{FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl">
        <NavLink to="/">
          <div>
          <img src="../logo.png" className="h-14"/>
          </div>
        </NavLink>
        <div>
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

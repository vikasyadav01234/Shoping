import{FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
          <img src="../../public/logo.png"/>
          </div>
        </NavLink>
        <div>
          <NavLink>
          <p>Home</p>
          </NavLink>
          <FaShoppingCart/>
        </div>
      </div>
    </div>
  )
};

export default Navbar;

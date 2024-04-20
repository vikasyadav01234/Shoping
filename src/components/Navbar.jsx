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
          <NavLink to="/">
          <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
            <FaShoppingCart/>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default Navbar;

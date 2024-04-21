import{FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state)=>(state))
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto mr-5 space-x-6">
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
            <div className="relative">
            <FaShoppingCart/>
            {
              cart.length > 0 &&
              <span className="absolute">{cart.length}</span>
            }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;

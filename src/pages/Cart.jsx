import { useSelector } from "react-redux";

const Cart = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div>
      {
        cart.length > 0 ?
        ():
        (<div>
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button>
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  );
};

export default Cart;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr) => acc+curr.price,0));
  },[cart])
  return (
    <div>
      {
        cart.length > 0 ?
        (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
          {
            cart.map((item,index)=>{
              return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
          }
          </div>
          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
              <div className="flex flex-col gap-5 ">
              <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
              <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
              <p>
                <span>Total Items : {cart.length}</span>
              </p>
              </div>
            </div>
            <div>
              <p>Total Amount :${totalAmount}</p>
              <button>
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
        ):
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

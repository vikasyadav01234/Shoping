import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { remove, add } from "../redux/Slices/cartSlice";

const Product = ({post}) => {
  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();
  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item Added to Cart")
  }
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed from Cart");
  }
  return (
    <div className="flex flex-col items-center justify-between
    hover:scale-110 transition-all duration-300 ease-in 
    shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div>
        <img src={post.image}/>
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {
        cart.some((p)=> p.id === post.id) ?
        (<button
        onClick={removeFromCart}
        >
          Remove Item
        </button>):
        (<button onClick={addToCart}>
          Add to Cart
        </button>)
      }

    </div>
  )
};

export default Product;

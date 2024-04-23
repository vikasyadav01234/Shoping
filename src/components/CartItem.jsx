import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import {toast} from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.success("Item removed")
  }
  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover "  src={item.image}/>
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
          <div className="flex items-center justify-between">
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;

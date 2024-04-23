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
        <div>
          <img src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
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

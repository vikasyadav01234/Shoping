import { useSelector } from "react-redux";

const Product = ({post}) => {
  const {cart} = useSelector((state)=>state)
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image}/>
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {
        cart.some((p)=> p.id == post.id) ?
        (<button>
          Remove Item
        </button>):
        (<button>
          Add to Cart
        </button>)
      }

    </div>
  )
};

export default Product;

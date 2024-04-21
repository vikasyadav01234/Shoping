const CartItem = ({item, itemIndex}) => {
  return (
    <div>
      <div>
        <div>
          <img src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
        </div>
      </div>
    </div>
  )
};

export default CartItem;

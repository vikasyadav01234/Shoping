const Product = ({post}) => {
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src=`${post.image}`/>
      </div>
    </div>
  )
};

export default Product;

import { useState } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)

  async function fetchProductData(){
    setLoading(true);
    try{

    }
    catch(error){

    }
    setLoading(false);
  }
  return <div>This is Home Page</div>;
};

export default Home;

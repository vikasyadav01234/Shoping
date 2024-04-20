import { useState } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)

  async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
    }
    catch(error){

    }
    setLoading(false);
  }
  return <div>This is Home Page</div>;
};

export default Home;

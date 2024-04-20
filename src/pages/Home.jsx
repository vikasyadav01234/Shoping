import { useEffect, useState } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])

  async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(error){
      console.log("Error aa Gya jii");
      setPosts([])
    }
    setLoading(false);
  }
  useEffect ( ()=> {
    fetchProductData();
  },[])
  return <div>This is Home Page</div>;
};

export default Home;

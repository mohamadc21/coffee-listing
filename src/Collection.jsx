import { useState, useEffect } from "react";
import vector from './assets/images/vector.svg';
import ProductItem from "./components/ProductItem";

const API_URL = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

function Collection() {

  const [data, setData] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);

  useEffect(() => {
    fetchCollections();
  }, []);

  async function fetchCollections() {
    const resp = await fetch(API_URL);
    const data = await resp.json();
    setData(data);
  }

  function filterAvailablesTo(available) {
    if(available) {
      const newData = data.filter(item => available ? (item.available === true) : (item.available === false))
      setData(newData);
    }
    else {
      fetchCollections();
    }
    available ? setShowAvailable(true) : setShowAvailable(false);

  }

  return (
    <div className="bg-[#1B1D1F] -mt-32 w-full max-w-3xl pt-14 p-8 flex flex-col items-center rounded-xl relative">

      <div className="text-center">
        <div className="absolute top-5 left-1/2 flex items-center justify-center"><img src={vector} width="200" /></div>
        <div className="relative max-w-md">
          <h1 className="text-3xl mb-4">Our Collection</h1>
          <p className="text-[#6F757C] text-sm">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </div>
      </div>

      <div className="mt-8 mb-12 flex items-center gap-2">
        
        <button className={`py-2 text-sm px-3.5 rounded-md hover:bg-[#6F757C] duration-200 ${!showAvailable && "bg-[#6F757C]" }`} onClick={() => filterAvailablesTo(false)}>All Products</button>
        <button className={`py-2 text-sm px-3.5 rounded-md hover:bg-[#6F757C] duration-200 ${showAvailable && "bg-[#6F757C]" }`} onClick={() => filterAvailablesTo(true)}>Available Now</button>

      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(item => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>


    </div>
  )
}

export default Collection;
import Collection from "./Collection";
import Banner from './components/Banner';

function App() {

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#111315] text-white relative">

      <Banner />
      <div className="px-12">
        <Collection />
      </div>


    </div>
  )
  
}

export default App

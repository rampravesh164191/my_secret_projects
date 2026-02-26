import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App(){
  return (
    <div className="border h-full w-screen bg-orange-500 sm:bg-yellow-500 lg:bg-blue-500 lg:max-w-[1536px] m-auto">
      <Navbar/>
      <MainContent/>
    </div>
  )
}
export default App;
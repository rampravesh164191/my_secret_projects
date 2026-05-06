import Navbar from "./components/Navbar";

function App() {
  const data = [
    { name: "mouse", price: 20, category: "electronics" },
    { name: "keyboard", price: 50, category: "electronics" },
    { name: "monitor", price: 2000, category: "electronics" },
    { name: "CPU", price: 100, category: "electronics" },
    { name: "potato", price: 20, category: "vegetables" },
    { name: "tomato", price: 10, category: "vegetables" },
    { name: "onion", price: 30, category: "vegetables" },
    { name: "ladyfinger", price: 40, category: "vegetables" },
    { name: "apple", price: 60, category: "fruits" },
    { name: "mango", price: 50, category: "fruits" },
    { name: "apple", price: 60, category: "fruits" },
    { name: "pomogranet", price: 90, category: "fruits" }
  ]
  return (
    <div>
      <Navbar />
      <div className="border flex">
        <div className="h-screen w-[200px]">sidebar</div>
        <div className="flex flex-wrap gap-4">
          {data.map((p, index) => (
            <div className="border w-[200px] h-[300px] flex flex-col justify-center p-1">
              <div className="border w-[90%] h-[80%] m-auto"></div>
              <h4 className="text-center">{p.name}{p.price}</h4>
              <p className="text-center">{p.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
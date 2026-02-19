import { useEffect, useState } from "react";
import axios from "axios";

const addData = () =>{
  axios.post("https://learningreact-3edeb-default-rtdb.firebaseio.com/data.json",{
    name : "Ashutosh",
    age : 25,
    email : "ashu@gmail.com"
  })
  .then((response)=> console.log("data added", response.data))
  .catch(error=>console.error("error adding data", error))
}

// https://learningreact-3edeb-default-rtdb.firebaseio.com/
function App(){
  const [data, setData] = useState(null);
  useEffect(()=>{
    axios.get("https://learningreact-3edeb-default-rtdb.firebaseio.com/data.json")
    .then((response)=>{
      console.log(response.data);
    })
    .catch(error => console.error("error fetching data", error))
  },[])

  return (
    <>
    <ControlledInput/>
    <button onClick={addData}>add Data</button>
    </>
  )
}

export default App;
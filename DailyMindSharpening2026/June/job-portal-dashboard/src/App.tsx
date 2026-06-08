import AuthContextReducer from "./components/AuthContextReducer";
import Button2 from "./components/Button2";
import CompoundComponents from "./components/CompoundComponents";
import EventsInput from "./components/EventsInput";


export default function App(){
  return (
    <div>
      <CompoundComponents/>
      <AuthContextReducer/>
      <Button2>Click</Button2>
      <EventsInput/>
    </div>
  )
}
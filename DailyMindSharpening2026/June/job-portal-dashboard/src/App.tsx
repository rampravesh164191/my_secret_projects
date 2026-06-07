import WelcomeMessage from "@/components/WelcomeMessage";
import Card from "@/components/Card";
import JobList from "./components/JobList";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import LiftingState from "./components/LiftingState";
import UseEffectTimer from "./components/UseEffectTimer";
import UseEffectUsers from "./components/UseEffectUsers";

function App() {
  return (
    <div>
      <WelcomeMessage isLoggedIn={true} name="Ram" />
      <WelcomeMessage isLoggedIn={false} name="Ram" />
      <Card>
        <h2>Job Portal Dashboard</h2>
        <p>Welcome to your admin panel.</p>
        <ControlledForm/>
        <UncontrolledForm/>
        <LiftingState/>
        <UseEffectTimer/>
        <UseEffectUsers/>
      </Card>
      <JobList/>
    </div>
  );
}

export default App;
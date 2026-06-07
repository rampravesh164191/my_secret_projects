import WelcomeMessage from "@/components/WelcomeMessage";
import Card from "@/components/Card";
import JobList from "./components/JobList";

function App() {
  return (
    <div>
      <WelcomeMessage isLoggedIn={true} name="Ram" />
      <WelcomeMessage isLoggedIn={false} name="Ram" />
      <Card>
        <h2>Job Portal Dashboard</h2>
        <p>Welcome to your admin panel.</p>
      </Card>
      <JobList/>
    </div>
  );
}

export default App;
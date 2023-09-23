import "./style.css"
import Dashboard from "./components/dashboard/Dashboard";
import Contentpage from "./components/content/Contentpage";


function App() {
  return (
    <div className="app" > 
      <Dashboard/>
      <Contentpage/>
    </div>
  );
}

export default App;

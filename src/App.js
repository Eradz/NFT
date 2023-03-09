import Card from "./components/card/Card";
import Nav from "./components/nav/Nav";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex">
    <Sidebar/>
    <div className="w-[100%]">
    <Nav/>
    <Card/>
    </div>
     </div>
  );
}

export default App;

import Card from "./components/card/Card";
import Modal from "./components/card/Modal";
import Nav from "./components/nav/Nav";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex">
      {/* <Modal/> */}
    <Sidebar/>
    <div className="w-[100%] p-3">
    <Nav/>
    <Card/>
    </div>
     </div>
  );
}

export default App;

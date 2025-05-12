import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      className="md:w-[100%] 
  md:h-[calc(100vh-0.75rem*2)] w-screen h-screen md:rounded-2xl bg-black text-white"
    >
      <NavBar className="p-2 border-b border-gray-500" />
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

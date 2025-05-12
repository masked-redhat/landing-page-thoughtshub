import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      className="md:w-[100%] 
  md:h-[calc(100vh-0.75rem*2)] w-screen h-screen md:rounded-2xl bg-black text-white transition-all"
    >
      <NavBar className="p-2 border-b border-gray-500" />

      <main className="p-2 md:h-[calc(100vh-1.9rem*2)] h-[calc(100vh-2.3rem)] w-full transition-all overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

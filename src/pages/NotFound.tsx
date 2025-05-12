import NavBar from "../components/NavBar";

// copied from App.tsx and removed Outlet from main tag
const NotFound = () => {
  return (
    <div className="md:w-full md:h-[calc(100vh-0.75rem*2)] w-screen h-screen md:rounded-2xl bg-black text-white transition-all font-urban overflow-hidden mx-auto max-w-[1440px!important]">
      <NavBar className="p-2 border-b border-gray-600 font-urban" />

      <main className="p-2 md:h-[calc(100vh-1.9rem*2)] h-[calc(100vh-2.3rem)] w-full transition-all overflow-auto bg-gradient-to-bl from-black via-black/25 via-55% to-purple-800/75 flex flex-col items-center justify-center font-manrope">
        <p className="text-7xl font-black">404</p>
        <p className="text-3xl font-light">Not found</p>
      </main>
    </div>
  );
};

export default NotFound;

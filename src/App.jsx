import Routes from "./routes";
import "./index.css";
import Navbar from "./components/Navbar";
import { Blob } from "./components/Blob";
import CursorBlob from "./components/CursorBlob";

function App() {
  const count = Math.floor(Math.random() * 8) + 3;
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <div className="absolute inset-0 -z-10">
        <CursorBlob />
        {Array.from({ length: count }).map((_, index) => (
          <Blob/>
      ))}
      </div> */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 -z-5"></div>
      <div className="relative z-10 flex flex-col sm:flex-row min-h-screen sm:p-10 sm:gap-10">
        <Navbar />
        <Routes />
      </div>
    </div>
  );
}

export default App;

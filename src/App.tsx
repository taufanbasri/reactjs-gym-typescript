import { useState } from "react";
import Navbar from "./scenes/navbar";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import FileStructure from "./components/FileStructure";
import Maineditor from "./components/Maineditor";

function App() {
  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex-row flex text-black rounded-none bg-white">
      <FileStructure />
      <Maineditor />
    </div>
  );
}

export default App;

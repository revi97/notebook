import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import FileStructure from "./components/FileStructure";
import Maineditor from "./components/Maineditor";

function App() {
  return (
    <div className="flex-row flex text-black rounded-none coolors ">
      <FileStructure />
      <Maineditor />
    </div>
  );
}

export default App;

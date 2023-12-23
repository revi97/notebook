import Menubar from "./Menubar";

export default function Maineditor() {
  return (
    <div className="flex-col  min-h-full  min-w-8/10 mr-0 mb-0 pb-0  mainEditor">
      <Menubar className="min-w-full" />
      <hr />
      <div
        contentEditable
        className="md:text-start  rounded-none border-none  break-words min-w-full min-h-8/10 resize-none p-3 outline-none font-serif text-sl"
      ></div>
    </div>
  );
}

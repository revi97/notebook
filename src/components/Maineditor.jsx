import Menubar from "./Menubar";

export default function Maineditor() {
  return (
    <div className="flex-col  min-h-full  min-w-8/10 mr-0 mb-0 pb-0  ">
      <Menubar className="min-w-full" />
      <hr />
      <textarea
        name=""
        id=""
        className="md:text-start  rounded-none border-none text-black m-0  break-words min-w-full min-h-8/10 resize-none p-3 outline-none font-serif text-sl"
      ></textarea>
    </div>
  );
}

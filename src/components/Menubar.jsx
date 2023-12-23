export default function Menubar() {
  return (
    <div className="flex-row flex justify-between  p-3  justify-items-center">
      <div className="py-2  flex flex-row justify-between w-4/7">
        <button className=" bg-none hover:bg-slate-400 border-none ">
          <i className="ri-bold   bg-none"></i>
        </button>
        <button className="hover:bg-slate-400 border-none bg-none">
          <i className="ri-italic"></i>
        </button>
        <button className="hover:bg-slate-400 border-none bg-none">
          <i className="ri-h-1"></i>
        </button>
        <button className="hover:bg-slate-400 border-none bg-none">
          <i className="ri-h-2"></i>
        </button>
        <button className="hover:bg-slate-400 border-none bg-none">
          <i className="ri-code-block"></i>
        </button>
        <button className="hover:bg-slate-400 border-none bg-none">
          <i className="ri-double-quotes-l"></i>
        </button>
        <button className="hover:bg-slate-400 border-none bg-none">
          <i className="ri-double-quotes-r"></i>
        </button>
        <button className="hover:bg-slate-400 border-none bg-none">
          <i className="ri-list-unordered"></i>
        </button>
      </div>
    </div>
  );
}

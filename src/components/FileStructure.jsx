export default function FileStructure() {
  return (
    <div className="min-w-1/10 border-slate-700 border-r-2 h-dvh m-0 p-0 bottom-0 fileStructure">
      <div>
        <h1>File Explorer</h1>
        <div className="search-bar-container">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search"
            className="m-8 w-6/7 justify-start"
          />
        </div>
      </div>
    </div>
  );
}

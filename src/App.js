import { useEffect, useState } from "react";
import "./styles.css";
import { useDebounce } from "./useDebounce";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { debounceValue } = useDebounce(searchTerm, 1000);
  function callApi() {
    console.log("Search API is Called...");
  }
  useEffect(() => {
    if (debounceValue?.length > 0) callApi();
  }, [debounceValue]);
  return (
    <div className="App">
      <h1>Welcome to Searching.</h1>
      <label htmlFor="search">Search Here:</label>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        name="search"
        aria-label="Search Here"
      />
    </div>
  );
}

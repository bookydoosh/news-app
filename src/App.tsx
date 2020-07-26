import React,{useState} from 'react';
import SearchBar from "./components/searchBarComponent/searchBar"
import './App.css';
export interface IUserInput {
  SearchQuery: (string |null );
 
}
function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "bitcoin" });
    function SetUserInput(a: IUserInput) {
      setUserInput(a);    
    }
  return (
    <div className="App">
     <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
    </div>
  );
}

export default App;

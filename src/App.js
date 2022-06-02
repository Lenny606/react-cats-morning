import logo from './logo.svg';
import './App.css';
import { fetchData } from './Data/data';
import Cat from './Cat';
import {useState , useEffect} from "react"

// const array = fetchData()

// const [fact, setFact] = useState(fetchData())


// useEffect(()=>{
//   fetchData()
// },[])


function App() {
  return (
    <div className="App">
      <>
      <Cat fact={fact}/>
      </>
    </div>
  );
}

export default App;


console.log(fetchData())
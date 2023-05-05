import logo from './swlogo.png';
import './App.css';
import { useState, useEffect} from 'react';
import axios from "axios";
import Result from './components/Result/Result'



function App() {

  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/?page=1");
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log("API error:");
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="sw-logo" alt="Star Wars logo" />
      </header>
      <main>
        {data ? data.results.map(
          result => <Result data={result} />
        ) : '' }
      </main>
    </div>
  );
}

export default App;
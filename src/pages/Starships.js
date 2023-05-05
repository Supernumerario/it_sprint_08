import { useState, useEffect } from 'react';
import Base from "../components/Base/Base"
import axios from "axios";
import Result from '../components/Result/Result';



export default function Starships() {

  const [ data, setData ] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/?page=1");
        // Starships data doesn't have IDs, so we get them from their url
        const dataWithId = response.data.results.map ( starship => {
          const explodedUrl = starship.url.split('/');
          starship.id = explodedUrl[5];
          return starship;
        });
        console.log("Data with ID:");
        console.log(dataWithId);
        setData(response.data);
      } catch (error) {
        console.log("API error:");
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <Base pageTitle="Starships">
        <ul>
          { data ? data.results.map( result =>
            <Result data={result} key={result.id}/>
          ) : 'Loading data...' }
          { data ? '' : <span className="loader"></span> }
        </ul>
    </Base>
  );
}
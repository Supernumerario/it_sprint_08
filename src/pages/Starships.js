import { useState, useEffect } from 'react';
import Base from "../components/Base/Base";
import axios from "axios";
import Result from '../components/Result/Result';



export default function Starships() {

  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState(true);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ totalApiPages, setTotalApiPages ] = useState(1);



  useEffect(() => {
    function observerCallback (entries) {
      const first = entries[0];
      if (first.isIntersecting) {
        setCurrentPage((lastPage) => lastPage + 1);
      }
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(document.getElementById("intersection-observer-div"));
  }, []);



  useEffect(() => {
    // Avoid running on the first component render and after reaching the last page
    if (currentPage > 0 && currentPage <= totalApiPages ) {
      async function apiCall () {
        try {
          const response = await axios.get(`https://swapi.py4e.com/api/starships/?page=${currentPage}`);
          // Starships API data doesn't have IDs, so we get them from their url
          const dataWithId = response.data.results.map ( starship => {
            const explodedUrl = starship.url.split('/');
            starship.id = explodedUrl[5];
            return starship;
          });
          setData((previousData) => ( previousData ? [...previousData.concat(dataWithId)] : dataWithId ));
          setLoading(false);
          setTotalApiPages(Math.ceil(response.data.count/10));
        } catch (error) {
          console.log("API error:");
          console.log(error);
        }
      }
      apiCall ();
    }
  }, [currentPage]);



  function conditionalReturn (data) {
    if (loading) {
      return (
        <>
          <span>Loading data...</span>
          <span className="loader"></span>
        </>
      );
    } else {
      let results = data.map( result =>
        <Result data={result} key={result.id}/>
      );
      return (
        <>
          {results}
        </>
      );
    }
  }



  return (
    <Base pageTitle="Starships">
        <ul>
          {conditionalReturn(data)}
        </ul>
        <h1>Go</h1>
        <div id="intersection-observer-div">Observer DIV</div>
        <h1>Go</h1>
    </Base>
  );
}
import { useState, useEffect } from 'react';
import Header from "../components/Header/Header";
import axios from "axios";
import Result from '../components/Result/Result';
import styled from "styled-components";



// STYLED COMPONENTS
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  max-width: 1340px;
`;

const Title = styled.h1`
  grid-column: 2 / span 10;
  text-align: center;
  padding: 40px;
`;

const ContentUl = styled.ul`
  grid-column: 1 / span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: center;
  padding: 0 0 40px 0;
`;

const LoaderContainer = styled.div`
  grid-column: 2 / span 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
`;

const IoTrigger = styled.div`
  text-align: center;
  padding: 40px;
  color: #111;
`;



// STARSHIPS COMPONENT
export default function Starships() {

  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState(true);
  const [ currentPage, setCurrentPage ] = useState(0);
  // eslint-disable-next-line
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
      threshold: 0
    };
    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(document.getElementById("intersection-observer-div"));
  }, []);



  useEffect(() => {
    // Avoid running on the first component render and after reaching the last page
    if (currentPage > 0 && currentPage <= 4 ) {
      async function apiCall () {
        try {
          const response = await axios.get(`https://swapi.dev/api/starships/?page=${currentPage}`);
          // Starships API data doesn't have IDs, so we get them from their url
          console.log(response.data);
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
          <LoaderContainer>
            <div className="loader"></div>
          </LoaderContainer>
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
    <>
      <Header />
      <Main>
        <Title>Starships</Title>
        <ContentUl>
          {conditionalReturn(data)}
        </ContentUl>
      </Main>
      <IoTrigger id="intersection-observer-div">...</IoTrigger>
    </>
  );
}
import Header from "../components/Header/Header"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
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

const LoaderContainer = styled.div`
  grid-column: 2 / span 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
`;

const ImgContainer = styled.div`
  grid-column: 1 / span 6;
  height: 400px;
  padding: 16px;
`;

const StarshipImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border: 1px solid #333;
  border-radius: 8px;
`;

const StarshipInfoContainer = styled.div`
  grid-column: span 6;
  padding: 16px;
  margin-bottom: 64px;
`;

const StarshipInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 16px;
`;

const InfoEntry = styled.div`
  grid-column: span 3;
  margin-bottom: 24px;
`;

const InfoTag = styled.div`
  grid-column: span 3;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #aaa;
`;

const InfoContent = styled.div`
  grid-column: span 3;
  font-weight: 700;
`;





// DETAILS COMPONENT
export default function Details() {

  const { id } = useParams();
  const [ data, setData ] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/" + id);
        setData(response.data);
      } catch (error) {
        console.log("API error:");
        console.log(error);
      }
    }
    getData();
  }, [id]);

  function imgError (element) {
    element.target.src = "https://t3.ftcdn.net/jpg/02/81/85/38/360_F_281853832_y7KgelFJDp5kHQdvATktCUb6NMwkHUN6.jpg";
  }

  if (data) {
    return (
      <>
        <Header />
        <Main>
          <Title>{data.name}</Title>
          <ImgContainer>
            <StarshipImg
              src={"https://starwars-visualguide.com/assets/img/starships/" + id + ".jpg"}
              alt={data.name}
              onError={ element => imgError(element) }
            />
          </ImgContainer>
          <StarshipInfoContainer>
            <StarshipInfo>
              <InfoEntry>
                <InfoTag>Name</InfoTag>
                <InfoContent>{data.name}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Model</InfoTag>
                <InfoContent>{data.model}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Class</InfoTag>
                <InfoContent>{data.starship_class}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>MGLT</InfoTag>
                <InfoContent>{data.MGLT}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Crew</InfoTag>
                <InfoContent>{data.crew}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Passengers</InfoTag>
                <InfoContent>{data.passengers}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Cargo Capacity</InfoTag>
                <InfoContent>{data.cargo_capacity}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Length</InfoTag>
                <InfoContent>{data["length"]}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Consumables</InfoTag>
                <InfoContent>{data.consumables}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Cost in Credits</InfoTag>
                <InfoContent>{data.cost_in_credits}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Hyperdrive Rating</InfoTag>
                <InfoContent>{data.hyperdrive_rating}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Manufacturer</InfoTag>
                <InfoContent>{data.manufacturer}</InfoContent>
              </InfoEntry>
              <InfoEntry>
                <InfoTag>Max. Atmosphering Speed</InfoTag>
                <InfoContent>{data.max_atmosphering_speed}</InfoContent>
              </InfoEntry>
            </StarshipInfo>
          </StarshipInfoContainer>
        </Main>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Main>
          <Title>Loading Starship</Title>
          <LoaderContainer>
            <div className="loader"></div>
          </LoaderContainer>
        </Main>
      </>
    );
  }
}
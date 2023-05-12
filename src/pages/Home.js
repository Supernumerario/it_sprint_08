import Header from "../components/Header/Header"
import styled from "styled-components";
import storm from './storm.jpg';
import { useNavigate } from 'react-router-dom';



// STYLED COMPONENT
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  max-width: 1340px;
`;

const NavButton = styled.button`
  grid-column: 5 / span 4;
  width: 100%;
  height: 40px;
  margin: 64px 0 24px;
  border-radius: 32px;
  border: none;
  font-weight: 700;
  background-color: #fade4b;
  color: black;
  &:hover { cursor: pointer; background-color: #f9d41a; }
`;

const HeroImage = styled.img`
  width: 100%;
`;



// HOME COMPONENT
export default function Home() {

  const navigate = useNavigate();

  return (
    <>
      <Header/>
      <Main>
        <NavButton onClick={() => navigate(process.env.PUBLIC_URL + '/starships')}>GO TO STARSHIPS</NavButton>
      </Main>
      <HeroImage src={storm} alt="Stormtrooper" />
    </>
  );

}





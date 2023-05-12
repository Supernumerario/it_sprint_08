import Header from "../components/Header/Header"
import styled from "styled-components";



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

export default function Home() {

  return (
    <>
      <Header/>
      <Main>
        <Title>Home</Title>
      </Main>
    </>
  );

}





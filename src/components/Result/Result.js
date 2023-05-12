import Link from '../Link/Link';
import styled from "styled-components";



// STYLED COMPONENTS
const Starship = styled.li`
  grid-column: span 3;
  padding: 16px;
`;

const StarshipCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  text-align: left;
  min-height: 360px;
  font-weight: 700;
  position: relative;
`;

const ImgContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StarshipImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const StarshipData = styled.div`
  padding: 16px;
`;

const Model = styled.div`
  color: #aaa;
  font-weight: 400;
`;

const StyledLink = styled(Link) `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  &:hover { border: 2px solid #fff; }
  &:active { border: 1px solid #aaa; }
  box-sizing: border-box;
`;



// RESULT COMPONENT
export default function Result ({ data }) {

  function imgError (element) {
    element.target.src = "https://t3.ftcdn.net/jpg/02/81/85/38/360_F_281853832_y7KgelFJDp5kHQdvATktCUb6NMwkHUN6.jpg";
  }

  return (
    <Starship>
      <StarshipCard>
        <ImgContainer>
          <StarshipImg
            src={"https://starwars-visualguide.com/assets/img/starships/" + data.id + ".jpg"}
            alt={data.name}
            onError={ element => imgError(element) }
          />
        </ImgContainer>
        <StarshipData>
          <div>{data.name}</div>
          <Model>{data.model}</Model>
        </StarshipData>
        <StyledLink to={"/starships/" + data.id}></StyledLink>
      </StarshipCard>
    </Starship>
  );

}
import { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";



// STYLED COMPONENTS
const PilotsTitle = styled.h2`
	grid-column: 1 / span 12;
	padding: 0 16px;
`;

const PilotContainer = styled.div`
	grid-column: span 2;
	padding: 16px;
`;

const PilotContent = styled.div`
	background-color: #1a1a1a;
	border-radius: 8px;
`;

const ImgContainer = styled.div`
  height: 160px;
`;

const PilotImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const PilotData = styled.div`
	padding: 16px;
`;

const PilotDataTag = styled.div`
	font-size: 0.8em;
	text-transform: uppercase;
	color: #aaa;
`;

const PilotDataContent = styled.div`
	font-weight: 700;
`;



// DETAILS COMPONENT
export default function Pilots( {pilotsParams} ) {

	const [ pilotsData, setPilotsData ] = useState([]);
  
	useEffect(() => {

		if (pilotsParams.length !== 0) {
			async function getData() {
				const newPilots = pilotsParams.map ( async pilot => {
					try {
						const response = await axios.get(pilot);
						const explodedUrl = pilot.split('/');
						response.data.id = explodedUrl[5];
						return response.data;
					} catch (error) {
						console.log("API error:");
						console.log(error);
					}
				});
				const results = await Promise.all(newPilots);
				setPilotsData(results);
			}
			getData();
		}

	}, [pilotsParams]);

  function imgError (element) {
    element.target.src = "https://t3.ftcdn.net/jpg/02/81/85/38/360_F_281853832_y7KgelFJDp5kHQdvATktCUb6NMwkHUN6.jpg";
  }



	if (pilotsData.length !== 0) {
		return (
			<>
				<PilotsTitle>Pilots</PilotsTitle>
				{pilotsData.map(pilot => {
					return (
						<PilotContainer key={pilot.id}>
							<PilotContent>
								<ImgContainer>
									<PilotImg
										src={"https://starwars-visualguide.com/assets/img/characters/" + pilot.id + ".jpg"}
										alt={pilot.name}
										onError={ element => imgError(element) }
									/>
								</ImgContainer>
								<PilotData>
									<PilotDataTag>NAME</PilotDataTag>
									<PilotDataContent>{pilot.name}</PilotDataContent>
								</PilotData>
							</PilotContent>
						</PilotContainer>
					);
				})}
			</>
		);
	} else { return; }

}
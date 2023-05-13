import { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";



// STYLED COMPONENTS
const MoviesTitle = styled.h2`
	grid-column: 1 / span 12;
	padding: 0 16px;
`;

const MovieContainer = styled.div`
	grid-column: span 2;
	padding: 16px;
`;

const MovieContent = styled.div`
	background-color: #1a1a1a;
	border-radius: 8px;
`;

const ImgContainer = styled.div`
  height: 160px;
`;

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const MovieData = styled.div`
	padding: 16px;
	min-height: 80px;
`;

const MovieDataTag = styled.div`
	font-size: 0.8em;
	text-transform: uppercase;
	color: #aaa;
`;

const MovieDataContent = styled.div`
	font-weight: 700;
`;



// DETAILS COMPONENT
export default function Movies( {moviesParams} ) {

	const [ moviesData, setmoviesData ] = useState([]);
  
	useEffect(() => {

		if (moviesParams.length !== 0) {
			async function getData() {
				const newMovies = moviesParams.map ( async movie => {
					try {
						const response = await axios.get(movie);
						const explodedUrl = movie.split('/');
						response.data.id = explodedUrl[5];
						return response.data;
					} catch (error) {
						console.log("API error:");
						console.log(error);
					}
				});
				const results = await Promise.all(newMovies);
				setmoviesData(results);
			}
			getData();
		}

	}, [moviesParams]);

  function imgError (element) {
    element.target.src = "https://t3.ftcdn.net/jpg/02/81/85/38/360_F_281853832_y7KgelFJDp5kHQdvATktCUb6NMwkHUN6.jpg";
  }



	if (moviesData.length !== 0) {
		return (
			<>
				<MoviesTitle>Movies</MoviesTitle>
				{moviesData.map(movie => {
					return (
						<MovieContainer key={movie.id}>
							<MovieContent>
								<ImgContainer>
									<MovieImg
										src={"https://starwars-visualguide.com/assets/img/films/" + movie.id + ".jpg"}
										alt={movie.title}
										onError={ element => imgError(element) }
									/>
								</ImgContainer>
								<MovieData>
									<MovieDataTag>NAME</MovieDataTag>
									<MovieDataContent>{movie.title}</MovieDataContent>
								</MovieData>
							</MovieContent>
						</MovieContainer>
					);
				})}
			</>
		);
	} else { return; }

}
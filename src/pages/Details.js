import Base from "../components/Base/Base"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";



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
  }, []);

  if (data) {

    return (
      <Base pageTitle="Starships details">
        <img src={"https://starwars-visualguide.com/assets/img/starships/" + id + ".jpg"} className="sw-logo" alt="Star Wars logo" />
        <div>Name: {data.name}</div>
        <div>Model: {data.model}</div>

        <div>Starship Class: {data.starship_class}</div>
        <div>Starship ID: {id}</div>

        <div>MGLT: {data.MGLT}</div>
        <div>Crew: {data.crew}</div>
        <div>Passengers: {data.passengers}</div>
        <div>Cargo Capacity: {data.cargo_capacity}</div>
        <div>Length: {data["length"]}</div>
        <div>Consumables: {data.consumables}</div>
        <div>Cost in Credits: {data.cost_in_credits}</div>
        <div>Hyperdrive Rating: {data.hyperdrive_rating}</div>
        <div>Manufacturer: {data.manufacturer}</div>
        <div>Max. Atmosphering Speed: {data.max_atmosphering_speed}</div>
      </Base>
    );

  } else {

    return (
      <Base pageTitle="Starships details">
        Loading data...
        <span className="loader"></span>
      </Base>
    );

  }

}
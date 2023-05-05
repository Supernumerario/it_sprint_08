import Link from '../Link/Link';
import './Result.css';



export default function Result ({ data }) {

  return (
    <li>
      <div>Name: {data.name}</div>
      <div>Model: {data.model}</div>
      <Link to={"/starships/" + data.id}>See details</Link>
    </li>
  );

}
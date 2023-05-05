import Link from '../Link/Link';
import logo from '../../swlogo.png';



export default function Base(props) {

  return (
    <>
      <header>
        <img src={logo} className="sw-logo" alt="Star Wars logo" />
      </header>
      <main>
        <h1>{props.pageTitle}</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starships">Starships</Link></li>
        </ul>

        {props.children}

      </main>
    </>
  );

}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Starships from '../pages/Starships';
import Details from '../pages/Details';
import SignIn from '../pages/SignIn';
import LogIn from '../pages/LogIn';
import Error404 from '../pages/Error404';



export default function RoutesContent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL}>
          <Route path="" element={<Home />} />
          <Route path="starships/" element={<Starships />} />
          <Route path="starships/:id" element={<Details />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="login" element={<LogIn />} />
          <Route path="*" element={<Error404 />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}
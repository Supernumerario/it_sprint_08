import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Starships from '../pages/Starships';
import Details from '../pages/Details';
import SignIn from '../pages/SignIn';
import LogIn from '../pages/LogIn';
import Error404 from '../pages/Error404';
import { useState } from 'react';
import GuardedRoute from "./GuardedRoute";



export default function RoutesContent() {

  const[isAuthenticated, setIsAuthenticated] = useState(false);



  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL}>
          <Route path="" element={<Home />} />
          
          <Route exact path="/" element={<GuardedRoute auth={isAuthenticated}/>}>
            <Route exact path="starships/" element={<Starships />} />
          </Route>
          <Route exact path="/" element={<GuardedRoute auth={isAuthenticated}/>}>
            <Route exact path="starships/:id" element={<Details />} />
          </Route>

          <Route path="signin" element={<SignIn />} />
          <Route path="login" element={<LogIn setAuth={setIsAuthenticated} />} />
          <Route path="*" element={<Error404 />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  // import App from './App';
  import About from "./Components/About";
  import Header from "./Components/Header";
  import Home from "./Components/Home";
  import Error from "./Components/Error";
  import Facultry from "./Components/Facultry";
  import Student from "./Components/Student"
  import Academics from './Components/Academics';
  import Admissions from './Components/Admissions';
  import Contact from './Components/Contact';
  import Gallery from './Components/Gallery';
  import ComingSoon from './Components/ComingSoon';




  import { createBrowserRouter ,RouterProvider} from "react-router-dom";
  import { Outlet } from "react-router-dom";
import Footer from './Components/Footer';



  const AppLayout =()=>{
    return (
    <div className="app">

    <Header />
    <Outlet />
    <Footer/>

    </div>
  
    );
  };

  const appRouter =createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement:<Error/>,
        children:[
              {
                  path:"/",
                  element:<Home/>
              },
              {
                  path:"/student",
                  element:<Student/>
              },
              {
                path:"/facultry",
                element:<Facultry/>
              },
              {
                path:"/gallery",
                element:<Gallery/>
              },
              {
                  path:"/contact",
                  element:<Contact/>
              },
              {
                   path:"/academics",
                   element:<Academics/>
              },
              {
                   path:"/admissions",
                   element:<Admissions/>
              },
              {
                  path:"/about",
                  element:<About/>
               },
               {
                  path:"/coming-soon",
                  element:<ComingSoon/>
               }
          ]
        }])




  const root =ReactDOM.createRoot(document.getElementById("root"));
  root.render(< RouterProvider router={appRouter}/>);


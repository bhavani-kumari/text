import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
function App() {
  const AppRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
        path:"/",
        element:<Body/>,
        },
        {
          },
      ]
    }
  ]);
  return <RouterProvider router={AppRouter} />
}

export default App;

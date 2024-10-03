import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs';
import ServicesUs from './components/ServicesUs';
import ContactUs from './components/ContactUs';
import OurTeam from './components/OurTeam';
import OurFeatures from './components/OurFeatures';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/", // This is the root route
          element: <Body />,
        },
        {
          path: "About", 
          element: <AboutUs />,
        },
         {
          path: "Services", 
          element: <ServicesUs />,
        },
        {
          path: "ContactUs", 
          element: <ContactUs />,
        },
        {
          path: "OurFeatures", 
          element: <OurFeatures />,
        },
        {
          path: "OurTeam", 
          element: <OurTeam />,
        },

      ],
    },
  ]);

  return <RouterProvider router={AppRouter} />;
}

export default App;

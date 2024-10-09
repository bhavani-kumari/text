import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About/AboutUs';
import ServicesUs from './components/Services/ServicesUs';
import ContactUs from './components/Contact/ContactUs';
import OurTeam from './components/Team/OurTeam';
import OurFeatures from './components/Features/OurFeatures';
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
          path: "/about", 
          element: <AboutUs />,
        },
         {
          path: "/services", 
          element: <ServicesUs />,
        },
        {
          path: "/contactus", 
          element: <ContactUs />,
        },
        {
          path: "/ourfeatures", 
          element: <OurFeatures />,
        },
        {
          path: "/ourteam", 
          element: <OurTeam />,
        },

      ],
    },
  ]);

  return <RouterProvider router={AppRouter} />;
}

export default App;


import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home"
import Footer  from './components/footer/Footer';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Add from './pages/addGig/Add';
import Orders from './pages/orders/Orders'
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Mygigs from './pages/myGigs/Mygigs';
import "./app.scss"
function App() {

  const Layout = () =>{
    return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:
      [{
        path:'/',
        element:<Home/>
      },
      {
        path:'/gigs',
        element:<Gigs/>
      },
      {
        path:'/gig/:id',
        element:<Gig/>
      },
      {
        path:'/orders',
        element:<Orders/>
      },
      {
        path:'/myGigs',
        element:<Mygigs/>
      },
      {
        path:'/add',
        element:<Add/>
      },
      {
        path:'/message/:id',
        element:<Message/>
      },
      {
        path:'/messages',
        element:<Messages/>
      },
      ]
        // <div>
        //   <h1>Hello World</h1>
        //   <Link to="about">About Us</Link>
        // </div>
      
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  

  return (
    <>
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}
      <RouterProvider router={router} />
      
      {/* </BrowserRouter> */}
    </>
  )
}

export default App


import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
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
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime amet quas consectetur deleniti sit architecto dolorum aliquid illum inventore cum atque consequuntur enim neque at facere dolores assumenda voluptatum, voluptas impedit itaque. Delectus saepe accusamus ad beatae quasi assumenda voluptas architecto? Facilis ducimus pariatur beatae obcaecati nobis, voluptas commodi quas error praesentium animi impedit distinctio odio, a magni expedita nisi, ipsum aperiam optio quod velit reprehenderit excepturi accusamus. Doloribus omnis natus corrupti minima ducimus praesentium quis obcaecati eaque magnam, sapiente quaerat nihil sed numquam dolor eos blanditiis, reprehenderit fuga soluta laboriosam! Inventore, numquam aut facere, rerum amet quibusdam deleniti, aspernatur eaque laudantium expedita quas suscipit veritatis unde nisi omnis soluta. Soluta odit numquam, veritatis iusto rem voluptatibus explicabo minus nam quisquam, atque laboriosam. Maiores harum vero reiciendis, animi sunt sequi dolor impedit, eaque odio provident quas! Quas atque repellat delectus libero beatae voluptatibus inventore magnam dolorem, corrupti eos maiores doloribus rerum nihil quibusdam illum vel tenetur adipisci tempore incidunt consequuntur saepe nemo consequatur. Accusamus quaerat mollitia illum labore recusandae voluptate at dolorem accusantium neque natus cum atque, suscipit tenetur molestiae necessitatibus explicabo! Ipsam tempora labore, laborum dignissimos molestias neque corporis reiciendis a dolorum adipisci ea consequatur, aliquam optio accusantium maiores iure quas odit cum hic. Soluta laborum, quam consectetur dignissimos debitis minima omnis consequuntur maxime totam error delectus voluptatibus. Possimus corporis deserunt pariatur fugiat consequatur at, ratione ipsa minima impedit ab harum in. Error laudantium perspiciatis molestiae nihil, quam, facere enim quisquam id aperiam sequi suscipit ullam at aliquam est incidunt neque dicta debitis. Et consectetur culpa eos obcaecati corporis facilis. Consequatur aperiam nam dolores corporis, earum adipisci quod maxime iste? Neque error non quae quam aliquam est blanditiis! Reiciendis explicabo incidunt cum quae voluptate enim illum fugiat. Ipsa optio maiores minima porro soluta ratione explicabo laborum! Dignissimos, exercitationem alias voluptate illo, debitis, consequuntur eaque commodi fugiat reprehenderit nam aliquid natus veritatis iste quaerat ut nulla est doloribus neque temporibus maiores molestiae voluptas. Repellat, beatae fuga. Fugiat natus facere porro aliquid error non illo impedit ipsum! Consequuntur, tempora soluta voluptatem consequatur distinctio ullam fugiat enim repellendus itaque maxime, atque magni quae, ab nesciunt nihil perspiciatis aut blanditiis nam ad ducimus harum voluptatum qui doloremque. Doloribus officiis tenetur consectetur nam dolores voluptas consequuntur enim a repellat numquam nostrum dicta, ea sequi reiciendis ipsam, magni nulla nemo facere eius explicabo distinctio eum voluptatum, pariatur non! Excepturi quam laborum autem rem beatae, in nostrum quasi, eius libero ipsa nulla, magnam perferendis sit voluptates deleniti repellat. Sint, voluptatum corrupti. Id hic libero voluptate eius! Quam voluptate laborum inventore quod sint, delectus, eveniet est dolorum porro mollitia voluptatum ipsa! Doloremque veritatis quae officia nulla vitae incidunt voluptates, cupiditate aut atque minus molestias debitis sit labore exercitationem suscipit aliquid animi quaerat. Minus officia veritatis adipisci dolores eos facilis dolorem provident ratione laudantium eveniet fuga unde laborum nulla consectetur magnam cum non vel nihil quam dicta, ipsum at ab deserunt ducimus? Ipsam vel quisquam consectetur culpa iste quaerat maiores cum dolore, est mollitia, consequuntur repellat, necessitatibus et?</h1>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/gigs?cat=design">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/gigs?cat=animation">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/gigs?cat=writing">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/gigs?cat=ai">
              AI Services
            </Link>
            <Link className="link menuLink" to="/gigs?cat=marketing">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/gigs?cat=music">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/gigs?cat=web">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/gigs?cat=business">
              Business
            </Link>
            {/* <Link className="link menuLink" to="/">
              Lifestyle
            </Link> */}
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;




// import React, { useEffect, useState } from "react";
// import "./navbar.scss";
// import { useLocation } from "react-router-dom";
// import newRequest from "../../utils/newRequest";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const isActive = () => {
//     window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
//   };

//   const handleLogout = async () => {
//     try {
//       await newRequest.post("/auth/logout");
//       localStorage.setItem("currentUser", null);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", isActive);
//     return () => {
//       window.removeEventListener("scroll", isActive);
//     };
//   }, []);

//   // useEffect(() => {
//   //   console.log(open);
//   // }, [scrolled,open]);

//   const currUser = JSON.parse(localStorage.getItem("currentUser"));

//   const { location } = useLocation();

//   return (
//     <div className={scrolled ? "navbar active" : "navbar"}>
//       <div className="container">
//         {/* <Link to "/"> */}
//         <div className="logo">
//           <Link to="/" className="link">
//             <span className="text">fiverr</span>
//           </Link>
//           <span className="dot">.</span>
//         </div>
//         {/* </Link> */}
//         <div className="links">
//           <span>Fiverr Marketplace</span>
//           <span>Explore</span>
//           <span>English</span>

//           {!currUser?.isSeller && <span>Become a Seller</span>}
//           {/* <span>Sign in</span> */}
//           {currUser ? (
//             <div
//               className="user"
//               onClick={() => {
//                 console.log("clicked");
//                 setOpen((prev) => setOpen(!prev));
//                 // setOpen(!open)
//               }}
//             >
//               <img
//                 src={currUser.img || "/public/noavatar.jpg"}
//                 alt=""
//               />
//               <span>{currUser?.username}</span>
//               {open == true && (
//                 <div className="expand">
//                   <>
//                     {/* <Link className="link" to="/mygigs">
//                                         Gigs
//                                     </Link> */}
//                     {currUser?.isSeller && (
//                       <>
//                         <Link className="link" to="/mygigs">
//                           Gigs
//                         </Link>
//                         <Link className="link" to="/add">
//                           Add new gig
//                         </Link>
//                       </>
//                     )}

//                     <Link className="link" to="/orders">
//                       Orders
//                     </Link>
//                     <Link className="link" to="/messages">
//                       Messages
//                     </Link>
//                     <Link className="link" onClick={handleLogout}>
//                       Sign out
//                     </Link>
//                     {/* <Link className="link" to="/mygigs">
//                                         Gigs
//                                     </Link>
//                                     <Link className="link" to="/add">
//                                         Add New Gig
//                                     </Link> */}
//                   </>

//                   {/* <Link className='link' to='/orders'>Orders</Link>
//                             <Link className='link' to='/messages'>Messages</Link>
//                             <Link className='link' to='/'>Sign Out</Link> */}
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               <span>Sign in</span>
//               <Link className="link" to="/register">
//                 <button>Join</button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//       <hr className={scrolled ? "hr-scroll" : "hr"} />
//       <div className={scrolled ? "options" : "hidden"}>
//         <div className="menu">
//           <Link className="link menuLink" to="/">
//             Graphics & Design
//           </Link>
//           <Link className="link menuLink" to="/">
//             Video & Animation
//           </Link>
//           <Link className="link menuLink" to="/">
//             Writing & Translation
//           </Link>
//           <Link className="link menuLink" to="/">
//             AI Services
//           </Link>
//           <Link className="link menuLink" to="/">
//             Digital Marketing
//           </Link>
//           <Link className="link menuLink" to="/">
//             Music & Audio
//           </Link>
//           <Link className="link menuLink" to="/">
//             Programming & Tech
//           </Link>
//           <Link className="link menuLink" to="/">
//             Business
//           </Link>
//           <Link className="link menuLink" to="/">
//             Lifestyle
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

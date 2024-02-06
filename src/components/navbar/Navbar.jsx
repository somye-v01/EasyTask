import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [scrolled,setScrolled] = useState(false);
    const [open,setOpen] = useState(false);
    const isActive = () => {
        window.scrollY>1?setScrolled(true):setScrolled(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll",isActive);

        return ()=>{
             window.removeEventListener("scroll",isActive)
        }
    },[])

    const currUser = {
        id:1,
        username:"Anil",
        isSeller:true,
    }

    const {location} = useLocation();

  return (
    <div className={(scrolled )?'navbar active':"navbar"}>
            <div className='container'>
                {/* <Link to "/"> */}
                <div className='logo'>
                    <Link to = "/" className='link'>
                    <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                {/* </Link> */}
                <div className='links'>
                    <span>Fiverr Marketplace</span>
                    <span>Explore</span>
                    <span>English</span>
                    
                    {!currUser?.isSeller && <span>Become a Seller</span>}
                    {/* <span>Sign in</span> */}
                    {currUser ? (
                        <div className='user' onClick={()=>{
                            setOpen(prev=>setOpen(!prev))
                            // setOpen(!open)
                        }}>
                            <img src="https://imgs.search.brave.com/Q8AkIdA-GfI00-jf8f-t44jmlpCYCB_3sXIEdX4HuOE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0" alt="" />
                            <span>{currUser?.username}</span>
                            {(open==true) && <div className='expand'>{(
                                <>
                                    {/* <Link className="link" to="/mygigs">
                                        Gigs
                                    </Link> */}
                                    {currUser?.isSeller && (
                                    <>
                                    <Link  className='link' to = "/mygigs">Gigs</Link>
                                    <Link className='link' to = "/add">Add new gig</Link>
                                    </>
                                    )}
                                    
                                    <Link className='link' to = "/orders">Orders</Link>
                                    <Link className='link' to = "/messages">Messages</Link>
                                    <Link className='link' to = "/">Sign out</Link>
                                    {/* <Link className="link" to="/mygigs">
                                        Gigs
                                    </Link>
                                    <Link className="link" to="/add">
                                        Add New Gig
                                    </Link> */}
                                </>
                            )}
                            {/* <Link className='link' to='/orders'>Orders</Link>
                            <Link className='link' to='/messages'>Messages</Link>
                            <Link className='link' to='/'>Sign Out</Link> */}
                            </div>}
                        </div>
                    ):(<>
                        <span>Sign in</span>
                        <Link className="link" to="/register">
                          <button>Join</button>
                        </Link>
                      </>)}
                </div>
            </div>
            <hr className={(scrolled)?'hr-scroll':'hr'}/>
            <div className={(scrolled)?'options':"hidden"}>
            <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
            </div>
        </div>
  )
}

export default Navbar
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, memo, useEffect } from "react";
import { ContextData } from "../store/context";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = memo(() => {
    const { isLoggin , role} = useContext(ContextData); 
    useEffect(() =>{

    },[isLoggin, role])

    
    return (
      <>
      {!isLoggin && <nav className=" flex items-center p-2 nav-header-no-responsive">
        <header className=" flex w-full h-16 justify-between items-center pl-2 pr-2 ">
          <div className="cursor-pointer">logo</div>
          <div className="flex items-center ">
            <ul className="items-center gap-4 flex mb-0">
              <li className="button"><Link className="no-underline text-stone-900 cursor-pointer hover:text-stone-50 hover:bg-stone-600 rounded p-2" as={Link} to="/registrati">Iscriviti</Link></li>
              
            </ul>
          </div>
        </header>
      </nav>}
      {isLoggin && <nav className="nav-header-responsive">
        <header >
          
            <ul className="ulMenu">
              <li><Link  as={Link} to="/privato/home-user"><FontAwesomeIcon icon="fa-solid fa-house-user" /></Link></li>
              
              <li><Link  as={Link} to="/privato/pagelle"><FontAwesomeIcon icon="fa-solid fa-clipboard-list" /></Link></li>
              <li><Link  as={Link} to="/privato/prossimi-appuntamenti"><FontAwesomeIcon icon="fa-solid fa-calendar-check" /></Link></li>
              {role == 'boss' && <li><Link  as={Link} to="/boss/home-boss"><FontAwesomeIcon icon="fa-solid fa-user-tie" /></Link></li>}
              {/* <li><Link  as={Link} to="/login">Login</Link></li>
              <li><Link  as={Link} to="/logout">logut</Link></li> */}
              <li><Link  as={Link} to="/privato/profilo"><FontAwesomeIcon icon="fa-solid fa-user" /></Link></li>
            </ul>
          
        </header>
      </nav>}
      
      </>
        
    );
});

export default Header;

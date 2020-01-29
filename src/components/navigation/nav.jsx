import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
               <a className="navbar-brand" href="#">Navbar</a>
               <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                   aria-expanded="false" aria-label="Toggle navigation"></button>
               <div className="collapse navbar-collapse" id="collapsibleNavId">
                   <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                       <li className="nav-item active">
                          <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                       </li>
                    </ul>
                    <ul className="nav-inline navbar-nav">
                    <li className="nav-item">
                          <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/signin">Login</Link>
                       </li>
                    </ul>
                 
               </div>
           </nav> 
        )
    }
};

export default Nav;
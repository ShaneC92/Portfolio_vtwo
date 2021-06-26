import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
   return (
      <nav>
         <Link to='/'>About Me</Link>
         <Link to='/projects'>Projects</Link>
         <Link to='/contactme'><i>Contact Me</i></Link>
      </nav>
   )
};

export default Nav;
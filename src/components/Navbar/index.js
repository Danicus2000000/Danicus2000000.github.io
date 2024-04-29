import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <div class="logo">
                        <NavLink to="/"><img src="../logo192.png" alt="Home Icon"/></NavLink>
                    </div>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="mailto:testertestington940@gmail.com" activeStyle>
                        Email me
                    </NavLink>
                    <NavLink to="https://thelanbeforetimes.wordpress.com/" activeStyle>
                        Blog
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
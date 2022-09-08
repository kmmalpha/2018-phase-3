import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/Alex" activeStyle>
                        Alexandra Township
                    </NavLink>
                    <NavLink to="/ProbsAndRecs" activeStyle>
                        Problems And Recommendations
                    </NavLink>
                    <NavLink to="/ClaimsAndArgs" activeStyle>
                        Claims and Arguments
                    </NavLink>
                    <NavLink to="/Sites" activeStyle>
                        Sites
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;
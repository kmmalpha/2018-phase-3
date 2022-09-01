import React from "react";
import './style.css';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <h2>Contact information: </h2>
                    <h3>Social media</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    <h3>Phone numbers:</h3>
                        <ul>
                            <li>Cell number: +27 12 345 6789</li>
                            <li>Work number: +27 98 765 4321</li>
                        </ul>
                <b>Copyright &copy; - 2018 Keith Mdu Mwelase</b>
            </footer>
        </div>
    )
}

export default Footer;
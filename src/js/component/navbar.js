import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-5">
			<ul className="navbar-nav flex-row">
				<li className="nav-item ms-4"><Link className="nav-link text-white" to="../">Contacts</Link></li>
				<li className="nav-item ms-4"><Link className="nav-link text-white" to="../form">Formulario</Link></li>
			</ul>
		</nav>
	);
};

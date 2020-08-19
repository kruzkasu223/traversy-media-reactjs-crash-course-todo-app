import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>ReactJS ToDo App</h1>
			<Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
		</header>
	)
}

const linkStyle = {
	color: "#fff"
}

const headerStyle = {
	background: "#333",
	color: "#fff",
	textAlign: "center",
	padding: ".5rem",
}

export default Header;
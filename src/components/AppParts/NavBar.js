import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
	return (
		<header>
			<div className="logo">
				<Link to="/">
					<img src="your-logo.png" alt="Gaea Traverser" />
				</Link>
			</div>

			<div className="gaea-nav-container">
				<Link to="/">
				<h2 className="gaea-nav-text">Gaea Traverser</h2>
				</Link>
			</div>

			<nav>
				<ul className="navBar">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/lodging">Lodging</Link>
					</li>
					<li>
						<Link to="/events">Events</Link>
					</li>
					<li>
						<Link to="/restaurants">Restaurants</Link>
					</li>
					<li>
						<Link to="/weather">Weather</Link>
					</li>
					<li>
						<Link to="/maps">Maps</Link>
					</li>
					{/* <li>
						<Link to="/getweather">Get Weather</Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;

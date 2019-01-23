import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './header.css';

export default function Header(props) {
	return (
		<div>
		<h1>TourneyTool</h1>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/participants">Participants</Link></li>
					<li><Link to="/hosts">Hosts</Link></li>
				</ul>
			</nav>
		</div>
	)
}
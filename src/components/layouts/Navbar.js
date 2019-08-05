import React, { Component} from 'react';
import {Link} from 'react-router-dom'
class Navbar extends Component {
	render(){
		return (
			<nav className="navbar navbar-expand-md navbar-light bg-white sticky-top" data-spy="affix" data-offset-top="500">
			 	<div className="container">
					<Link className='navbar-brand' to='/'>HOME</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarToggler">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item">
								<a className="nav-link" href="#">JavaScript</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Web Development</a>
							</li>               
							<li className="nav-item">
								<a className="nav-link" href="#">PHP</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">PYTHON</a>
							</li> 
							<li className="nav-item">
								<a className="nav-link" href="#">PYTHON</a>
							</li> 
							<li className="nav-item">
								<a className="nav-link" href="#">PYTHON</a>
							</li>               
							<li className="nav-item">
								<a className="nav-link" href="#">PYTHON</a>
							</li> 
							<li className="nav-item">
								<a className="nav-link" href="#">PYTHON</a>
							</li> 
							<li className="nav-item">
								<a className="nav-link" href="#">PYTHON</a>
							</li> 
							<li className="nav-item">
								<a className="nav-link" href="#">PYTHON</a>
							</li> 
							<li className="nav-item">
								<a className="nav-link" href="#">PYTHON</a>
							</li> 
							
							<li className="nav-item">
								<Link className='nav-link' to='/category'>MORE...</Link>
							</li>
						</ul>
					</div>
			    </div>
		    </nav>
		);
	}
}

export default Navbar
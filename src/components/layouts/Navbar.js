import React, { Component} from 'react';

class Navbar extends Component {
	render(){
		return (
			<nav className="navbar navbar-expand-md navbar-light bg-white sticky-top" data-spy="affix" data-offset-top="500">
			 	<div className="container">
					<a className="navbar-brand" href="#">HOME</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarToggler">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item">
								<a className="nav-link" href="#">CATEGORY 1</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">CATEGORY 2</a>
							</li>               
							<li className="nav-item">
								<a className="nav-link" href="#">CATEGORY 3</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">CATEGORY 4</a>
							</li>               
							<li className="nav-item">
								<a className="nav-link" href="#">MORE...</a>
							</li>
						</ul>
					</div>
			    </div>
		    </nav>
		);
	}
}

export default Navbar
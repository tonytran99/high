import React, { Component } from 'react';
import logo from '../../images/logo_high_black.png';
import {Link} from 'react-router-dom'
class BannerHeader extends Component {
	render(){
		return(
			<div className="banner-header">
				<div className="container">
					<div className="navbar-brand">
						<img src={logo} width="122px"/>
					</div>
					<div className="right-banner">
						<div className="notification">
							<i className="fa fa-bell"></i>
						</div>
						<div className="search-form">
							<form className="form-inline" action="">
							    <input className="form-control mr-sm-2" type="text" placeholder="Search High ..."></input>
							 </form>
							 <i className="fa fa-search"></i>
						</div>
						<div className="login">
							<Link to='/signin'>Sign In</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BannerHeader;
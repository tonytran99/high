import React, { Component } from 'react';
import logo from '../../images/logo_high_black.png';
import { Link } from 'react-router-dom';
import IMG_Profile from '../../images/img-profile.png'

class BannerHeader extends Component {
	handleClick = () =>{
		this.props.clickToggle();
	}
	render() {
		return (
			<div className="banner-header">
				<div className="container">
					<div className="navbar-brand">
						<img src={logo} width="122px" />
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
							<img onClick={this.handleClick} className='profile-img' src={IMG_Profile} alt='profile-img'/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BannerHeader;
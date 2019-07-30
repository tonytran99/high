import React, { Component } from 'react';
import PopularPost from './RightSidebar/PopularPost';
import Footer from './RightSidebar/Footer';
class RightSidebar extends Component {
	render(){
		return (
			<div className="right-side">
				<PopularPost/>
				<Footer/>						
			</div>
		);
	}
}


export default RightSidebar;
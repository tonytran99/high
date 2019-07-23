import React, { Component } from 'react';
import BannerHeader from '../layouts/BannerHeader';
import Navbar from '../layouts/Navbar';
import RightSidebar from '../layouts/RightSidebar';
import CategoryPostPage from '../layouts/CategoryPostPage';
class Category extends Component {
	render() {
		return (
			<div className="index">
				<BannerHeader/>
				<Navbar/>
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">
								<CategoryPostPage/>
							</div>
							<div className="col-lg-4">
								<RightSidebar/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Category;
import React, { Component } from 'react';
import BannerHeader from '../layouts/BannerHeader';
import Navbar from '../layouts/Navbar';
import Error404Content from '../layouts/Error404Content';
import RightSidebar from '../layouts/RightSidebar';
import NewPost from '../layouts/NewPost';
import RecommendPost from '../layouts/RecommendPost';
class Error404 extends Component {
	render() {
		return (
			<div className="index">
				<BannerHeader/>
				<Navbar/>
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">
								<Error404Content/>
								<NewPost/>
								<RecommendPost/>
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

export default Error404;
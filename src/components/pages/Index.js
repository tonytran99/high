import React, { Component } from 'react';
import BannerHeader from '../layouts/BannerHeader';
import Navbar from '../layouts/Navbar';
import Headline from '../layouts/Headline';
import RightSidebar from '../layouts/RightSidebar';
import NewPost from '../layouts/NewPost';
import RecommendPost from '../layouts/RecommendPost';
import CategoryPost from '../layouts/CategoryPost';
class Index extends Component {
	render() {
		return (
			<div className="index">
				<BannerHeader/>
				<Navbar/>
				<Headline/>
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">
								<NewPost/>
								<RecommendPost/>
								<CategoryPost/>
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

export default Index;
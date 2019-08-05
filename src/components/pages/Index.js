import React, { Component } from 'react';
import BannerHeader from '../layouts/BannerHeader';
import Navbar from '../layouts/Navbar';
import Headline from '../layouts/Headline';
import RightSidebar from '../layouts/RightSidebar';
import NewPost from '../layouts/NewPost';
import RecommendPost from '../layouts/RecommendPost';
import ToggleForm from '../layouts/ToggleFormUnderLogin'

class Index extends Component {
	state = {
		isDisplayForm : false
	}
	toggleForm = () =>{
		this.setState({
			isDisplayForm : !this.state.isDisplayForm
		})
	}
	render() {
		let formELm = this.state.isDisplayForm ? <ToggleForm/> : '';
		return (
			<div className="index">
				<BannerHeader clickToggle={this.toggleForm}/>
				<Navbar/>
				{formELm}
				<Headline/>
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">
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

export default Index;
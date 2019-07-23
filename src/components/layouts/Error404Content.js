import React, { Component } from 'react'; 

class Error404Content extends Component { 
	render(){
		return (
			<div class="error-404">
				<div class="error-banner">
					<h1>Error <span>404</span></h1>
					<p>Sorry! Page not found</p>
				</div>
				<div class="go-to-homepage">
					<button class="btn btn-primary"><a href="">Go To HomePage</a></button>
				</div>
			</div>
		); 
	}
} 

export default Error404Content;
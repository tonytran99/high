import React, { Component } from 'react'; 
import StreamPostFirst from './Headline/StreamPostFirst';
import RelatedStreamPost from './Headline/RelatedStreamPost';
import StreamPostSecond from './Headline/StreamPostSecond';

class Headline extends Component {
	render(){
		return (
			<div class="headline">
				<div class="container">
					<div class="row">
			            <div class="col-xl-4 col-md-6">
			            	<StreamPostFirst/>
			            </div>
			            <div class="col-xl-4 col-md-6">
                             <RelatedStreamPost/> 
			            </div>
			            <div class="col-xl-4">
							<StreamPostSecond/>
			            </div>			
			        </div>
			         <div class='see-more'>
				        SEE MORE >
				    </div>
				    <div class='divider'></div>
				</div>
			</div>
		);
	}
}

export default Headline;
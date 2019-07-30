import React, { Component } from 'react'; 
import StreamPostFirst from './Headline/StreamPostFirst';
import RelatedStreamPost from './Headline/RelatedStreamPost';
import StreamPostSecond from './Headline/StreamPostSecond';

class Headline extends Component {
	render(){
		return (
			<div className="headline">
				<div className="container">
					<div className="row">
			            <div className="col-xl-4 col-md-6">
			            	<StreamPostFirst/>
			            </div>
			            <div className="col-xl-4 col-md-6">
                             <RelatedStreamPost/> 
			            </div>
			            <div className="col-xl-4">
							<StreamPostSecond/>
			            </div>			
			        </div>
			         <div className='see-more'>
				        SEE MORE >
				    </div>
				    <div className='divider'></div>
				</div>
			</div>
		);
	}
}

export default Headline;
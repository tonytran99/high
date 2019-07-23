import React, { Component } from 'react';

class StreamPostFirst extends Component {
	render(){
		return (
	        <article className='stream-post-first'>
                <div className='stream-post'>
                    <a href='https://google.com'>
                        <img src='upload/blog/1_SsJrBbE_DEffjH3J7XprcQ.gif' />
                    </a>
                    <div className='stream-post-content'>
                        <div className='stream-post-title'>
                            <a href="">
                                <h1>
                                    The Dot-Com Don: Meet the Domain Prospector Turning Strays URLs into Real Businesses
                                </h1>                                  	
                            </a>
                        </div>
                        <div className='stream-post-summary'>
                            <p>
                                Most entrepreneurs acquire domains to fit their
                                businesses. Peter Askew does the opposite.
                            </p>
                        </div>
                        <div className='stream-post-author'>
                            <span>Caitlin Dewey in OneZero</span>
                        </div>
                    </div>
                </div>
            </article>
		);
	}
}

export default StreamPostFirst
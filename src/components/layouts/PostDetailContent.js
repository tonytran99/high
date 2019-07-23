import React, { Component } from 'react'; 

class PostDetailContent extends Component { 
	render(){
		return (
			<div className="post-detail-content">
				<div className="post-detail">
					<div className="post-share">
						<ul className="list-social">
							<li className="facebook-share"><a href=""><i className="fa fa-facebook"></i></a></li>
							<li className="twitter-share"><a href=""><i className="fa fa-twitter"></i></a></li>
						</ul>
					</div>
					<div className="post-category ">
						<span>HIGH / Javascript</span>
					</div>
					<div className="post-title">
						<h1>He Survived, But I Still Grieve</h1>
					</div>
					<div className="post-tags">
						<ul className="post-tags">
							<li className="post-author">
								<i className="fa fa-user"></i> &nbsp;by
								<a href="">
									<span>Tony Tran</span>
									<img src="upload/blog/img-user.jpeg"/>
								</a>
							</li>
							<li className="post-count-comment"> 
								<i className="fa fa-comment"></i> &nbsp;	
								<span>20 comments</span>
							</li>
							<li className="post-count-view"><i className="fa fa-eye"></i>&nbsp;	<span>872 Views</span></li>
						</ul>							
					</div>
					<div className="post-content">
						Washington (CNN)Democrats are pinning their last, best hopes of proving that President Donald Trump committed impeachable crimes on former special counsel Robert Mueller who is set to reluctantly serve as a star witness in Wednesday's televised spectacle.

						Mueller's date before two back-to-back House committees represents Democrats' most powerful weapon in a war for public perception over Russia that it has been losing to Trump's bruising PR campaign.
						It is also shaping up as a risk for Democrats if the taciturn Mueller does not provide explosive testimony that could deal a blow to the President. The hearing seems just as likely to increase pressure from liberals on an unwilling House Speaker Nancy Pelosi to initiate impeachment hearings as it is to deflate Democrats' effort to severely damage Trump before the 2020 election.
						&#39;Very substantial evidence&#39; Trump is &#39;guilty of high crimes and misdemeanors,&#39; House Judiciary Chair says 
						'Very substantial evidence' Trump is 'guilty of high crimes and misdemeanors,' House Judiciary Chair says
						The bitter legacy of the 2016 campaign and allegations that Trump cooperated with Russia's election meddling effort and obstructed justice to cover it up have cast a shadow over the President's entire White House term and led to his mantra "No collusion."
						But Mueller's nuanced report, a decision to avoid a prosecutorial recommendation and an aggressive administration effort to defuse some of his most damaging findings neutered the impact of the report he published in April.
						Democratic House Judiciary Committee Chairman Jerry Nadler on Sunday argued that there was "very substantial evidence" the President was guilty of "high crimes and misdemeanors" -- the Constitutional standard for impeachment.
						"We have to ... let Mueller present those facts to the American people, and then see where we go from there, because the administration must be held accountable," Nadler said on "Fox News Sunday."
						A CNN poll last month found that 76% of Democrats back the idea of impeaching Trump. But 54% of Americans overall oppose the idea.
						Trump, who has claimed he will not watch the testimony, tweeted simply on Sunday: "Presidential Harassment!"
						The hearings are just the latest blockbuster political extravaganza during the turbulent and surreal Trump era and come at a politically sensitive moment. The 2020 campaign is gathering pace and the President is stoking yet another raging controversy set off by his racist tweets targeting four minority Democratic members of Congress -- part of a strategy of tearing at societal divides for his own political advantage.
					</div>
					<div className="post-tag">
						<h1>TAGS</h1>
						<ul className="tags-list">
							<li><a href="">CSS</a></li>
							<li><a href="">HTML</a></li>
							<li><a href="">PHP</a></li>
						</ul>
					</div>
				</div>
				
				<div className="post-comment">
					Comment Box
				</div>
			</div>

		

		); 
	}
} 

export default PostDetailContent; 
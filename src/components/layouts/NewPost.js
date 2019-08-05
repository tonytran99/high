import React, { Component } from 'react';
import NewSinglePost from '../layouts/SinglePost/NewSinglePost'
import {connect} from 'react-redux'
import { fetchPosts } from '../../store/action/postAction';

class NewPost extends Component {
    componentDidMount () {
        this.props.getPosts();
    }

	render() {
        const {posts,loading} = this.props;
        const ps = posts && posts.filter(post => post.categories.length > 0);
        if(loading){
            console.log('loading ....')
            return (
                <div>
                    Loading ...
                </div>
            )
        }else{
            return (
                <div className='post-list'>
                    <div className="list-tittle">
                        <h1>NEW POST</h1>
                    </div>
    
                    <div className='divider'></div>		                
                    {/* New Single Post */}
                    {
                        ps && ps.map((post) => {
                            return (
                                <NewSinglePost post={post}/>
                            )
                        })   
                    }
                </div>	
            );
        }
		
	}
}

const mapDispatchToProps = { getPosts: fetchPosts }
const mapStateToProps = (state) => ({posts : state.post.posts,loading : state.post.loading})
export default connect(mapStateToProps,mapDispatchToProps)(NewPost)
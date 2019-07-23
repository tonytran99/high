import React, { Component } from 'react'; 
import Index from './components/pages/Index';
import Error404 from './components/pages/Error404';
import Category from './components/pages/Category';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import PostDetail from './components/pages/PostDetail';
import Tag from './components/pages/Tag';
import Register from './components/pages/Register';
import Search from './components/pages/Search';

import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom'


class App extends Component { 
	render(){
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Index} />
						<Route path="/about" component={About} />
						<Route path="/register" component={Register} />
						<Route path="/contact" component={Contact} />
						<Route path="/search" component={Search} />
						<Route path="/tag" component={Tag} />
						<Route path="/category" component={Category} />
						<Route path="/postdetail" component={PostDetail} />
						<Route path="/*" component={Error404} />
					</Switch>
				</div>
			</Router>
		); 
	}
} 

export default App;
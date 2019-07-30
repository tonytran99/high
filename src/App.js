import React, { Component } from 'react'; 
import Index from './components/pages/Index';
import Error404 from './components/pages/Error404';
import Category from './components/pages/Category';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import PostDetail from './components/pages/PostDetail';
import Tag from './components/pages/Tag';
import Search from './components/pages/Search';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'

import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom'


class App extends Component { 
	render(){
		return (
			<BrowserRouter>
				
					<Switch>
						<Route exact path="/" component={Index} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/search" component={Search} />
						<Route path="/tag" component={Tag} />
						<Route path="/category" component={Category} />
						<Route path="/postdetail" component={PostDetail} />
						<Route path='/signin' component={SignIn}/>
						<Route path='/signup' component={SignUp}/>
						<Route path="/*" component={Error404} />
					</Switch>
				
			</BrowserRouter>
		); 
	}
} 

export default App;
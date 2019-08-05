import React, { Component } from 'react'; 
import Index from './components/pages/Index';
import PostDetail from './components/pages/PostDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'
import Categories from './components/layouts/Category/Categories'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'


class App extends Component { 
	render(){
		return (
			<BrowserRouter>			
					<Switch>
						<Route exact path="/" component={Index} />
						<Route path="/postdetail" component={PostDetail} />
						<Route path='/signin' component={SignIn}/>
						<Route path='/signup' component={SignUp}/>
						<Route path='/category' component={Categories}/>
					</Switch>
			</BrowserRouter>
		); 
	}
} 

export default App;
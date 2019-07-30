import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email : '',
        password : ''
    }
    handleChange = (e) => {
        this.setState({
           [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.checkValidInput(this.state.email,this.state.password)){
            console.log(this.state)
        }
    }
    checkValidInput = (email,password) => {
        if(email === '' || password === ''){
            return false;
        }
        return true;
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className="card">
                    <article className="card-body">
                        <Link to='/signup'><div className="float-right btn btn-outline-secondary">Sign up</div></Link>
                        <h4 className="card-title mb-4 mt-1">Sign in</h4>
                        <p>
                            <a href="" className="btn btn-block btn-outline-info"> <i className="fab fa-twitter"></i>   Login via Twitter</a>
                            <a href="" className="btn btn-block btn-outline-primary"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
                        </p>
                        <hr />
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input onChange={this.handleChange} id='email' className="form-control" placeholder="Email" type="email" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} id='password' className="form-control" placeholder='Password' type="password" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-secondary btn-block">Sign In</button>
                                    </div>
                                </div>
                                <div className="col-md-6 text-right">
                                    <a className="small" href="#">Forgot password?</a>
                                </div>
                            </div>
                        </form>
                    </article>
                </div>
            </div>

        )
    }
}

export default SignIn
import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email : '',
        password : '',
        firstname : '',
        lastname: ''
    }
    handleChange = (e) => {
        this.setState({
           [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.checkValidInput(this.state.email,this.state.password,this.state.password.lastname,this.state.firstname)){
            console.log(this.state)
        }
    }
    checkValidInput = (email,password,lastname,firstname) => {
        if(email === '' || password === '' || lastname === '' || firstname === ''){
            return false;
        }
        return true;
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className="card">
                    <article className="card-body">
                        <h4 className="card-title mb-4 mt-1">Sign Up</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input onChange={this.handleChange} id='email' className="form-control" placeholder="Email" type="email" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} id='password' className="form-control" placeholder='Password' type="password" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} id='lastname' className="form-control" placeholder='First Name' type="text" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} id='firstname' className="form-control" placeholder='Last Name' type="text" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-secondary btn-block">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </article>
                </div>
            </div>

        )
    }
}

export default SignUp
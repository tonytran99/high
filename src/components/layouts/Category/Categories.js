import React,{Component} from 'react'
import BannerHeader from '../BannerHeader'
import NavBar from '../Navbar'
import {Link} from 'react-router-dom'
import ToggleForm from '../ToggleFormUnderLogin'

class Categories extends Component {
    state = {
		isDisplayForm : false
	}
	toggleForm = () =>{
		this.setState({
			isDisplayForm : !this.state.isDisplayForm
		})
    }
    render(){
        let formElm = this.state.isDisplayForm ? <ToggleForm/> : '';
        return (

            <div className='Category-page'>
                <BannerHeader clickToggle={this.toggleForm}/>
                {formElm}
                <div className='container mt-5'>
                    <div className='row row-cate justify-content-between mt-4'>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"><Link to='/javacript'>JavaScript</Link></h4>
                            </div>
                        </div>
                        
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">WEB</h4>
                            </div>
                        </div>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">PHP</h4>
                            </div>
                        </div>
                    </div>
                    <div className='row row-cate justify-content-between mt-4'>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">PYTHON</h4>
                            </div>
                        </div>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                    </div>
                    <div className='row row-cate justify-content-between mt-4'>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                    </div>
                    <div className='row row-cate justify-content-between mt-4'>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                    </div>
                    <div className='row row-cate justify-content-between mt-4'>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                        <div class="card card-category col-md-3 col-sm-4 col-3">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
        )
    }
    
}

export default Categories
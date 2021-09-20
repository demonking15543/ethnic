import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user:{
                email:"",
                username:"",
                password:"",
                name:{
                    firstname:"",
                    lastname:""
                },
                address:{
                    city:"",
                    street:"",
                    number:"",
                    zipcode:"",
                    geoloaction:{
                        lat: "",
                        long:""
                    }
                },
                phone: ""
            },
            formsubmitted:false,        
        }
    }
    


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <input type="email" value={email} name="email" onChange={(e) => { this.inputChange(e)} } className="form-control" placeholder="User email" />
                        { submitted && this.state.errors.user.email.length > 0 &&  <span className='error'>{this.state.errors.user.email}</span>}

                    </div>
                    <div className="col-4">
                    <input type="text" value={username} name="username" onChange={(e) => { this.inputChange(e)} } className="form-control" placeholder="Username" />
                        { submitted && this.state.errors.user.username.length > 0 &&  <span className='error'>{this.state.errors.user.username}</span>}

                    </div>
                    <div className="col-4">
                    <input type="password" value={password} name="password" onChange={(e) => { this.inputChange(e)} } className="form-control" placeholder="Password" />
                        { submitted && this.state.errors.user.password.length > 0 &&  <span className='error'>{this.state.errors.user.password}</span>}

                    </div>

                </div>


                
            </div>
        )
    }
}

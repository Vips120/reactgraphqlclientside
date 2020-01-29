import React, { Component } from "react";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
class Signin extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({ autoForceUpdate: this });
        this.state = {
            firstname: "",
            lastname: "",
           mobileno:"",
            UserLogin: {
                EmailId: "",
                Password: ""
            }
        };
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            let data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                mobileno: this.state.mobileno,
                UserLogin: {
                    EmailId: this.state.UserLogin.EmailId,
                    Password: this.state.UserLogin.Password
                }
            };
            console.log(data);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
      
    };
    changeInput = (e) => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    };
    changeEmail = (e) => {
        let a = Object.assign({}, this.state.UserLogin);
        a.EmailId = e.target.value;
        this.setState({ UserLogin: a });
    };
    changePassword = (e) => {
        let b = Object.assign({}, this.state.UserLogin);
        b.Password = e.target.value;
        this.setState({ UserLogin: b });
    };
    render() {
        return (
            <div className="container">
              <div className="row">
                <div className="col-md-5 mx-auto">
                <div id="second">
                      <div className="myform form ">
                            <div className="logo mb-3">
                               <div className="col-md-12 text-center">
                                  <h1 >Signup</h1>
                               </div>
                            </div>
                            <form onSubmit={this.handleFormSubmit}>
                               <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">First Name</label>
                                        <input type="text" name="firstname" className="form-control"
                                            value={this.state.firstname}
                                            onChange={this.changeInput}
                                            aria-describedby="emailHelp" placeholder="Enter firstname" />
                                        {this.validator.message("firstname", this.state.firstname, "required|min:3|alpha")}
                               </div>
                               <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Last Name</label>
                                        <input type="text" name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter lastname"
                                            value={this.state.lastname}
                                            onChange={this.changeInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Contact Number</label>
                                        <input type="text" name="mobileno" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter mobile number"
                                            value={this.state.mobileno}
                                            onChange={this.changeInput}
                                        />
                               </div>

                               <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                                            value={this.state.EmailId}
                                            onChange={this.changeEmail}
                                        />
                               </div>
                               <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"
                                            value={this.state.Password}
                                            onChange={this.changePassword}
                                        />
                                    </div>
                                    
                                    <button type="submit" className="btn btn-outline-danger">submit</button>

                               <div className="col-md-12 ">
                                  <div className="form-group">
                                     <p className="text-center"><Link to="/signin">Already have an account?</Link></p>
                                  </div>
                               </div>
                            </form>
                    
                </div>
                
                </div>
                    </div>
                </div>
                </div>
        )
    }
};

export default Signin;
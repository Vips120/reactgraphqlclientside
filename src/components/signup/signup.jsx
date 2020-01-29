import React, { Component } from "react";
import { Link } from "react-router-dom";
class Signup extends Component {
    render() {
        return (
            <div class="container">
            <div class="row">
                <div class="col-md-5 mx-auto">
                <div id="first">
                    <div class="myform form ">
                         <div class="logo mb-3">
                             <div class="col-md-12 text-center">
                                <h1>Login</h1>
                             </div>
                        </div>
                       <form>
                               <div class="form-group">
                                  <label for="exampleInputEmail1">Email address</label>
                                  <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                               </div>
                               <div class="form-group">
                                  <label for="exampleInputEmail1">Password</label>
                                  <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                               </div>
                               <div class="form-group">
                                  <p class="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                               </div>
                               <div class="col-md-12 text-center ">
                                  <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                               </div>
                               <div class="col-md-12 ">
                                  <div class="form-group">
                                     <p class="text-center"><Link to="/signup">Dont have an account?</Link></p>
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

export default Signup;
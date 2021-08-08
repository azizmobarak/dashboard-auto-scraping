import React,{useState} from 'react';
import './register.css'


export default function Register(){



    return(
        <div className="login-container">
          <div className="login-background col-login-1  flex-center-column h-100">
              <p className="custom-intro">
                  data is not something that easy to get, so we are here to help you and let you touch into the world ..
              </p>
          </div>
          <div className="col-login-2 flex-center-column">
              <h2>Register and start scraping data</h2>
                <form className="form">
                 <div className="flex-center-row">
                   <input placeholder="how we can call you?" name="userName" className="input-text" type="text" />
                 </div>
                 <div className="flex-center-row">
                   <input placeholder="Your email" name="userName" className="input-text" type="text" />
                 </div>
                 <div className="flex-center-row">
                   <input placeholder="your password" name="userName" className="input-text" type="password" />
                 </div>
                 <div className="flex-center-row">
                   <input placeholder="Confirm password" name="userName" className="input-text" type="password" />
                 </div>
                 <div className="flex-center-row">
                   <select  className="input-text selector" >
                   <option selected disabled >how do you found us?</option>
                   <option>  Facebook </option>
                   <option>  Google </option>
                   <option>  Instagram </option>
                   <option>  other </option>
                  </select>
                 </div>
                 <div className="flex-center-row">
                     <textarea
                      className="input-text" 
                     placeholder="if other please specify"
                     rows="4"
                     cols="100"
                     />
                 </div>
                 <div className="flex-center-row">
                     <input type="submit" value="Create an account" />
                 </div>
                </form>

                <div className="login-options flex-center-column">
                <a href="#" className="forget-text">
                    <p>Already have an account?</p>
                </a>
                </div>
          </div>
        </div>
    )
}

import React,{useState} from 'react';
import './login.css'


export default function Login(){



    return(
        <div className="login-container">
          <div className="login-background col-login-1  flex-center-column h-100">
              <p className="custom-intro">
                  data is not something that easy to get, so we are here to help you and let you touch into the world ..
              </p>
          </div>
          <div className="col-login-2 flex-center-column">
              <h2>Login and start scraping data</h2>
                <form className="form">
                 <div className="flex-center-row">
                   <input placeholder="Username" name="userName" className="input-text" type="text" />
                 </div>
                 <div className="flex-center-row">
                   <input placeholder="Password" name="userName" className="input-text" type="password" />
                 </div>
                 <div className="flex-center-row">
                     <input type="submit" value="Connect" />
                 </div>
                </form>

                <div className="login-options flex-center-column">
                <a href="#" className="forget-text">
                    <p>Forgot password?</p>
                </a>
                <p className="forget-text">
                   you dont't have account? harry <a href="#">create new one here!</a>
                </p>
                </div>
          </div>
        </div>
    )
}

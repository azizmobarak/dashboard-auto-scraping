import React from 'react';
import style from './index.css'
import {Link} from 'react-router-dom';



export default function SideBar(){

    return(
        <div className="vh-100 w-100 flex-col-start bg-first-color">
            <div className="flex-col w-100 p-7">
                    <div className="avatar p-2">
                    </div>
                    <label className="text-white size-18 font-bold">
                        user name
                    </label>
            </div>
            <div className="w-100 flex-col-start">
              <ul className="ul w-75">
                  <li className="menu-li">
                      <Link className="no-text-decoration" to="#">
                          <label className="text-white  size-15">
                          Dashboard
                          </label>
                      </Link>
                  </li>
                  <li className="menu-li">
                      <Link className="no-text-decoration" to="#">
                    <label className="text-white  size-15">
                      New command 
                    </label>
                      </Link>
                  </li>
                  <li className="menu-li">
                <Link className="no-text-decoration" to="#">
                    <label className="text-white size-15">
                      settings
                    </label>
                      </Link>
                  </li>
                  <li className="menu-li">
                      <Link className="no-text-decoration" to="#">
                    <label className="text-white  size-15">
                      profile
                    </label>
                      </Link>
                  </li>
              </ul>
            </div>
        </div>
    )
}
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Main from './main/index'
import Header from './header/header'
import SideBar from './menu-sidebar';

const User=()=>{


    return(
      <div className="container w-100 h-100">
       <div className="flex-row h-100">
           <div style={{backgroundColor:'red'}} className="flex-row-start w-25">
               <SideBar/>
           </div>
           <div style={{backgroundColor:'yellow'}} className="flex-column w-75">
             <div style={{backgroundColor:'blue'}} className="w-100 flex-row">
                 <Header/>
             </div>
             <div style={{backgroundColor:'green'}} className="h-100 flex-col">
                 <Main/>
             </div>
           </div>
       </div>
      </div>
    )


}




export default User;
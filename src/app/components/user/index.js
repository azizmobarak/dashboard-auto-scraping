import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Main from './main/index'
import Header from './header/header'
import SideBar from './menu-sidebar';

const User=()=>{


    return(
      <div className="container w-100 h-100 mw-200">
       <div className="flex-row h-100">
           <div className="flex-row-start w-15">
               <SideBar/>
           </div>
           <div  className="flex-column w-85">
             <div  className="w-100 flex-row">
                 <Header/>
             </div>
             <div className="h-100 flex-col">
                 <Main/>
             </div>
           </div>
       </div>
      </div>
    )


}




export default User;
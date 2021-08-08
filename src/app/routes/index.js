import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Main from '../components/user/index'
import Login from '../components/login/login'


export default function Routes (props){

    if(props.role==="user"){
        return(
            <>
              <Route path={`/${props.role}/main`} component={Main} />
            </>
        )
    }else{
        return(
            <></>
        )
    }
}
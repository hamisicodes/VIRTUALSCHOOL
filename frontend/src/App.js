import React, { useEffect, useReducer } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import DemoList from './components/DemoList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import AppLayout from './containers/Layout';
import { initialstate , authReducer } from './reducers'




const AppRoute = ({component:Component , layout:Layout, ...rest}) => (
  <Route {...rest} render={props =>(
    <Layout><Component {...props}></Component></Layout>
  )}>
  </Route>
)


function App() {

  const [{ user },dispatch] = useReducer(authReducer, initialstate)
  const token = localStorage.getItem('token')
  useEffect(()=>{
    // will only run once when the app loads
  
      console.log(token);

      if(token){
        // The user just logged in or was logged in
        
        dispatch({
          type: "SET_USER",
          user: token
        })
      }else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    
  },[token])



  return (
    <Router>
    <div className="App">

        <AppRoute  exact path="/" layout={AppLayout} component={DemoList} />
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={SignUp} />
        
    </div>
    </Router>
  );
}

export default App;
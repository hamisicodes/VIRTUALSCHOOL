import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import AssignmentList from './containers/AssignmentList';
import AssignmentDetail from './containers/AssignmentDetail';
import DemoList from './components/DemoList';
import GroupedAssignmentCreate from './containers/AssignmentCreate';
import GradedAssignment from'./containers/GradedAssignment';


import Login from './containers/Login';
import SignUp from './containers/SignUp';
import AppLayout from './containers/Layout';
import { initialstate , authReducer } from './reducers'

import CourseList from './containers/CourseList'

import 'antd/dist/antd.less';
import 'antd/dist/antd.css';
import './App.css';




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
      
        
        <AppRoute path= '/assignment/:id' layout={AppLayout} component={AssignmentDetail}/>
        <AppRoute  path= '/assignmentlist'layout={AppLayout} component={AssignmentList}/> 
        <AppRoute path = '/createAssignment'layout={AppLayout} component={GroupedAssignmentCreate}/> 
        {/* to introduce id for the student in particular, as for educators they ill have the full rights to view each student perfomances. */}
        <AppRoute path = '/gradedassignment'layout={AppLayout} component={GradedAssignment}/>
        <AppRoute path = '/courses'layout={AppLayout} component={CourseList}/>
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={SignUp} />
        
    </div>
    </Router>
  );
}

export default App;
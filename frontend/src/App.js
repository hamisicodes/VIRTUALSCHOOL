import React from 'react';
import 'antd/dist/antd.less';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layoutframe from './containers/Layoutframe';
import AssignmentList from './containers/AssignmentList';
import AssignmentDetail from './containers/AssignmentDetail';
import DemoList from './components/DemoList';
import GroupedAssignmentCreate from './containers/AssignmentCreate';
import GradedAssignment from'./containers/GradedAssignment';



function App() {
  return (
    <Router>
      <div >
      <Layoutframe>
        <Switch>
        <Route path='/' exact component={ DemoList} />
        <Route path= '/assignment/:id' component={AssignmentDetail}/>
        <Route  path= '/assignmentlist' component={AssignmentList}/>
        
        <Route path = '/createAssignment' component={GroupedAssignmentCreate}/>
        
        {/* to introduce id for the student in particular, as for educators they ill have the full rights to view each student perfomances. */}
        <Route path = '/gradedassignment' component={GradedAssignment}/>
        </Switch>
      </Layoutframe>
    </div>
    </Router>
  );
}

export default App;
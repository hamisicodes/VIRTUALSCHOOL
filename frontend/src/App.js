import React from 'react';
import 'antd/dist/antd.less';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layoutframe from './containers/Layoutframe';
import AssignmentList from './containers/AssignmentList';
import AssignmentDetail from './containers/AssignmentDetail';
import DemoList from './components/DemoList';


function App() {
  return (
    <Router>
      <div >
      <Layoutframe>
        <Switch>
        <Route path='/' exact component={ DemoList} />
        <Route path= '/assignmentlist' component={AssignmentList}/>
        <Route path= '/assignment/:id' component={AssignmentDetail}/>
        </Switch>
      </Layoutframe>
    </div>
    </Router>
  );
}

export default App;
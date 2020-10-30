import React from 'react';
import 'antd/dist/antd.less';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layoutframe from './containers/Layoutframe';
import AssignmentList from './containers/AssignmentList';
import DemoList from './components/DemoList';


function App() {
  return (
    <Router>
      <div >
      <Layoutframe>
        <Switch>
        <Route path='/' exact component={ DemoList} />
        <Route path= '/assignmentlist' component={AssignmentList}/>
        </Switch>
      </Layoutframe>
    </div>
    </Router>
  );
}

export default App;
import React from 'react';
import 'antd/dist/antd.css';
import Layoutframe from './containers/Layoutframe';
import AssignmentList from './components/AssignmentList';
import DemoList from './components/DemoList';


function App() {
  return (
    <div >
      <Layoutframe>
      <DemoList/>
       <AssignmentList/>
      </Layoutframe>
      
    </div>
  );
}

export default App;
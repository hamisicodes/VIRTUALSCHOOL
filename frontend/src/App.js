import React from 'react';
import 'antd/dist/antd.css';
import AssignmentList from './components/AssignmentList';
import DemoList from './components/DemoList';

function App() {
  return (
    <div >
       <DemoList/>
       <AssignmentList/>
    </div>
  );
}

export default App;
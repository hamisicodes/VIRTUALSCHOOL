import React from 'react';
import { List } from 'antd';
import Result from "../components/Results";
const GradedAssignment = ()=>{
    const data = [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
        {
          title: 'Title 4',
        },
        {
          title: 'Title 5',
        },
        {
          title: 'Title 6',
        },
      ];
      return(
          <>
          {/* <h1>{props.username} Related Assignment Scores</h1> */}
          <h1>Related Assignment Scores</h1>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={assignment => <Result key ={assignment.id} grade ={assignment.grade}></Result>
        }
        /> 
</>);
}
export default GradedAssignment;

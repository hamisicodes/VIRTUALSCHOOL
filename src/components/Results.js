import React from 'react';
import { Progress, List, Card } from 'antd';

const Result = props =>{
  let grade = props.grade;
  let color = ""
  if (grade < 35){
    color ="#f33535"
  }
  else if (grade >=35 && grade <75){
    color ="#0275d8"
  }
  else color ="#5cb85c"
    return(
            <List.Item>
              <Card title={props.title}>
                     <Progress
                     strokeColor={{
                     from: color,
     
                     to: color,
                     }}
                     percent={grade}
                     status="active"
                 />
              </Card>
            </List.Item>


    );
}
export default Result;
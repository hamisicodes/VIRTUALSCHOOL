import React from 'react';
import { Progress, List, Card } from 'antd';

const Result = props =>{
    return(

            <List.Item>
              <Card title={props.title}>
                <Progress
                    strokeColor={{
                    from: '#fa4659',

                    to: '#a3de83',
                    }}
                    percent={props.grade}
                    status="active"
                />
              </Card>
            </List.Item>


    );
}
export default Result;
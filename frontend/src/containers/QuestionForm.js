import React from 'react';
import { Form, Input, Button } from 'antd';


const GroupedQuestionForm = (props) => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };
  console.log(props.id)
  
  return (

              <Form.Item
                label={'Choice'}
                required={false}
                key={props.id}
                style = {{padding:'0px'}}
              > 
                  <Form.Item
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input a Choice or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                      <Input placeholder="Choice" style={{ width: '25%' }} />
                  </Form.Item>
              </Form.Item>
  );
};

export default GroupedQuestionForm;
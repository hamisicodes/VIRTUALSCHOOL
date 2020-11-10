import React from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusSquareFilled } from '@ant-design/icons';


const GroupedAssignmentCreate = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="dynamic_form_item" onFinish={onFinish} >
        <h1 style = {{textAlign:"center"}}>Create An Assignment</h1>
        {/* <Form.Item 
            required={false}
            
        > */}
            <Form.Item
            style={{textAlign:"center"}}
                label ={"Title: "}
                validateTrigger={['onChange', 'onBlur']}
                rules={[
                {
                    required :true,
                    message: "Please input a title this Assignment(Hint: Supposed to be related with the Course/Subject/Module/Topic)!"
                },
                ]}>
                <Input placeholder="Add Assignment title" required style={{ width: '40%', textAlign:"center" }} />
            </Form.Item>  
      <Form.List
        name="names"
        
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                // label={index === 0 ? 'Questions' : ''}
                required={false}
                key={field.key}
                style = {{textAlign:'center'}}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input Question's Statement or delete this field.",
                    },
                  ]}
                  noStyle
                >
                <Input placeholder="Question Statement" style={{ width: '60%', textAlign:"center" }} />  
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item style ={{textAlign:"center"}}>
              <Button
                type="default"
                onClick={() => add()}
                style={{ width: '20%',  marginLeft: '200px'  }}
                
                icon={<PlusSquareFilled />}
              >
                Add Question field
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GroupedAssignmentCreate;
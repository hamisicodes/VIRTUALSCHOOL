import React, {useEffect, useState} from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusSquareFilled } from '@ant-design/icons';
import QuestionForm from './QuestionForm'

const GroupedAssignmentCreate = (props) => {
    const onFinish = values => {
      console.log('Received values of form:', values);
    };
    const [ formCount, setFormCount] = useState(1)

    const questions = [];

    for(let i =0; i < 4; i++){

        questions.push(
            <QuestionForm id={i} key={i} {...props} />
        )
    }
    return (
      <Form name="dynamic_form_item" onFinish=  {onFinish}>

          {/* form item to handle assignment tittle */}

          <h1 style = {{textAlign:"center"}}>Create Assignment</h1>
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
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error('At least 2 Questions'));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((question, index) => (
                <Form.Item
                style={{textAlign:"center"}}
                  label={index === 0 ? 'Questions' : ''}
                  required={false}
                  key={question.key}
                >
                  <Form.Item
                    {...question}
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
                    <Input placeholder="Question Statement" style={{ width: '60%' }} />
                  </Form.Item>
                  <Form.Item>
                      {/* input of answer to the question */}

                    <Form.Item>
                        <Input placeholder="Whats The Answer" style={{ width: '25%' }} />
                    </Form.Item>
                  {questions}
                  </Form.Item>
                  {formCount > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(
                          question.name,
                          setFormCount(formCount - 1)
                          )}
                    />
                  ) : null}
                </Form.Item>
              ))}
             
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add(
                    setFormCount(formCount + 1)
                  )}
                  style={{ width: '60%' }}
                  icon={<PlusSquareFilled />}
                >
                  Add Question
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="secondary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };
export default GroupedAssignmentCreate;
import React, {useEffect, useState} from 'react';
import { Form, Input, Button , Space, message, Row, Col} from 'antd';
import { MinusCircleOutlined, PlusSquareFilled } from '@ant-design/icons';

const GroupedAssignmentCreate = (props) => {
	const token = localStorage.getItem('key')
	const [formKey, setFormKey] = useState(0)
	const { TextArea } = Input;
	// const [loading, setLoading]= useState(false)
    const [error, setError] = useState(null)
	// Creating an Assignment object that has Assignment and question(s) and calling createassignment method
    const onFinish = values => {
		// console.log('Received values of form:', values);
		const questions = [];
		for (let i =0; i < values.Question.length; i++){
			questions.push({
			title:values.Question[i].QuestionStatement,
			choices:[values.Question[i].ChoiceA, values.Question[i].ChoiceB, values.Question[i].ChoiceC, values.Question[i].ChoiceD],
			answer : values.Question[i].Answer
				
			});
		}
		const AssignmentData = {
			educator :"educator_testing_hardcoded",
			title: values.assignmentTitle,
			slug: values.assignmentSlug,
			questions
		}
		
		// console.log(AssignmentData)
		message.success('Submiting Assignment Completed!');
		// playing with form key to invoke re-rendering changing seting back to initial form
		setFormKey({formKey: (formKey) + 1})
		createAssignment(AssignmentData)
		

		// console.log("i am assignment detail",AssignmentData)
	};
	// Creating the assignment object in backend
	function createAssignment(opts, props){
        fetch('http://127.0.0.1:8000/api/assignments/', {
            method:'post',
            cache: 'no-cache',
            headers: {
				'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
			  },
			
            body: JSON.stringify(opts)
        }).then(function(res){
            return res.json();
        })
        .catch(error =>{
            setError(error)
        });
        
    }
    return (
		
		<Form name="dynamic_form_nest_item" scrollToFirstError={true}	style = {{
			textAlign: "center"
		}}onFinish={onFinish}  autoComplete="off" key ={formKey}>
			<h1 style={{textAlign:"center"}}> Create Assignment</h1>
			<Form.Item >
				<Row type="flex" justify="center" align="middle" style={{minHeight: '10vh'}}>
					<Col span={18}>
						<Form.Item name="assignmentTitle" fieldKey="ass"
								scrollToFirstError ={[true]}
								rules={[{ required: true, message: 'Must Be Filled/Removed' }]}
								>
							<Input placeholder="Assignment Title" />
							{/* <Input placeholder="slug; eg 'dhd646g'" /> */}
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item name="assignmentSlug" fieldKey="slug"
								scrollToFirstError ={[true]}
								rules={[{ required: true, message: 'Must Be Filled/Removed' }]}
								>
							{/* <Input placeholder="Assignment Title" /> */}
							<Input placeholder="slug; eg 'dhd646g'" />
						</Form.Item>
					</Col>

						
				</Row>
			<Form.List name="Question" >
			
			{(fields, { add, remove }) => (
				<>
			
				{fields.map(field => (
					<Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
						{/* QuestionStatement form Item */}

					<Form.Item
						
						{...field}
						
						style={{textAlign:"center"}}
						
						name={[field.name, 'QuestionStatement']}
						fieldKey={[field.fieldKey, 'QuestionStatementId']}
						rules={[{ required: true, message: 'Must Be Filled/Removed' }]}
					>
						<TextArea placeholder="QuestionStatement" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>

					{/* Choices form item */}

					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceA']}
							fieldKey={[field.fieldKey, '1']}
						rules={[{ required: true, message: 'Must Be Filled/Removed' }]}
					>
						<TextArea placeholder="choice A" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceB']}
							fieldKey={[field.fieldKey, '2']}
						rules={[{ required: true, message: 'Must Be Filled/Removed' }]}
					>
						<TextArea placeholder="choice B" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceC']}
							fieldKey={[field.fieldKey, '3']}
						rules={[{ required: true, message: 'Must Be Filled/Removed' }]}
					>
						<TextArea placeholder="choice C" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceD']}
							fieldKey={[field.fieldKey, '4']}
						rules={[{ required: true, message: 'Must Be Filled/Removed' }]}
					>
						<TextArea placeholder="choice D" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>
					{/* Answer item */}
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'Answer']}
							fieldKey={[field.fieldKey, '5']}
						rules={[{ required: true, message: 'Must Be Filled/Removed' }]}
					>
						<TextArea placeholder="What's Answer" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>
					{/* <QuestionForm 
					{...field}
					name={[field.name, 'QuestionStatement']}
					fieldKey={[field.fieldKey, 'QuestionStatementId']}
					></QuestionForm> */}
					<MinusCircleOutlined onClick={() => remove(field.name)} />
					</Space>
				))}
				<Form.Item>
					<Button type="dashed" style={{ width: '25%' }} onClick={() => add()} block icon={<PlusSquareFilled/>}>
					Add Question
					</Button>
				</Form.Item>
				</>
			)}
			</Form.List>
			</Form.Item>
			
			
			<Form.Item>
				<Button type="primary" htmlType="submit" 
				
				>
					Submit
				</Button>
			</Form.Item>
	  </Form>
    );
  };
export default GroupedAssignmentCreate;
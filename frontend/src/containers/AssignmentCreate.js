import React, {useEffect, useState} from 'react';
import { Form, Input, Button , Space, message, Row,} from 'antd';
import { MinusCircleOutlined, PlusSquareFilled } from '@ant-design/icons';

const GroupedAssignmentCreate = (props) => {
	const { TextArea } = Input;
	// const [loading, setLoading]= useState(false)
    const [error, setError] = useState(null)
	// Creating an Assignment object that has Assignment and question(s)
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
			educator :"educator_testing hardcorded",
			title: values.assignmentTitle,
			questions
		}
		message.success('Submiting Assignment Completed!');
        createAssignment(AssignmentData)
		// console.log("i am assignment detail",AssignmentData)
	};
	// Creating the assignment object in backend
	function createAssignment(opts){
        fetch('http://127.0.0.1:8000/api/assignments/', {
            method:'post',
            cache: 'no-cache',
            headers: {
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
		}}onFinish={onFinish}  autoComplete="off">
			<Form.Item >
				<Row type="flex" justify="center" align="middle" style={{minHeight: '10vh'}}>
					<Form.Item name="assignmentTitle" fieldKey="ass"
						style = {{
							textAlign:"center",
							width:"550px",
							
						}}
							scrollToFirstError ={[true]}
							rules={[{ required: true, message: 'Missing first name' }]}
							>
						<Input placeholder="Assignment Title" />
					</Form.Item>	
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
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="QuestionStatement" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>

					{/* Choices form item */}

					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceA']}
							fieldKey={[field.fieldKey, '1']}
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="choice A" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceB']}
							fieldKey={[field.fieldKey, '2']}
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="choice B" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceC']}
							fieldKey={[field.fieldKey, '3']}
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="choice C" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceD']}
							fieldKey={[field.fieldKey, '4']}
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="choice D" autoSize={{ minRows: 1, maxRows: 10 }}/>
					</Form.Item>
					{/* Answer item */}
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'Answer']}
							fieldKey={[field.fieldKey, '5']}
						rules={[{ required: true, message: 'Missing first name' }]}
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
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
	  </Form>
		
		// <Form name="dynamic_form_item"  onFinish=  {onFinish}>

		// 		{/* form item to handle assignment tittle */}

		// 	<h1 style = {{textAlign:"center"}}>Create Assignment</h1>
		// 	<Form.Item         
		// 		style={{textAlign:"center"}}
		// 		label ={"Title: "}
		// 		validateTrigger={['onChange', 'onBlur']}
		// 		rules={[
		// 		{
		// 			required :true,
		// 			message: "Please TextArea a title this Assignment(Hint: Supposed to be related with the Course/Subject/Module/Topic)!"
		// 		},
		// 		]}>
		// 		<Input placeholder="Add Assignment title" required style={{ width: '40%', textAlign:"center" }} />
		// 	</Form.Item>
				
		// 	<Form.List
		// 		name="names"
		// 		rules={[
		// 			// {
		// 			// validator: async (_, names) => {
		// 			// 	if (!names || names.length < 2) {
		// 			// 	return Promise.reject(new Error('At least 2 Questions'));
		// 			// 	}
		// 			// },
		// 			// },
		// 		]}
		// 	>
		// 	{(fields, { add, remove }, { errors }) => (
		// 		<>
				
		// 		{fields.map((field, index) => (
		// 			<Form.Item
		// 			style={{textAlign:"center"}}
		// 			label={index === 0 ? 'Questions' : ''}
		// 			required={false}
		// 			key="1"
		// 			>
		// 				<Form.Item
		// 					{...field}
		// 					name={[field.name, 'first']}
		// 					fieldKey={[field.fieldKey, 'first']}
		// 					validateTrigger={['onChange', 'onBlur']}
		// 					rules={[
		// 					{
								
		// 						required: true,
		// 						message: "Please input Question's Statement or delete this field.",
		// 					},
		// 					]}
		// 					noStyle
		// 				>
		// 					<Input placeholder="Question Statement" style={{ width: '60%' }} />
		// 				</Form.Item>
		// 				<QuestionForm {...props}
		// 				{...field}
		// 				name={[field.name, 'second']}
		// 				fieldKey={[field.fieldKey, 'second']} 
		// 				></QuestionForm>

		// 				{formCount > 1 ? (
		// 					<MinusCircleOutlined
		// 					className="dynamic-delete-button"
		// 					onClick={() => remove(
		// 						field.name,
		// 						setFormCount(formCount - 1)
		// 						)}
		// 					/>
		// 				) : null}
		// 			</Form.Item>
		// 		))}
				
		// 		<Form.Item>
		// 			<Button
		// 				type="secondary"
		// 				onClick={() => add(
		// 					setFormCount(formCount + 1)
		// 				)}
		// 				style={{ width: '60%' }}
		// 				icon={<PlusSquareFilled />}
		// 				>
		// 				Add Question
		// 			</Button>
		// 			<Form.ErrorList errors={errors} />
		// 		</Form.Item>
		// 	</>
		// 	)}
		// 	</Form.List>
		// 	<Form.Item>
		// 		<Button type="secondary" htmlType="submit" >
		// 			Submit
		// 		</Button>
		// 	</Form.Item>
		// </Form>
    );
  };
export default GroupedAssignmentCreate;
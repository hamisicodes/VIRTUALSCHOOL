import React, {useEffect, useState} from 'react';
import { Form, Input, Button , Space, Row} from 'antd';
import { MinusCircleOutlined, PlusSquareFilled } from '@ant-design/icons';
import QuestionForm from './QuestionForm'

const GroupedAssignmentCreate = (props) => {
	// const [formLayout, setFormLayout] = useState('horizontal');
	// const [choiceValue, setChoiceValue]=useState('')
	// const [ formCount, setFormCount] = useState(1)
	const { TextArea } = Input;

    const onFinish = values => {
		console.log('Received values of form:', values);
		// console.log('Choices here i am',props.values)
	};

	const onValuesChange = (values, valuesC) =>{
		console.log('Reve', valuesC)
	}


    return (
		<Form name="dynamic_form_nest_item" scrollToFirstError={true}	style = {{
			textAlign: "center"
		}}onFinish={onFinish} onValuesChange ={onValuesChange} autoComplete="off">
			<Form.Item >
				<Row type="flex" justify="center" align="middle" style={{minHeight: '10vh'}}>
					<Form.Item name="Assignment" fieldKey="ass"
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
						<TextArea placeholder="QuestionStatement" autoSize={{ minRows: 2, maxRows: 6 }}/>
					</Form.Item>

					{/* Choices form item */}

					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceA']}
							fieldKey={[field.fieldKey, '1']}
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="choice A" />
					</Form.Item>
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceB']}
							fieldKey={[field.fieldKey, '2']}
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="choice B" />
					</Form.Item>
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceC']}
							fieldKey={[field.fieldKey, '3']}
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="choice C" />
					</Form.Item>
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'ChoiceD']}
							fieldKey={[field.fieldKey, '4']}
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="choice D" />
					</Form.Item>
					{/* Answer item */}
					<Form.Item
						{...field} 
						style={{textAlign:"center"}}
						name={[field.name, 'Answer']}
							fieldKey={[field.fieldKey, '5']}
						rules={[{ required: true, message: 'Missing first name' }]}
					>
						<TextArea placeholder="What's Answer" />
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
					<Button type="dashed" style={{ width: '20%' }} onClick={() => add()} block icon={<PlusSquareFilled/>}>
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
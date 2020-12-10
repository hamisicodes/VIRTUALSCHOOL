import React, {useEffect, useState} from 'react';
import { Form, Input} from 'antd';


const GroupedQuestionForm = (props) => {

//   console.log(props.id)
// const [state, setState] = useState("");
// useEffect((values) => {
// 	setState(values)
//   props.setChoiceValue(state);
// }, [state]);

  return (
	  <>
	
		<Form.Item

			validateTrigger={['onChange', 'onBlur']}
			// {...field}
			// name={[field.name, 'QuestionStatement']}
			// fieldKey={[field.fieldKey, 'QuestionStatementId']}
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
			<Input placeholder="Answer" style={{ width: '25%' }} />
		</Form.Item>
	</>
  );
};

export default GroupedQuestionForm;
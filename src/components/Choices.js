import React, {useState} from 'react';
import { Radio } from 'antd';



const radioStyle = {
    textAlign: 'left',
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    };
const Choices =(props)=>{
    const {questionId} = props;
    const [value, setValue] = useState()
    const { studentAnswer } = props;


    const handleChange = (e, qId)=>{
        props.onChange(e, questionId);
        setValue(studentAnswer[questionId]);
    }
    return (
    <Radio.Group onChange ={handleChange} value={value }>
        {props.choices.map((c, index)=>{
            return  <Radio style={radioStyle} key={index} value={c}>
                {c}
            </Radio>
        })} 
    </Radio.Group>
    );
    }
export default Choices;








import React from 'react';
import { Radio } from 'antd';
// import { OmitProps } from 'antd/lib/transfer/ListBody';

// const RadioGroup = Radio.Group;
const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    };


const Choices =(props)=>{
    const {questionId} = props.questionId;
    console.log(questionId)
    const answer = props;
    console.log(answer)
    return (
    <Radio.Group onChange ={props.onChange} value={props.answer }>
        {props.choices.map((c, index)=>{
            return  <Radio style={radioStyle} key={index} value={c}>
                {c}
            </Radio>
        })}
        
    </Radio.Group>
    );
    }
export default Choices;



// !== undefined && props.answer !== null?
//         props.answer : null








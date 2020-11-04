import React,{ useEffect, useState} from 'react'
// import { Link} from 'react-router-dom';
import { Card, Skeleton, Alert } from 'antd';
import Questions from './Questions';
import Choices from '../components/Choices';

const cardStyle ={
    marginTop:'30px',
    marginBottom :'30px'
}


const AssignmentDetail = (props) =>{
    const [assignment, setAssignment] = useState({})
    // const [, setAssignment] = useState({})
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(null)
    const [answer, setAnswer] = useState({})
    const ID = props.match.params.id
    // console.log(ID)

    useEffect(()=>{
        
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/assignments/${ID}/`)
        .then(res => res.json())
        .then(data =>{
            setAssignment(data)
            // console.log(assignment)
            setLoading(false)
        })
        .catch(error =>{
            setError(error.message)
            setLoading(true)
        })
    }, []);
    console.log(assignment)
    const onChange = (e, qId) => {
        console.log('radio checked', e.target.value);
        // const {userAnswers} = answer
        // userAnswers[qId] = e.target.value;
        //    setValue(userAnswers)
        // setAnswer(userAnswers);
        setAnswer(e.target.value);
        };
        console.log(answer)
    return(
        <div>
        {Object.keys(assignment).length > 0?
            <div>
            {error && (
                <div style={{ padding:5 , color:"red"}}>
                    <Alert
                        message="Error"
                        description=" An Error has occured while trying to get the requested material. Please Contact VirtualSchool Technician for Assistance. This is a Database related Error"
                        type="error"
                        showIcon
                    />
                </div>
            )}
            {loading? 
            <div>
                <Skeleton active />
            </div> :(
            <Card title={assignment.title} extra={<a href="#">More</a>}>
                {/* <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}> */}
                    <Questions questions ={assignment.questions.map(q => {
                        return <Card style = {cardStyle} type="inner" key = {q.id} title={`${q.order}.${q.question}`} >
                            <Choices 
                            questionId ={q.order} 
                            choices={q.choices} 
                            onChange={onChange} 
                            answer={answer}/>
                        </Card>
                    })}/>
                {/* </Card> */}
            </Card>)}
        </div>: null
        }</div>
     
            );
}
export default AssignmentDetail;
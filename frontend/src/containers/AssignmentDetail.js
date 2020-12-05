import React,{ useEffect, useState} from 'react'
// import { Link} from 'react-router-dom';
import { Card, Skeleton, Alert, message } from 'antd';
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
    const onChange = (e, questionId) => {
        answer[questionId] = e.target.value
     
        console.log('i have been clicked', e.target)
        setAnswer(
            answer
        )
    }
    // logic to handle posting of the assignment
    function createGradedAssignment(opts){
        fetch('http://127.0.0.1:8000/api/graded_assignments/create/', {
            method:'post',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(opts)
        }).then(function(res){
            return res.json();
        }).then((data)=>{
            console.log(data)
        })
        .catch(error =>{
            setError(error.message)
        });
        
    }
    const handleSubmit=()=>{
        const gradadeAssignmentRawData = {
            // props.username
            username: "student1",
            asntID:ID,
            answers:answer
        }
        message.success('Submiting Assignment Completed!');
        createGradedAssignment(gradadeAssignmentRawData)
        // console.log(gradadeAssignmentRawData)
        
    }
    console.log(answer)
    const studentAnswer = answer
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
                    <Questions 
                    submit={handleSubmit}
                    questions ={assignment.questions.map(q => {
                        return <Card style = {cardStyle} type="inner" key = {q.id} title={`${q.order}.${q.question}`} >
                            <Choices 
                            questionId ={q.order} 
                            choices={q.choices} 
                            onChange={onChange} 
                            studentAnswer={studentAnswer}/>
                        </Card>
                    })}/>
                {/* </Card> */}
            </Card>)}
        </div>: null
        }</div>
            );
}
export default AssignmentDetail;
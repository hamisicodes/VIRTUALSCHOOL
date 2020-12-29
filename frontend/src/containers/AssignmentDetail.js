import React,{ useEffect, useState} from 'react'
import { Redirect } from "react-router-dom";
import { Card, Skeleton, Alert, message, Button} from 'antd';
import {
  DeleteFilled
  } from '@ant-design/icons';
import Questions from './Questions';
import Choices from '../components/Choices';


const cardStyle ={
    marginTop:'30px',
    marginBottom :'30px'
}
const AssignmentDetail = (props) =>{
    const token = localStorage.getItem('key')
    const [assignment, setAssignment] = useState({})
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(null)
    const [answer, setAnswer] = useState({})
    const [redirect, setRedirect] = useState(null)
    const ID = props.match.params.id
    // console.log(ID)


    const getExtra =()=>(
        <>
            <Button secondary type="icon" onClick={handleUpdate}>
               Update
            </Button>
            <Button danger type="icon" onClick={handleDelete}>
                <DeleteFilled />
            </Button>
        </>
    )

    // Taking advantage of useEffect to get assignment questions.
    useEffect(()=>{
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/assignments/${ID}`, {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data =>{
            setAssignment(data)
            setLoading(false)
        })
        .catch(error =>{
            setError(error.message)
            setLoading(true)
        })
    }, []);

    
    // MOFICATION TO GIVEN assignment. i.e put and delete
        function handleDelete(opts){
            setLoading(true)
                fetch(`http://127.0.0.1:8000/api/assignments/${ID}`, {
                    method:'delete',
                    cache: 'no-cache',
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    },
                })
                .catch(error =>{
                    setError(error)
                });
                setRedirect("/assignmentlist")
                if (redirect)
                    return <Redirect to={ redirect} setloading= {loading}/>
            }
        function handleUpdate(opts){
            fetch(`http://127.0.0.1:8000/api/assignments/${ID}/`, {
                method:'put',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        }

    const onChange = (e, questionId) => {
        answer[questionId] = e.target.value
     
        // console.log('i have been clicked', e.target)
        setAnswer(
            answer
        )
    }
    // logic to handle posting of the assignment
    // useEffect((opts)=>{})
    function createGradedAssignment(opts){
        fetch('http://127.0.0.1:8000/api/graded_assignments/create/', {
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
    const handleSubmit=()=>{
        const gradadeAssignmentRawData = {
            // props.username
            username: "student1",
            asntID:ID,
            answers:answer
        }
        message.success('Submiting Assignment Completed!');
        createGradedAssignment(gradadeAssignmentRawData)
        setRedirect("/assignmentlist")

        // console.log(gradadeAssignmentRawData)
        // redirectToTarget = () => {
        //     props.history.push(`/target`)
        //   }
    }
          
    // console.log(answer)
    const studentAnswer = answer
    if (redirect)
        return <Redirect to={ redirect}/>
    return(
        <>
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
                <Card title={assignment.title} extra={ getExtra()
            //   <Button type="primary" >edit</Button>
            }>
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
            }
        </>
            );
}
export default AssignmentDetail;
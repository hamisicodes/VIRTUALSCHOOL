import React,{ useEffect, useState} from 'react'
import { Link} from 'react-router-dom';
import { Card, Skeleton, Alert } from 'antd';
import Questions from './Questions';

const AssignmentDetail = (props) =>{
    const [assignment, setData] = useState({})
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(null)
    const id = props.match.params.id

    useEffect(()=>{
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/assignments/${id}/`)
        .then(res => res.json())
        .then(data =>{
            setData(data)
            setLoading(false)
        })
        .catch(error =>{
            setError(error.message)
            setLoading(true)
        })
    }, [])
    return(
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
                <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                    <Questions questions ={assignment.questions.map(q =>{
                        return <Card type="inner" key = {q.id} title={`${q.order}.${q.question}`} extra={<a href="#">More</a>}></Card>
                    })}/>
                </Card>
            </Card>)}
        </div>
            );
}
export default AssignmentDetail;
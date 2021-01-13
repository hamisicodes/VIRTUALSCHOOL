import React, { useEffect, useState} from 'react';
import { List, Alert, Skeleton } from 'antd';
import Result from "../components/Results";


const GradedAssignment = (props)=>{
    let token = localStorage.getItem('key')
    const userdata = props.courseData
    console.log(userdata)


    // console.log(token)
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(null)
    const [data, setData] =useState([])
   
   

    useEffect((userdata)=>{
        setLoading(true)
        console.log(userdata)
        fetch(`http://127.0.0.1:8000/api/graded_assignments/`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/Json',
                'Authorization': `Token ${token}`
            },
        })
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
    // console.log(data)
      return(
          <>
          {/* <h1>{props.username} Related Assignment Scores</h1> */}
            <h1>Related Assignment Scores</h1>
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
                    {loading? <div>
                        <Skeleton active />
                        </div> :(
                            <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 6,
                                xxl: 3,
                            }}
                            dataSource={data}
                            renderItem={assignment => <Result key ={assignment.id} grade ={assignment.grade} title= {assignment.assignment}></Result>
                            }
                            /> )}
</>);
}
export default GradedAssignment;

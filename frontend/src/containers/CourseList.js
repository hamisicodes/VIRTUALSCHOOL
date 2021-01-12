import React,{ useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { Button } from 'antd';

function CourseList(props) {
    const data = props.courseData
    // console.log(data)
    // const [data , setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    let token = localStorage.getItem('key');
    return (
        <div>
            <h1>Courses Available</h1>
            {error && (
                <h4 style={{ padding:5 , color:"red"}}>An error retrieving courses:{error}</h4>
            )}
                        {loading? <div>Loading...</div> : (
                <div>
                    {data && data.map(course => {
                        return(
                            <>
                            <div class="card" style={{padding:50}}>

                            <Link to={`/courses/${course.slug}/`}>
                                <img src={course.thumbnail} alt="Avatar" style={ {padding:10 , width:200 , height:200} }/>
                            </Link>
                            <div class="container">
                                <h4><b>{course.title}</b></h4>
                                <Button type="primary">Enroll</Button>
                                
                            </div>
                            </div>
                            </>
                        )
                    }) 
                    }
                </div>
            )}
        </div>
    )
}

export default CourseList

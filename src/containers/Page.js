import React,{ useState,useEffect} from 'react'
import { useParams} from "react-router-dom";
import { Button } from 'antd';


function CourseList() {
    const [data , setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    let token = localStorage.getItem('key');
    const { pageSlug } = useParams();

    useEffect(() =>{
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/coursework/page/${pageSlug}`,{
			method: 'GET',
			headers:{
				'Content-Type': 'application/Json',
				'Authorization': `Token ${token}`
            },
        })
        .then(res => res.json())
        .then(apiData =>{
            setData(apiData)
            setLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setLoading(false)
        })
        
    },[])

    return (
        <div>
            {data && (
                    <h1>{data.header}</h1>
            )}
            {error && (
                <h4 style={{ padding:5 , color:"red"}}>An error retrieving this page:{error}</h4>
            )}
                        {loading? <div>Loading...</div> : (
                <div>
                        { data && (

                            <div>
                                {data.content}
                            </div>

                        )}
                </div>
            )}
        </div>
    )
}

export default CourseList

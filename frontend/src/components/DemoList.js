import Axios from 'axios'
import React,{ useEffect, useState} from 'react'
const token = localStorage.getItem('Key')
console.log(token)

const DemoList = () => {
   
    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    
    useEffect(() => {
        console.log(token)
        setLoading(true)
        fetch('http://127.0.0.1:8000/api/demo/', {
            method: "GET",
            headers :{
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setData(data)
            setLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setLoading(false)
        })
    },[])
    return (
        <div>
        </div>
        // <div style={{margin:10 , padding:10}}> 
        //     <h1>Demo List</h1>
        //     {error && (
        //         <h4 style={{ padding:5 , color:"red"}}>An error has occured:{error}</h4>
        //     )}
        //     {loading? <div>Loading...</div> : (
        //         <div>
        //             {data && data.map(demo => {
        //                 return(
        //                     <div>
        //                         <h1>{demo.title}</h1>
        //                         <p>{demo.content}</p>
        //                     </div>
        //                 )
        //             }) 
        //             }
        //         </div>
        //     )}
        // </div>
    )
}
export default DemoList

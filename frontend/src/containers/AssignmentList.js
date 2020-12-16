import React,{ useEffect, useState} from 'react'
import { Link} from 'react-router-dom';
import 'antd/dist/antd.less';
import { List, Avatar,  Alert, Skeleton  } from 'antd';



const AssignmentList = () =>{
    const [assignments,setData] = useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(null)


    useEffect(()=>{
        setLoading(true)
        fetch('http://127.0.0.1:8000/api/assignments/')
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
        return (
            <>
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
				<div>
					<h3 style={{margin: '16px 0'}}>Assignment List</h3>
					<List
						itemLayout="horizontal"
						dataSource={assignments}
						renderItem={item => (
						<List.Item>
							<List.Item.Meta
							avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							title={<Link to={`/assignment/${item.id}/${item.slug}/`}>{item.title}</Link>}
							description="Ant Design, a design language for background applications, is refined by Ant UED Team"
							/>
						</List.Item>
						)}
          			/>
		  		</div>)}
            </>
        )
};
export default AssignmentList;




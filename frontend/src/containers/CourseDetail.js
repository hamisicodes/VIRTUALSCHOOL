import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Tree } from 'antd';
import {
    DownOutlined,
    FrownOutlined,
    SmileOutlined,
    MehOutlined,
    FrownFilled,
  } from '@ant-design/icons';
  

  let treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      icon: <SmileOutlined />,
      children: [
        {
          title: 'leaf',
          key: '0-0-0',
          icon: <MehOutlined />,
        },
        {
          title: 'leaf',
          key: '0-0-1',
          icon: ({ selected }) => (selected ? <FrownFilled /> : <FrownOutlined />),
        },
      ],
    },
    
  ];
  



function CourseDetail() {

    const { courseSlug } = useParams()
    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [newData , setNewData] = useState([])
    let token = localStorage.getItem('key')
   



    useEffect(() => {
        setLoading(true)
        fetch(`http://127.0.0.1:8000/api/coursework/${courseSlug}/`,{
			method: 'GET',
			headers:{
				'Content-Type': 'application/Json',
				'Authorization': `Token ${token}`
			},
		})
        .then(res => res.json())
        .then(data =>{
            console.log(courseSlug)
            console.log(data)
            setData(data)
            setNewData(treeData)
            console.log(...newData)

            for(let i = 0 ; i < data.length; i++){
                treeData[i].title = data[i].title
               
  
                // treeData[i].children = data[i].pages.map(page => {
                //   treeData[i].children.title = page.title
                //   treeData[i].children.key = page.id
                // })
                // for(let j = 0 ; j < data.length; j++){}

            }
            
      
            setLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setLoading(false)
        })
    },[])



    return (
        <div>
        { data && data.map(module =>(
            // <div>
            //    {module.title} 
            //    {module.pages.map(page => (
            //        <b><h1 style={{color:'green'}}>{page.header}</h1></b>
            //    ))}
            // </div>
            <Tree
              showIcon
              defaultExpandAll
              defaultSelectedKeys={['0-0-0']}
              switcherIcon={<DownOutlined />}
              treeData={treeData}
            />

        ))}


        </div>


    )
}

export default CourseDetail

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tree } from 'antd';
import List from '../components/List';
import {
    DownOutlined,
    FrownOutlined,
    SmileOutlined,
    MehOutlined,
    FrownFilled,
  } from '@ant-design/icons';
  


  
function CourseDetail() {

    const { courseSlug } = useParams();
    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const selection = function(selectedKeys, e){
      console.log(e)
      
      let pg =  e.node
      if (pg.pages){
        pg = pg.pages[0]
      }
      window.location.assign(`/page/${pg.slug}`);
    }
  
    let token = localStorage.getItem('key');
    let newTreedata = []

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
        .then(apiData =>{
            console.log(courseSlug)
            
            setData(apiData);
            
            
            setLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setLoading(false)
        })
    },[])

// Algorithm for manipulating treeData
    if (data){
      for(let i = 0 ; i < data.length; i++ ){
       let obj = data[i];
        obj.key = `${i}`
        obj.icon = <SmileOutlined />
        obj.children = data[i].pages;

        for(let j = 0 ; j< obj.children.length; j++){
            obj.children[j].key = `${i}-${j}`;
            obj.children[j].title = data[i].pages[j].header ;
            obj.children[j].slug = data[i].pages[j].slug
            obj.children[j].icon =  <MehOutlined /> ;
            


        }

        newTreedata.push(obj);

      }
   
    }
    
    console.log(newTreedata);
    



    return (

      <Tree
      showIcon
      defaultExpandAll
      defaultSelectedKeys={['0']}
      switcherIcon={<DownOutlined />}
      treeData={newTreedata}
      onSelect={selection}
    />
  
    );
}



export default CourseDetail

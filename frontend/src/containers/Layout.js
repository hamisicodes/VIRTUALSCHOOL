import React,{ useEffect , useState , useReducer} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { initialstate , authReducer } from '../reducers';
import { Link } from "react-router-dom";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  PercentageOutlined,
} from '@ant-design/icons';
import CourseList from './CourseList';
import { getRenderPropValue } from 'antd/lib/_util/getRenderPropValue';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
// const token = localStorage.getItem('key')






const AppLayout = (props) => {
  const [collapsed,setCollapsed] = useState(false)
  const [{ user }, dispatch] = useReducer(authReducer,initialstate)
  const token = localStorage.getItem('key')
  const [courseData , setcourseData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  let userDetail = {}

  useEffect(() =>{
    setLoading(true)
    fetch('http://127.0.0.1:8000/api/coursework/',{
  method: 'GET',
  headers:{
    'Content-Type': 'application/Json',
    'Authorization': `Token ${token}`
        },
    })
    .then(res => res.json())
    .then(data =>{
        setcourseData(data)
        setLoading(false)
    })
    .catch(error => {
        setError(error.message)
        setLoading(false)
    })
},[])


if (courseData){
    const [{user}] = courseData
    userDetail = user
  }
  

  // using react.clone_element to pass down some addition props to course_list component
  const children = React.Children.map(props.children, child =>{
    return React.cloneElement(child, {
      courseData: courseData
    })
  })



  const onCollapse = collapsed => {
    // console.log(collapsed);
    setCollapsed(collapsed);
  };

  function logout(){
    localStorage.removeItem("key")   
  }

  useEffect(()=>{
    // will only run once when the app loads
  
      // console.log(token);
      if(token){
        // The user just logged in or was logged in
        
        dispatch({
          type: "SET_USER",
          user: token
        })
      }else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    
  },[])

    return (
      <>
    
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
           
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
           
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            
            
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              
          
            
            
            <Menu.Item  key="4">
            <Link to='/login'>Logout</Link> 
            </Menu.Item>

            <Menu.Item key="3">Account</Menu.Item>
            
          
            </SubMenu>
            
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="3" icon={<PercentageOutlined />}><Link to="gradedassignment">Scores</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
      
                  {/* {props.userauthentication? props.is_educator(the createassignment link)} */}
                  { userDetail.is_staff && userDetail.is_active?
                    <Link to='/createAssignment' style={{color: "green"}}><Breadcrumb.Item>Create Assigment</Breadcrumb.Item></Link>: null
                    }
                  
                
                  <Link to='/assignmentlist'><Breadcrumb.Item >Assignments</Breadcrumb.Item></Link>
              </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }} >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Virtual school ©2020 </Footer>
        </Layout>
      </Layout>
      </>
    );
  }
  


export default AppLayout;
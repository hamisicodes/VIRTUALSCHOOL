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

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
// const token = localStorage.getItem('key')






const AppLayout = (props) => {


  const [collapsed,setCollapsed] = useState(false)

  const [{ user }, dispatch] = useReducer(authReducer,initialstate)
  const token = localStorage.getItem('key')

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
    // console.log(user)
    
    return (
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
                  {/* {user.role ==='is_staff' &&  */}
                    <Link to='/createAssignment'><Breadcrumb.Item>Create Assigment</Breadcrumb.Item></Link>
                  
                
                  <Link to='/assignmentlist'><Breadcrumb.Item >Assignments</Breadcrumb.Item></Link>
              </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Virtual school ©2020 </Footer>
        </Layout>
      </Layout>
    );
  }
  


export default AppLayout;
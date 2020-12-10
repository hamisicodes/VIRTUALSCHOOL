import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  PercentageOutlined,
} from '@ant-design/icons';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const Layoutframe = (props)=>{
  
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  
  const [collapsed, setCollapse ] = useState(false)
    const onCollapse = collapsed => {
      setCollapse(collapsed )
    };
  
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
                
              
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
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
                <Link to=''><Breadcrumb.Item>User</Breadcrumb.Item></Link>
                <Link>  <Breadcrumb.Item>Bill</Breadcrumb.Item></Link>
                  {/* {props.userauthentication? props.is_educator(the createassignment link)} */}
                  <Link to='createAssignment'><Breadcrumb.Item>Creat Assignent</Breadcrumb.Item></Link>
                  <Link to='assignmentlist'><Breadcrumb.Item >Assignments</Breadcrumb.Item></Link>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Virtual School</Footer>
          </Layout>
        </Layout>
      );
    }
export default Layoutframe;
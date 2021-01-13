import React, {  useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { Link,useHistory } from "react-router-dom";



const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 5,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 12,
  },
};

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [username,setUsername] = useState('');
  const [email , setEmail] = useState('')
  const [password1 , setPassword1] = useState('');
  const [password2,setPassword2] = useState('');
  
  
  const history = useHistory();

  function handleSubmit(){
    console.log({username,email,password1,password2})
    
    axios.post(`http://127.0.0.1:8000/dj-rest-auth/registration/`, { username,email,password1,password2 })
      .then(res => {
       
        console.log(res.data);
        localStorage.setItem('key',res.data.key)
        history.push('/')
      })
  }

  return (
    <>

    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      style={{ marginTop: '7%' }}
  
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password2"
        name="password2"
        rules={[
          {
            required: true,
            message: 'Please input your password confirmation!',
          },
        ]}
      >
        <Input.Password
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
        />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default SignUp;
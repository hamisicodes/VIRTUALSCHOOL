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

// const initialstate = {
//   user:null
// }

// const reducer = (state,action) =>{
//   switch (action.type){
//     case "SET_USER":
//       return{
//         ...state,
//         user:action.user
//       }
//   }
// }
 







const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('');
  const history = useHistory();

  function handleSubmit(){
  
    axios.post(`http://127.0.0.1:8000/dj-rest-auth/login/`, { email,password })
      .then(res => {
       
        console.log(res.data);
        console.log(res);
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default Login;
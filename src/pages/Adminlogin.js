import React from 'react';
import './Login.css';
import { Row, Col, Form, Input} from 'antd';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { adminLogin } from '../redux/actions/adminActions';


function Adminlogin() {

  const dispatch=useDispatch();

  function finish(values){
    dispatch(adminLogin(values))
    console.log(values)
  }

  return (
    <div className='login'>
      <div className='bluepart'>
        <div className='logo'></div>
      </div>
      <div className='transparent-container'>
        <Row justify='center' align='middle' style={{ height: '100%' }}>
          <Col span={12}>
            <img src='https://pluspng.com/img-png/blue-race-car-png-this-high-quality-free-png-image-without-any-background-is-about-car-ferrari-vehicle-2396.png' className='car-svg'/>
          </Col>
          <Col span={12}>
            <Form layout='vertical' className='login-form' onFinish={finish}>
              <h3>Admin Login</h3>
              <h7>Since this is your first trip, you'll need to provide us with information before you can check out</h7>
              <Form.Item name='username' label='Username' rules={[{ required: true }]}>
                <Input placeholder='Enter Username' maxLength={25} />
              </Form.Item>
              <Form.Item name='password' label='Password' rules={[{ required: true }]}>
                <Input type='password' placeholder='Enter Password' />
              </Form.Item>
              <button className='btn1'>Login</button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Adminlogin;
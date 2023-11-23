import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Dropdown, Button, Row, Col } from 'antd';
import "./StyleSheets/DefaultLayout.css"

function DefaultLayout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
      navigate('/login'); // Redirect to login page if user is not found
    }
  }, [navigate]);

  
  const user = JSON.parse(localStorage.getItem('user'));

  const menulist = (
    <Menu>
      <Menu.Item onClick={() => { window.location.href = '/' }}>
        Home
      </Menu.Item>
      <Menu.Item onClick={() => { window.location.href = '/userbookings' }}>
        Bookings
      </Menu.Item>
      <Menu.Item onClick={() => {
        localStorage.removeItem('user');
        window.location.href = '/login';
      }}>
        <span>Logout</span>
      </Menu.Item>
      <Menu.Item onClick={() => { window.location.href = '/addcar' }}>
        AddCar
      </Menu.Item>
      <Menu.Item onClick={() => { window.location.href = '/about' }}>
        About
      </Menu.Item>

    </Menu>

    
  );

  return (
    <div>
      <div className='header bs1'>
        <Row gutter={16} justify='center'>
          <Col lg={20} sm={24} xs={24}>
            <div className='d-flex justify-content-between'>
              <h1 style={{cursor:'pointer'}} onClick={() => { window.location.href = '/' }}>Jysan-Wheels</h1>
              <Dropdown overlay={menulist} placement='bottomCenter'>
                <Button>{user ? user.username :'Guest'}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className='content'>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;



import React from 'react';
import { Spin } from 'antd';

const DefaultLayout = ({ children, loading }) => {
  return (
    <div className='spinner'>
     <Spin size='large'/>
    </div>
  );
};

export default DefaultLayout;

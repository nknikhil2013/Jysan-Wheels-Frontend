// Home.js
import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars ,deleteCar} from '../redux/actions/carsAction';
import { Row, Col} from 'react-bootstrap';
import Spinner from '../components/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/StyleSheets/Home.css';
import {DeleteOutlined,EditOutlined} from "@ant-design/icons";
import {Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

function AdminHome() {
  const { cars, loading } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const handleSearch = (query) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filteredCars);
  };

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify={'center'} className='mt-1'>
        {cars.map((car) => (
          <Col key={car._id} lg={4} sm={12} md={6}>
            <div className='car card mb-4'>
              <img src={car.image} alt={car.name} className='car-img card-img-top' />

              <div className='car-content card-body d-flex align-items-center justify-content-left'>
                <div>
                  <p> {car.name}</p>
                  <p> RentPerHour-{car.rentPerHour}/-</p>
                </div>
                <div className='mr-10'>
                <Link to={`/editcar/${car._id}`}><EditOutlined className='mr-3' style={{ color: 'green', cursor: 'pointer' }} /></Link>
                    <Popconfirm
    title="Are you sure to delete this car?"
    onConfirm={()=>{dispatch(deleteCar({carid : car._id}))}}
    okText="Yes"
    cancelText="No"
  >
      <DeleteOutlined style={{color:"red",cursor:'pointer'}}/>
  </Popconfirm>
                   
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </DefaultLayout>
  );
}

export default AdminHome;


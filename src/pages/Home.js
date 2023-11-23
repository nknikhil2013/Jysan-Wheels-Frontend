// Home.js
import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars } from '../redux/actions/carsAction';
import { Row, Col, Container } from 'react-bootstrap';
import Spinner from '../components/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/StyleSheets/Home.css';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Home() {
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
      <Container fluid className='home-background'>
        <Row className='justify-content-center mt-5'>
          <Col xs={12} className='mb-4'>
            <SearchBar onSearch={handleSearch} />
          </Col>
          {filteredCars.map((car) => (
            <Col key={car._id} lg={4} md={6} sm={12}>
              <div className='car card mb-4'>
                <img src={car.image} alt={car.name} className='car-img card-img-top' />
                <div className='car-content card-body'>
                  <h5 className='card-title'>{car.name}</h5>
                  <p className='card-text'>Rent Per Hour: {car.rentPerHour}/-</p>
                  <button className='btn btn-primary'>
                    <Link to={`/booking/${car._id}`}><button className='btn btn-primary'>Book Now</button></Link>
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </DefaultLayout>
  );
}

export default Home;



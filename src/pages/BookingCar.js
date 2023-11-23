// BookingCar.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Divider, DatePicker, Checkbox } from 'antd';
import { Button, Spinner } from 'react-bootstrap';
import { getAllCars } from '../redux/actions/carsAction';
import DefaultLayout from '../components/DefaultLayout';
import '../components/StyleSheets/BookingCar.css';
import { bookCar } from '../redux/actions/bookingAction';

const { RangePicker } = DatePicker;

function BookingCar() {
  const { carId } = useParams();
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setCar] = useState(null);
  const dispatch = useDispatch();
  const [selectedDates, setSelectedDates] = useState(null);
  const [driverRequired, setDriverRequired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCars());
    const foundCar = cars.find((c) => c._id === carId);
    if (foundCar) {
      setCar(foundCar);
    } else {
      console.error(`Car with ID ${carId} not found`);
    }
  }, [carId, cars, dispatch]);

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  const calculateTotalAmount = () => {
    if (selectedDates && selectedDates.length === 2) {
      const [startDate, endDate] = selectedDates;
      const totalHours = Math.abs(endDate.diff(startDate, 'hours'));
      const baseAmount = totalHours * car.rentPerHour;
      const driverCharge = driverRequired ? 50 : 0;

      return {
        totalAmount: baseAmount + driverCharge,
        totalHours: totalHours,
      };
    }

    return {
      totalAmount: 0,
      totalHours: 0,
    };
  };

  const BookNow = async () => {
    const { totalAmount, totalHours } = calculateTotalAmount();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user._id) {
      console.error('User information not available or incomplete.');
      return;
    }

    const reqObj = {
      user: user._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired,
      bookedTimeSlots: {
        from: selectedDates[0].toISOString(),
        to: selectedDates[1].toISOString(),
      },
    };

    try {
      await dispatch(bookCar(reqObj));
      // Optionally, you can handle success, show a message, or redirect the user
      navigate('/thankyou', { state: { bookingSuccess: true } }); // Redirect to home with success message
    } catch (error) {
      console.error('Booking failed:', error);
      // Optionally, you can handle errors, show an error message, or take appropriate action
    }
  };



  if (!car) {
    return <div>Car not found</div>;
  }

  const totalInfo = calculateTotalAmount();

  
return (
  <DefaultLayout>
    <div className='booking-page'>
      <h1 className='page-title' align='center'>Booking-Page</h1>

      <Row justify='center' className='mt-5'>
        <Col lg={10} sm={24} xs={24} className='car-details'>
          <img src={car.image} className="carimg2 bs1" alt={car.name} />

          <Divider type='horizontal' dashed className="carinfo">
            Car info
          </Divider>
          <div className='text-center'>
            <p>Car Name: {car.name}</p>
            <p>Rent Per Hour: {car.rentPerHour}/-</p>
            <p>Fuel Type: {car.fuelType}</p>
            <p>Max Persons: {car.seatingCapacity}</p>
          </div>

          <Divider type='horizontal' className="car-details">
            Select Time Slot
          </Divider>
          <RangePicker
            showTime={{ format: 'hh:mm' }}
            format='MMM DD YYYY hh:mm'
            onChange={handleDateChange}
          />

          <Checkbox
            className="driver-checkbox"
            onChange={(e) => setDriverRequired(e.target.checked)}
          >
            Driver Required (Additional 50 Rs)
          </Checkbox>

          <p className='total-amount'>
            <span className='total-info'>Total Hours: {totalInfo.totalHours}</span>
            <br />
            <span className='total-info'>Total Amount: {totalInfo.totalAmount}/-</span>
          </p>

          <Button className='BookNow' onClick={BookNow}>Book Now</Button>
        </Col>
      </Row>
    </div>
  </DefaultLayout>
);
}

export default BookingCar;
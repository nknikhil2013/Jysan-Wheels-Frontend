import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import { getAllBookings } from '../redux/actions/bookingAction';
import { Row, Col } from 'antd';
import moment from 'moment';

function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <h1 className='text-center mt-2'>My Bookings</h1>

      <Row justify='center'>
        <Col lg={20} sm={24}>
          {bookings.map((booking) => (
            <Row className='bs1 m-2 text-left' key={booking._id}>
              <Col lg={7} sm={24}>
                <p><b>Car Name: {booking.car.name}</b></p>
                <p><b>Total Hours: {booking.totalHours} hrs</b></p>
                <p><b>Total Amount: {booking.totalAmount} Rs.</b></p>
                <p><b>Rent per Hour: {booking.car.rentPerHour} Rs.</b></p>
              </Col>
              <Col lg={10} sm={24}>
                <p><b>from: {moment(booking.bookedTimeSlots[0].from).format('DD MMM YYYY HH:mm:ss')}</b></p>
                <p><b>to: {moment(booking.bookedTimeSlots[0].to).format('DD MMM YYYY HH:mm:ss')}</b></p>
                <p><b>Date of booking: {moment(booking.createdAt).format('DD MMM YYYY')}</b></p>
              </Col>
              <Col lg={7} sm={24}>
                <img src={booking.car.image} height="140" className='p-2'/>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;

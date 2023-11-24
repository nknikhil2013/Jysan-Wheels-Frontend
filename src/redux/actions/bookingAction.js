import axios from 'axios';
import { message } from 'antd';

export const bookCar = (reqobj) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.post('https://jw-backend-project.onrender.com/api/bookings/bookcar', reqobj);
    dispatch({ type: 'LOADING', payload: false });
    // Assuming the response contains the created booking data
    message.success("Your car booked successfully");
    // You can also dispatch an action with the booking data if needed
    dispatch({ type: 'BOOK_CAR_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'LOADING', payload: false });
    message.error("Something went wrong...Please try again later");
    // You can dispatch an action for failure if needed
    dispatch({ type: 'BOOK_CAR_FAILURE', payload: error.message });
  }
};


export const getAllBookings = () => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.get('https://jw-backend-project.onrender.com/api/bookings/getallbookings');
    dispatch({ type: 'GET_ALL_BOOKINGS', payload: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
    // You might want to handle the error, perhaps dispatch an error action
  } finally {
    dispatch({ type: 'LOADING', payload: false });
  }
};

import React, { useState,useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {Col, Row, Form, Input} from 'antd'
import {useDispatch,useSelector } from 'react-redux'
import { editCar, getAllCars } from '../redux/actions/carsAction'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
function EditCar() {
    const dispatch=useDispatch()
    const {loading} = useSelector(state => state.alertsReducer);
    const {cars}=useSelector(state=>state.carsReducer)
    const[car,setcar]=useState(null)
    const {carid}= useParams()
    const [totalcars,settotalcars]=useState([])

    useEffect(()=>{
        if(cars.length===0){
            dispatch(getAllCars());
        }else{
            settotalcars(cars)
            setcar(cars.find((o)=>o._id===carid))
            console.log(car)
        }
    },[carid,totalcars])
    function onFinish(values){
        values._id=carid;
        dispatch(editCar(values))
        console.log(values)
    }
  return (
    <DefaultLayout>
        {loading && (<Spinner />)}
        <Row justify='center mt-5'>
            <Col lg={12} sm={24}>
                {totalcars.length>0 && (<Form  initialValues={car} className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                    <h3>Edit Car</h3>
                    {car.name}
                    <hr />
                    <Form.Item name='name' label='Car name' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='image' label='Image url' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='rentPerHour' label='Rent Per Hour' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='seatingCapacity' label='Capacity' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name='fuelType' label='Fuel type' rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <div className='text-right'>
                        <button className='btn1'>EDIT CAR</button>
                    </div>
                </Form>)}
            </Col>
        </Row>
    </DefaultLayout>
  )
}

export default EditCar
import axios from 'axios';
import {message} from 'antd';

export const userLogin=(reqObj)=>async dispatch=>{
    dispatch({type:"LOADING",payload:true})


    try{
        const response = await axios.post('https://jw-backend-project.onrender.com/api/users/login',reqObj)
        localStorage.setItem('user',JSON.stringify(response.data))
        message.success('Login success');
        dispatch({type:'LOADING',payload:false})
        setTimeout(() => {
            window.location.href='/';
        }, 500);

    }catch (error){
        console.log(error)
        message.error('user does not exist');
        dispatch({type:'LOADING',payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    dispatch({type:"LOADING",payload:true})

    try{
        const response = await axios.post('https://jw-backend-project.onrender.com/api/users/register',reqObj)
        message.success("Registration Successful")
        setTimeout(() => {
            window.location.href='/login' 
        }, 500);
        dispatch({type:'LOADING',payload:false})
    }

    catch (error){
        console.log(error)
        message.error('Something went Wrong')
        dispatch({type:'LOADING',payload:false})
    }
}

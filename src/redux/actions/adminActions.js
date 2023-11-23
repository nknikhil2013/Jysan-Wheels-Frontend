import axios from 'axios';
import {message} from 'antd';

export const adminLogin=(reqObj)=>async dispatch=>{
    dispatch({type:"LOADING",payload:true})


    try{
        const response = await axios.post('/api/admins/login',reqObj)
        localStorage.setItem('admin',JSON.stringify(response.data))
        message.success('Login success');
        dispatch({type:'LOADING',payload:false})
        setTimeout(() => {
            window.location.href='/admin';
        }, 500);

    }catch (error){
        console.log(error)
        message.error('admin does not exist');
        dispatch({type:'LOADING',payload:false})
    }
}
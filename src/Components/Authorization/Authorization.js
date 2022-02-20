import React, { useState } from 'react'
import { cn } from '@bem-react/classname'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button";
import {Loading} from '../Loading/Loading'
import MainPage from '../MainPage/MainPage'
import { Navigate } from "react-router-dom"
import {Routes,Route, Link, useNavigate} from "react-router-dom"
import './Authorization.scss'

export const cnAuthorization = cn("Authorization");



export const Authorization = ({type}) => {
const [data, setData] = useState({name:"", password:"", email:""})
const [loading, setLoading] = useState(false)
const [error, setError] = useState( false )
console.log("datalAuthorithation", data)
const onChangeName =(e)=>{
  // const value = e.target.value;
  setData({...data, name:e.target.value})
  setError(false)
}
const onChangePass =(e)=>{
  // const value = e.target.value;
  setData({...data, password:e.target.value})
  setError(false)
}
const onChangeEmail =(e)=>{
  // const value = e.target.value;
  setData({...data, email:e.target.value})
  setError(false)
}


const isLoginOk =()=>{

  if(data.password&&data.email){
        navigate("/scann")
   }else{
     setError(true)
   }
}
let navigate = useNavigate()
console.log(type)
  return (
        <div className={cnAuthorization('')}>
       
          { 
            type === "registration" &&  
              <div className={cnAuthorization('Item')}>
                <TextField 
                error={error} 
                variant="outlined"
                label="Name" 
                id="outlined-size-normal" 
                value={data.name}  
                onChange={onChangeName} />
              </div>
           }
           <div className={cnAuthorization('Item')}>
            <TextField 
            error={error}
            variant="outlined" 
            label="E-Mail" 
            value={data.email}  
            onChange={onChangeEmail} />
          </div>
          <div className={cnAuthorization('Item')}>
              <TextField 
              error={error} 
              label="Password" 
              variant="outlined"
              value={data.password}  
              onChange={onChangePass} />
            </div> 
         
          
          <Button className={cnAuthorization('Submit')} type="submit"
            fullWidth variant="contained"
            color="primary"
            onClick={isLoginOk}  >
            { loading ?
              <Loading text="Загружается"/> : <span>
              {
                type === "authorization"? 
                    <span>Войти</span> : 
                    <span>Зарегистрироваться</span> 
              }
              </span>
            }
          </Button>
        </div>
        
)}

export default Authorization

//  {state.redirect && <Navigate push to="/signup" />}
  
import React from 'react';
import MainPage from './Components/MainPage/MainPage';
import Authorization from './Components/Authorization/Authorization'
import AuthAndRegistration from './Components/AuthAndRegistration/AuthAndRegistration'

import {Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom'
import "./App.scss"
import { cn } from '@bem-react/classname'

const cnApp=cn("App")
const App=()=>{

  let navigate = useNavigate()

  React.useEffect(()=>{
    navigate("/authorization")
  },[])
  return(
    <div className={cnApp("Layout")}>
      <Routes>
        <Route path="/authorization" element={<AuthAndRegistration/>} />
        <Route path="/scann" element={<MainPage/>}/>
      </Routes>
    </div>
  )
}
export default App;
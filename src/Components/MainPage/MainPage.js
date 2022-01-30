import React, { useState } from 'react'
import './MainPage.scss'
import cn from 'classnames'
// import Button from '@mui/material/Button';

// export const cnMainPage = cn('MainPage');

const MainPage = () => {
  const url = "http://192.168.1.5:5000/net-scaner"
  const [data, setData] = useState(null)
  // const [loading, setLoading] = useState(false)

  const scanner = () => {
    // setLoading(true);
    fetch(url)
      .then(resp => resp.json()
        .then((data) => {
          // const arr = Object.entries(data.items)
          setData(data)
          // setLoading(false)
          // console.log("arr", arr)
        }))
      .catch(function (error) {
        console.log(error);
      })
  }
  console.log("data", data)

  // const arr = Object.keys(data)


  return (
    <div className={cn('MainPage-Red')}>
      <h1 className={cn('MainPage-Red-Head')} >Hallo,World!</h1>

      <button onClick={scanner}>
        Upload
      </button>



    </div>
  )
}
export default MainPage



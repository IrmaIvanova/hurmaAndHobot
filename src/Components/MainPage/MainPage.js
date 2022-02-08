import React, { useState } from 'react'
import './MainPage.scss'
import { cn } from '@bem-react/classname'
import Button from "@material-ui/core/Button";
import BasicTable from '../Table/Table'
import {Loading} from '../Loading/Loading'

export const cnMainPage = cn('MainPage');

const MainPage = () => {
  const url = "http://192.168.1.5:5000/net-scaner"
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const scanner = () => {
    setLoading(true);
    fetch(url)
      .then(resp => resp.json()
        .then((data) => {
          // const arr = Object.entries(data.items)
          setData(data)
          setLoading(false)
          // console.log("arr", arr)
        }))
      .catch(function (error) {
        console.log(error);
      })
  }
  console.log("data", data)

  // const arr = Object.keys(data)

  const dataDefault = {
    monthsWorked: {
      January: {
        hour: 180,
        prize: 10,
        salary: 45000
      },
      February: {
        hour: 140,
        prize: 5,
        salary: 35000
      },
      March: {
        hour: 160,
        prize: 15,
        salary: 40000
      }
    }
  }

  return (
    <div className={cnMainPage('Red')}>

      <Button type="submit"
      fullWidth variant="contained"
      color="primary"
      onClick={scanner}  >{loading?<Loading text="Загружается"/>: <span>upload</span> } </Button>
  
      {!loading&& data && <BasicTable data={data}></BasicTable>}



    </div>
  )
}
export default MainPage



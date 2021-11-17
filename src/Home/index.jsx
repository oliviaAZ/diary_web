// src/Home/index.jsx
import React, { useState, useEffect } from 'react'
import { Card } from 'antd-mobile'
import { Link } from 'react-router-dom'
import axios from '../utils/axios'
import './style.css'

const Home = () => {
  // 通过 useState Hook 函数定义 list 变量
  const [list, setList] = useState([])
  useEffect(() => {
    // 请求 list 接口，返回列表数据
      axios.get('/list').then(({ data }) => {
          console.log(data, "data");
      setList(data)
    })
  }, [])
  return (
    <div className='diary-list'>
      {
        list.map(item => <>ddddd</>)
      }
    </div>
  )
}

export default Home

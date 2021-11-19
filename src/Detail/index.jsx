import React, { useState, useEffect } from "react"
import { NavBar, Icon, List } from "antd-mobile"
import { useHistory } from "react-router-dom"
import { getQueryString } from "../utils"
import axios from "../utils/axios"

const Detail = () => {
  const [detail, setDetail] = useState({})
  const history = useHistory()
  const id = getQueryString("id")

  useEffect(() => {
    axios.get(`/detail/${id}`).then(({ data }) => {
      if (data.length) {
        setDetail(data[0])
      }
    })
  }, []);

  return (<div className="diary-detail">
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => history.goBack()}
    >{detail.title || ""}</NavBar>
    <List renderHeader={() => `${detail.date} 晴天`} className="my-list">
      <List.Item wrap>
        {detail.content}
      </List.Item>
    </List>
  </div>)
}

export default Detail;

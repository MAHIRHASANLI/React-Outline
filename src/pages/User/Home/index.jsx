import React from 'react';
import { Col, Divider, Row } from 'antd';
const style={width:"100%",height:"100%", borderRadius:"20px" , padding: '8px 0' };
const styleDriver={margin:"40px auto","color": "rgb(173,130,151)"}
const styleCol={margin:"0px auto"}
const Home = () => {
  return (
    <>
    <Divider style={styleDriver} orientation="center">This Home page,nothing much in here</Divider>
    <Row gutter={20}>
      <Col style={styleCol} className="gutter-row"  span={16}>
      <img style={style} src="https://metbuat.az/images/metbuat/images_p/1453368.jpg" alt="" />
      </Col>
    </Row>
  </>
  )
}

export default Home
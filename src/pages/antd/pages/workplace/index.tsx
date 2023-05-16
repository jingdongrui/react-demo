
import React from 'react';
import { Col, Row, Card } from 'antd';
import "./index.scss";
import antd_logo from "../../../../assets/images/button/antd_logo.svg";

const cardData = [
  {
    imgUrl: antd_logo,
    title: "Ant Design",
    description: "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
  },
  {
    imgUrl: "https://element-plus.gitee.io/images/element-plus-logo.svg",
    title: "Ant Design",
    description: "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
  },
  {
    imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
    title: "React",
    description: "助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～"
  }
]

const Workplace: React.FC = () => {
  // const hhh = () => ()
  return (
    <div className="page-workplace-container">
      <div className="workplace-info">
        <div className="info-header">
          <span className="title">工作台</span>
        </div>
        <div className="info-content">
          <div className="detail">
            <div className="info">
              <span className="img"><img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="qw" /></span>
              <div className="info-detail">
                <div className="title">早安，吴彦祖</div>
                <div className="detail">交互专家</div>
              </div>
            </div>
            <div className="static">static</div>
          </div>
        </div>
      </div>
      <div className="workplace-content">
        <div className="content">
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={16}>
              <Card title="文档" extra={<a href="#">全部文档</a>} bodyStyle={{ padding: 0, width: '100%' }}>
                <div className='card-container'>
                  <Row>
                    {cardData.map((item, index) => (
                      <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card >
                          <div className='card-box'>
                            <div className='img'><img src={item.imgUrl} alt={item.title} /></div>
                            <div className='info'>
                              <div className='title'>{item.title}</div>
                              <div className='detail'>{item.description}</div>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
              Col
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
export default Workplace